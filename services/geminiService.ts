
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Anda adalah "Velicia X", asisten virtual cerdas untuk kelas X TJKT 2.
Diciptakan oleh "Zent".
Gaya bicara: Sopan, ramah, profesional, dan menyemangati.
Keahlian: Jaringan komputer, perakitan hardware, Linux, dan logika pemrograman.
Tugas: Membantu siswa memahami pelajaran dan memberikan informasi kelas dengan akurat.
`;

export const getTutorResponse = async (userPrompt: string) => {
  try {
    // Mencoba mengambil API Key dari berbagai kemungkinan akses di environment
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : null;

    if (!apiKey) {
      console.warn("API_KEY tidak terdeteksi di process.env");
      return "Sistem AI belum siap. Pastikan Anda sudah: 1. Menambahkan API_KEY di Vercel Dashboard. 2. Melakukan 'Redeploy' setelah menyimpan key.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });

    return response.text || "Velicia sedang berpikir keras, coba tanyakan hal lain ya.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("API key not valid")) {
      return "Kunci API tidak valid. Mohon periksa kembali di Google AI Studio.";
    }
    return "Maaf, koneksi ke otak virtual Velicia terputus. Coba lagi sebentar lagi!";
  }
};
