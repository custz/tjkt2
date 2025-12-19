
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Loader2, Sparkles } from 'lucide-react';
import { getTutorResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Halo! Saya Velicia X, asisten virtual kelas X TJKT 2. Ada yang bisa saya bantu seputar pelajaran jaringan, hardware, atau info kelas hari ini? Saya di sini untuk membantu dengan senang hati." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Logo provided by user
  const botLogo = "https://img.icons8.com/?size=100&id=111475&format=png&color=000000";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const botResponse = await getTutorResponse(userMessage);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Maaf, sepertinya terjadi gangguan. Bisa tolong ulangi pertanyaan Anda?" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-20">
      <div className="glass rounded-[2rem] overflow-hidden flex flex-col h-[600px] border-white/10 shadow-2xl">
        {/* Header */}
        <div className="bg-white/5 px-8 py-6 flex items-center gap-4 border-b border-white/5">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden">
             <img src={botLogo} alt="Velicia X" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              Velicia X <Sparkles size={16} className="text-blue-400" />
            </h2>
            <p className="text-xs text-slate-400">Oleh Zent • Online</p>
          </div>
        </div>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide"
        >
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden ${
                  msg.role === 'user' ? 'bg-blue-600' : 'bg-white'
                }`}>
                  {msg.role === 'user' ? <User size={14} /> : <img src={botLogo} alt="V" className="w-6 h-6" />}
                </div>
                <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-blue-500 text-white rounded-tr-none' 
                  : 'bg-white/5 text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-3 items-center text-slate-500">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img src={botLogo} alt="V" className="w-6 h-6" />
                </div>
                <div className="flex gap-1">
                  <Loader2 className="animate-spin" size={16} />
                  <span className="text-xs italic">Sedang berpikir...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white/5 border-t border-white/5">
          <div className="relative flex items-center gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tanya apa saja tentang jaringan atau kelas..."
              className="flex-1 bg-slate-900 border border-white/10 rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="p-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 rounded-xl transition-all"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
