import { GoogleGenAI } from "@google/genai";
import { loadEnv } from 'vite';

async function run() {
  const env = loadEnv('development', process.cwd(), '');
  const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.log("NO API KEY");
    return;
  }
  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "test",
        temperature: 0.7,
        responseMimeType: "application/json"
      }
    });
    const response = await chat.sendMessage({ message: "hello" });
    console.log("SUCCESS:", response.text);
  } catch (e) {
    console.log("ERROR:", e.message);
  }
}
run();
