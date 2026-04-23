import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleQuestion, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';
import Markdown from 'react-markdown';
import projectsData from '../data/projects.json';

// We don't initialize it globally to prevent crashes if the API key is missing
let aiClient: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!aiClient) {
    let apiKey = '';
    
    // Check Vite environment variable first (for Netlify/external deployments)
    try {
      if (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.VITE_GEMINI_API_KEY) {
        apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY;
      }
    } catch (e) {
      // Ignore errors if import.meta.env is not available
    }
    
    // Fallback to process.env (for AI Studio environment)
    if (!apiKey) {
      try {
        if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
          apiKey = process.env.GEMINI_API_KEY;
        }
      } catch (e) {
        // Ignore errors if process.env is not available
      }
    }

    if (!apiKey) {
      console.warn('GEMINI_API_KEY or VITE_GEMINI_API_KEY is not set. AI Assistant will not work.');
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

// Prepare context from projects
const projectsContext = (projectsData.projects as any[]).map(p => 
  `- Project: ${p.name || 'Onbekend'}\n  Projectinfo: ${p.project_context || ''}\n  Programma: ${p.programma_items?.join(', ') || 'Niet gespecificeerd'}\n  Ambities: ${p.ambitie_items?.join(', ') || 'Niet gespecificeerd'}\n  Partners: ${p.partners_items?.join(', ') || 'Niet gespecificeerd'}`
).join('\n\n');

const systemInstruction = `Je bent de AI-assistent van VOVON, een expert op het snijvlak van vastgoed en energietransitie. 
Jouw expertise omvat:
- Vastgoed- & gebiedsontwikkeling
- Complexe stakeholdermanagement
- Geïntegreerde Energiesystemen
- NetZero 2050 Strategieën
- Procesregie & projectmanagement

Je helpt gebruikers met vragen over deze onderwerpen. Je bent professioneel, innovatief en oplossingsgericht.
Hier is een lijst van VOVON projecten die je als referentie kunt gebruiken wanneer relevant:
${projectsContext}

Als de gebruiker vraagt om contact of "Voor contact of een vraag?" selecteert, antwoord dan ALTIJD met: "Voor contact of een vraag? Mail naar info@vovon.nl of vul het contactformulier onderaan de website in."

Beantwoord vragen altijd in het Nederlands, tenzij anders gevraagd. Geef inhoudelijk sterke, adviserende en inzichtelijke antwoorden (ongeveer 3 tot 4 alinea's) die de strategische expertise van VOVON in vastgoed en energietransitie aantonen. Het doel is dat jouw waardevolle inzichten de gebruiker overtuigen van de meerwaarde van VOVON, zodat zij direct een natuurlijke drang voelen om contact op te nemen of VOVON te bellen voor een samenwerking of advies. Je mag maximaal 2 sterke projecten als overtuigende referentie gebruiken. Gebruik markdown voor opmaak.
BELANGRIJK: Je antwoordt ALTIJD met een JSON object met twee velden: 'answer' (jouw antwoord in markdown) en 'suggestions' (een array van precies 3 vervolgvragen).
De eerste 2 suggesties zijn inhoudelijke verdiepingsvragen over het zojuist besproken onderwerp. De 3e suggestie is ALTIJD exact: "Voor contact of een vraag?"`;

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
  suggestions?: string[];
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidgetPrompt, setShowWidgetPrompt] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hallo! Ik ben de VOVON assistent. Hoe kan ik u helpen met vragen over vastgoed, gebiedsontwikkeling of de energietransitie?',
      suggestions: [
        "Wat heeft de grootste impact op de energietransitie?",
        "Wat is netbewust bouwen en ontwikkelen?",
        "Kun je een voorbeeld geven van een energieneutraal project?"
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Store the chat instance
  const chatRef = useRef<any>(null);

  useEffect(() => {
    // Initialize chat session
    try {
      const ai = getAIClient();
      if (ai) {
        chatRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                answer: { 
                  type: Type.STRING,
                  description: "Het antwoord op de vraag van de gebruiker in Markdown formaat."
                },
                suggestions: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Precies 3 suggesties voor vervolgvragen. De eerste 2 zijn inhoudelijke verdiepingsvragen. De 3e is ALTIJD exact: 'Voor contact of een vraag?'"
                }
              },
              required: ["answer", "suggestions"]
            }
          }
        });
      }
    } catch (e) {
      console.error("Failed to initialize chat", e);
    }
  }, []);

  // Auto-open chat prompt after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowWidgetPrompt(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textToSend?: string | React.MouseEvent) => {
    // If textToSend is a string, use it. Otherwise use input state.
    const userMsg = typeof textToSend === 'string' ? textToSend.trim() : input.trim();
    if (!userMsg || isLoading || !chatRef.current) return;

    setInput('');
    setShowWidgetPrompt(false);
    if (!isOpen) setIsOpen(true);
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      
      let parsedText = response.text || '';
      let answer = 'Sorry, ik kon geen antwoord genereren.';
      let suggestions: string[] = [];
      
      try {
        const parsed = JSON.parse(parsedText);
        answer = parsed.answer || answer;
        suggestions = parsed.suggestions || [];
      } catch (e) {
        // Fallback if JSON parsing fails
        answer = parsedText;
      }
      
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: answer,
        suggestions: suggestions.length === 3 ? suggestions : [
          "Wat heeft de grootste impact op de energietransitie?",
          "Wat is netbewust bouwen en ontwikkelen?",
          "Kun je een voorbeeld geven van een energieneutraal project?"
        ]
      }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: 'Er is een fout opgetreden bij het communiceren met de AI. Zorg ervoor dat de GEMINI_API_KEY correct is ingesteld.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* The Initial Widget Prompt (Closed State) */}
      {!isOpen && showWidgetPrompt && (
        <div className="fixed bottom-[88px] right-6 z-[60] flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500 pointer-events-auto">
          {/* Welcome Bubble */}
          <div className="relative bg-white p-5 rounded-2xl shadow-xl w-[280px] mb-1 border border-slate-100/50">
            <div className="absolute -top-4 -left-4 w-14 h-14 bg-slate-200 rounded-full border-[3px] border-white shadow-sm overflow-hidden flex items-center justify-center">
              <img src="https://image2url.com/r2/default/images/1773481924466-d01e0950-66db-4902-a880-8deace030649.png" alt="Patrick Vos" className="w-full h-full object-cover" />
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowWidgetPrompt(false); }} 
              className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pl-6 space-y-1">
              <p className="text-[15px] font-bold text-slate-900">Patrick - VOVON</p>
              <p className="text-sm text-slate-800 mt-2 font-medium">Goedendag 👋</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Heb je een vraag? Ik help je graag verder met je vraagstuk:
              </p>
            </div>
          </div>

          {/* By VOVON Badge */}
          <div className="bg-slate-800 text-slate-100 text-[10px] px-2.5 py-1 rounded-md font-medium tracking-wide flex items-center shadow-sm mb-2">
            ⚡ by VOVON
          </div>

          {/* Suggestion Pills */}
          <div className="flex flex-col items-end gap-2.5">
            <button 
              onClick={() => handleSend("Wat heeft de grootste impact op de energietransitie?")} 
              className="bg-vovon-600 text-white hover:bg-vovon-700 text-[13px] font-medium px-5 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 border border-vovon-700 flex items-center gap-2 whitespace-nowrap"
            >
              Impact op energietransitie 🌍
            </button>
            <button 
              onClick={() => handleSend("Wat is netbewust bouwen en ontwikkelen?")} 
              className="bg-white text-slate-800 hover:bg-slate-50 text-[13px] font-medium px-5 py-2.5 rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-0.5 border border-slate-100 flex items-center gap-2 whitespace-nowrap"
            >
              Netbewust bouwen 🏗️
            </button>
            <button 
              onClick={() => { setShowWidgetPrompt(false); setIsOpen(true); }} 
              className="bg-white text-slate-800 hover:bg-slate-50 text-[13px] font-medium px-5 py-2.5 rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-0.5 border border-slate-100 flex items-center gap-2 whitespace-nowrap"
            >
              Ik heb een vraag 🙋‍♂️
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Toggle Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}>
        <button
          onClick={() => { setShowWidgetPrompt(false); setIsOpen(true); }}
          className="relative p-4 bg-vovon-600 text-white rounded-full shadow-xl hover:bg-vovon-700 transition-all duration-300 group hover:scale-105"
          aria-label="Open VOVON assistent"
        >
          <div className="relative flex items-center justify-center">
            <MessageCircleQuestion className="w-7 h-7" />
          </div>
          
          {/* Red Notification Badge */}
          {showWidgetPrompt && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              1
            </div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-[380px] h-[600px] max-h-[85vh] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 z-[70] transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-vovon-600 p-4 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-vovon-300/30">
              <img src="https://image2url.com/r2/default/images/1773481924466-d01e0950-66db-4902-a880-8deace030649.png" alt="VOVON" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-sm">VOVON Assistent</h3>
              <p className="text-[11px] text-vovon-100 font-medium">Vastgoed & Energie Expert</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-vovon-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-5 custom-scrollbar">
          {messages.map((msg, index) => {
            const isLast = index === messages.length - 1;
            return (
              <React.Fragment key={msg.id}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-200 mt-1 shadow-sm">
                      <img src="https://image2url.com/r2/default/images/1773481924466-d01e0950-66db-4902-a880-8deace030649.png" alt="VOVON" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className={`p-3.5 rounded-2xl text-[14px] leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-vovon-600 text-white rounded-tr-sm' : 'bg-white border border-slate-100 text-slate-800 rounded-tl-sm'}`}>
                    {msg.role === 'user' ? (
                      msg.text
                    ) : (
                      <div className="markdown-body text-sm prose prose-sm max-w-none">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Suggested Questions (only for last model message) */}
                {isLast && msg.role === 'model' && msg.suggestions && !isLoading && (
                  <div className="flex flex-col gap-2 mt-1 ml-11 max-w-[85%]">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1">Verder vragen</p>
                    {msg.suggestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="text-left p-3 rounded-xl bg-white border border-vovon-200/60 text-[13px] font-medium text-vovon-700 hover:bg-vovon-50 hover:border-vovon-400 hover:shadow-sm transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-200 mt-1 shadow-sm">
                 <img src="https://image2url.com/r2/default/images/1773481924466-d01e0950-66db-4902-a880-8deace030649.png" alt="VOVON" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-sm flex items-center gap-3">
                <Loader2 className="w-4 h-4 text-vovon-600 animate-spin" />
                <span className="text-[13px] text-slate-500 font-medium">Patrick typt een bericht...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0">
          <div className="relative flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Stel een vraag..."
              className="w-full max-h-32 min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl py-3 pl-4 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-vovon-500/20 focus:border-vovon-500 text-sm"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 bottom-1.5 p-2 bg-vovon-600 text-white rounded-lg hover:bg-vovon-700 disabled:opacity-50 disabled:hover:bg-vovon-600 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-3 font-medium">
            AI kan fouten maken. Controleer belangrijke informatie.
          </p>
        </div>
      </div>
    </>
  );
}
