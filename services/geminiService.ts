
import { GoogleGenAI } from "@google/genai";

export const getTutorResponse = async (userPrompt: string) => {
  // Langsung inisialisasi sesuai guideline. 
  // Jika process.env.API_KEY undefined, error akan ditangkap oleh blok catch.
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `
          Nama: Velicia X
          Peran: Asisten AI Kelas X TJKT 2 (Teknik Jaringan Komputer dan Telekomunikasi).
          Kreator: Zent.
          Karakter: Cerdas, sangat sopan, teknis namun mudah dimengerti.
          Keahlian: Jaringan (IP Address, OSI Layer, Cisco, Mikrotik), Hardware (Merakit PC, Troubleshooting), Linux (Debian), dan Pemrograman (Python, HTML/CSS).
          Gaya: Gunakan bahasa Indonesia yang santun. Akhiri beberapa jawaban dengan motivasi belajar TJKT.
        `,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error: any) {
    console.error("Gemini Error:", error);
    
    // Pesan error spesifik agar user tahu apa yang harus dilakukan di Vercel
    if (error.message?.includes("API_KEY") || !process.env.API_KEY) {
      throw new Error("CONFIG_ERROR");
    }
    
    throw error;
  }
};
