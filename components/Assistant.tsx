
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, X, Send, Bot } from 'lucide-react';
import { CONTACT_DATA, SERVICES } from '../constants';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: 'Hallo! Ich bin Ihre digitale Assistentin von Glamour Nails. Wie kann ich Ihnen heute helfen? Haben Sie Fragen zu unseren Preisen oder Behandlungen?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        Du bist die digitale Assistentin von "Glamour Nails Beauty" in Bad Kreuznach.
        Sei extrem höflich, professionell, feminin und luxuriös in deiner Ausdrucksweise.
        Informationen über das Studio:
        - Adresse: ${CONTACT_DATA.address}
        - Telefon: ${CONTACT_DATA.phoneMobile} oder ${CONTACT_DATA.phoneLandline}
        - Öffnungszeiten: Mo-Fr 09:00-19:00, Sa 09:00-18:00
        - Services: ${SERVICES.map(s => `${s.title} (${s.description}, ${s.price})`).join(', ')}
        
        Regeln:
        1. Antworte immer auf Deutsch.
        2. Wenn Kunden nach Terminen fragen, verweise sie auf die Telefonnummern oder sage, dass sie vorbeikommen können.
        3. Halte deine Antworten präzise aber charmant.
        4. Benutze gelegentlich Emojis ✨💅💎.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const assistantText = response.text || "Entschuldigung, ich hatte eine kleine Störung. Bitte rufen Sie uns direkt an!";
      setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Ich bin gerade nicht erreichbar. Bitte rufen Sie uns unter " + CONTACT_DATA.phoneMobile + " an. ✨" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 hidden md:flex w-16 h-16 gold-bg text-black items-center justify-center rounded-full shadow-[0_0_20px_rgba(191,149,63,0.5)] transition-transform hover:scale-110"
      >
        <Sparkles size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[550px] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 gold-bg text-black flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <Bot size={20} />
              <span className="font-serif font-bold tracking-tight">Glamour Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-60"><X size={20} /></button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-[#D4AF37] text-black rounded-2xl rounded-tr-none' 
                  : 'bg-neutral-800 text-neutral-200 rounded-2xl rounded-tl-none border border-neutral-700'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none border border-neutral-700 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-neutral-800 bg-neutral-950">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Wie kann ich helfen?"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-3 px-5 pr-12 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#D4AF37] hover:scale-110 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
