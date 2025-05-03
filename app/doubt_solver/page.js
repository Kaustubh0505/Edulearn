"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);

const DoubtSolver = () => {
  const [userQue, setUserQue] = useState('');
  const [geminiAns, setGeminiAns] = useState('');
  const [isThinking, setIsThinking] = useState(false);


  const suggestedQuestions = [
    'How do I solve quadratic equations?',
    'How do I calculate standard deviation?',
    'Explain the Binomial Theorem',
    'What is the difference between velocity and acceleration?'
  ];


  const handleSuggesClick = (questionText) => {
    setUserQue(questionText)
  }


  const askGemini = async () => {
    if (!userQue.trim()) return;

    setIsThinking(true)
    setGeminiAns('')

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const result = await model.generateContent({
        contents: [{ parts: [{ text: `Act like a teacher,who teaches the best of any topic in very short and you are solving doubt of one of the student, Now answer this:- ${userQue}` }] }]
      });

      const response = await result.response;
      const replyText = response.text()
      setGeminiAns(replyText)
    } catch (error) {
      console.error("Gemini error:", error)
      setGeminiAns("Gemini is currently unavailable. Please try again in a bit.")
    } finally {
      setIsThinking(false)
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col">
      <Navbar />

      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Solve Your Doubts with Gemini AI</h1>
        <p className="text-lg text-gray-500 mt-2">Ask anything academic, and get expert-level answers instantly</p>
      </div>

      <div className="flex-grow flex justify-center mt-10 mb-16 px-4">
        <div className="bg-white max-w-2xl rounded-xl shadow-lg p-6">
          <label className="text-lg font-semibold mb-3 block">
            What would you like to know?
          </label>

          <div className="flex flex-wrap gap-2 mb-4">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggesClick(question)}
                className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 cursor-pointer text-indigo-800 text-sm rounded-full"
              >
                {question}
              </button>
            ))}
          </div>

          <textarea
            value={userQue}
            onChange={(e) => setUserQue(e.target.value)}
            placeholder="Type your question here..."
            className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
          ></textarea>

          <button
            onClick={askGemini}
            disabled={isThinking}
            className="mt-3 w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition disabled:opacity-50"
          >
            {isThinking ? "Solving your doubt..." : "Send to Gemini"}
          </button>

          {geminiAns && (
            <div className="mt-6 bg-gray-50 p-4 rounded-xl border-gray-200">
              <p className="text-md font-semibold text-indigo-700">Gemini says:</p>
              <p className="mt-2 whitespace-pre-line text-gray-800">{geminiAns}</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoubtSolver;
