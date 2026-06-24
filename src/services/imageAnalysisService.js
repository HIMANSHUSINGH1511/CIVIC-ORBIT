import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function analyzeImage(base64Image) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent([
    {
      inlineData: {
        data: base64Image,
        mimeType: "image/jpeg",
      },
    },

    `
Analyze this civic issue image.

Return:

Issue Type:
Severity:
Priority:
Department:
Suggested Action:
`,
  ]);

  return result.response.text();
}