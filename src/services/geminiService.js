import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function analyzeComplaint(description, category) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
Analyze this civic complaint.

Category:
${category}

Description:
${description}

Return in this format:

Issue Type:
Severity:
Priority:
Department:
Suggested Action:
Estimated Resolution Time:
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}