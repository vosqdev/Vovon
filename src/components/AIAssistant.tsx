import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import projectsData from '../data/projects.json';

// We don't initialize it globally to prevent crashes if the API key is missing
let aiClient: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!aiClient) {
    let apiKey = '';
    
    // Check Vite environment variable first (for Netlify/external deployments)
    try {
      if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY) {
        apiKey = import.meta.env.VITE_GEMINI_API_KEY;
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
const projectsContext = projectsData.projects.map(p => 
  `- ${p.name} (${p.planperiode || 'Onbekend'}): ${p.project_context}. Programma: ${p.programma_items?.join(', ')}. Ambitie: ${p.ambitie_items?.join(', ')}.`
).join('\n');

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

Beantwoord vragen altijd in het Nederlands, tenzij anders gevraagd. Wees beknopt maar informatief. Gebruik markdown voor opmaak.`;

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hallo! Ik ben de VOVON AI-assistent. Hoe kan ik u helpen met vragen over vastgoed, gebiedsontwikkeling of de energietransitie?'
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
          }
        });
      }
    } catch (e) {
      console.error("Failed to initialize chat", e);
    }
  }, []);

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
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: response.text || 'Sorry, ik kon geen antwoord genereren.' 
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

  const suggestedQuestions = [
    "Hoe helpt VOVON bij de transitie naar NetZero 2050?",
    "Kun je een voorbeeld geven van een energieneutraal project?",
    "Wat is jullie aanpak bij complexe gebiedsontwikkeling?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-vovon-600 text-white rounded-full shadow-xl hover:bg-vovon-700 transition-all duration-300 z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-[380px] h-[600px] max-h-[80vh] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 z-50 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-vovon-600 p-4 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6" />
            <div>
              <h3 className="font-bold">VOVON AI</h3>
              <p className="text-xs text-vovon-100">Vastgoed & Energie Expert</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-vovon-700 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-vovon-100 text-vovon-600'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-vovon-600 text-white rounded-tr-none' : 'bg-white border border-slate-100 shadow-sm text-slate-700 rounded-tl-none'}`}>
                {msg.role === 'user' ? (
                  msg.text
                ) : (
                  <div className="markdown-body">
                    <Markdown>{msg.text}</Markdown>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Suggested Questions */}
          {messages.length === 1 && !isLoading && (
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-xs text-slate-500 font-medium ml-1 mb-1">Veelgestelde vragen:</p>
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="text-left p-3 rounded-xl bg-white border border-vovon-200 text-sm text-vovon-700 hover:bg-vovon-50 hover:border-vovon-300 transition-colors shadow-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {isLoading && (
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-vovon-100 text-vovon-600 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-4 bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-none flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-vovon-600 animate-spin" />
                <span className="text-sm text-slate-500">Aan het denken...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-100">
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
          <p className="text-[10px] text-center text-slate-400 mt-2">
            AI kan fouten maken. Controleer belangrijke informatie.
          </p>
        </div>
      </div>
    </>
  );
}
