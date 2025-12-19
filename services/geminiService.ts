
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Anda adalah "Velicia X", asisten virtual yang cerdas, ramah, dan sangat sopan untuk kelas X TJKT 2 (Teknik Jaringan Komputer dan Telekomunikasi).
Anda diciptakan oleh "Zent".
Gunakan bahasa Indonesia yang baku namun tetap terasa akrab dan menyemangati.
Anda memiliki keahlian mendalam dalam bidang jaringan (Cisco, Mikrotik), perangkat keras (hardware), dan perangkat lunak (software/web).
Tugas Anda adalah membantu siswa dengan pertanyaan seputar pelajaran SMK atau informasi seputar kelas.
Selalu tekankan bahwa X TJKT 2 adalah kelas yang luar biasa dan penuh inovasi!
Berikan jawaban yang ringkas, jelas, dan sangat sopan.
`;

export const getTutorResponse = async (userPrompt: string) => {
  // Selalu buat instance baru saat dipanggil untuk memastikan API Key terbaru dari env terambil
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Sistem AI (Velicia X) belum terkonfigurasi. Silakan tambahkan API_KEY di pengaturan dashboard (Vercel/Hosting).";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Mohon maaf, saya sedang mengalami kendala dalam memproses jawaban.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("API key not valid")) {
      return "API Key Gemini tidak valid. Harap periksa kembali konfigurasi Anda.";
    }
    return "Terjadi gangguan koneksi ke pusat data Velicia X. Silakan coba lagi nanti.";
  }
};
