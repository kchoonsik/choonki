import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { prompt } = req.body;
  const apiKey = process.env.GOOGLE_GENERATION_AI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ message: 'API Key not configured in Vercel.' });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.status(200).json({ text });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}