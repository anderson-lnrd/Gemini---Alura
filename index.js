import  { GoogleGenerativeAI } from '@google/generative-ai';
import { fazerPergunta } from './pergunta.js';

const genAI = new GoogleGenerativeAI('AIzaSyDKQk7f5kv6ywrUyx4iWVxOcljUA84ycXM');

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    let prompt = "Você é um site sobre viagens e deve responder somente sobre esse assunto. " +
    "Caso o usuário pergunte sobre algo diferente, diga que não pode responder. " +
    "O usuário escolheu: ";
    prompt += await fazerPergunta("Me fale sobre o destino que deseja conhecer: ");
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();