"use client"

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import { useRef } from "react";
import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';


const Dailychallenge = () => {

  const hasFetched = useRef(false);
  const [geminiAns, setGeminiAns] = useState("")
  const [streak, setStreak] = useState(0)

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY2);



  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true

    const askGemini = async () => {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent({
          contents: [{ parts: [{ text: `Generate a unique, practical daily task for a college student to improve productivity or personal growth, and give task in one sentence.` }] }]
        });
        const response = await result.response;
        const replyText1 = await response.text();
        setGeminiAns(replyText1)

      } catch (error) {
        setGeminiAns("Gemini is currently unavailable. Please try again in a bit.")
      }
    }

    askGemini()

    const intervalId = setInterval(() => {
      askGemini()
    }, 86400000);

    return () => clearInterval(intervalId)
  }, [])



  function clicked() {
    setStreak(streak + 1)
  }



  return (
    <div className="bg-gray-100 min-h-screen text-white">
      <Navbar />

      <p className="text-center mt-24 font-bold text-3xl text-blue-950">
        Push your limits with new Challenges Every Day
      </p>

      <div className=" my-16 flex flex-col mb-30 lg:flex-row gap-10 justify-center">
        <div className="bg-blue-950 lg:w-1/2 rounded-xl p-8">
          <p className="text-center font-semibold text-2xl mb-4">A Daily Challenge</p>
          <p className="text-yellow-300 text-xl text-center font-semibold mb-8">
            {geminiAns}
          </p>
          <div className="flex justify-between items-center text-white px-4">
            <p className="text-lg font-medium mt-10">150 Points</p>
            <button onClick={clicked} className="bg-green-600 mt-10 px-4 py-2 rounded-xl cursor-pointer hover:bg-green-700 transition">
              Completed
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-1/3">
          <div className="bg-blue-950 rounded-xl p-6 shadow-lg text-center">
            <p className="text-lg font-semibold mb-2">Your Streak</p>
            <p className="text-4xl font-bold text-indigo-400">{streak}</p>
            <p className="text-gray-300 mt-1">days in a row</p>
          </div>

          <div className="bg-blue-950 rounded-xl p-6 shadow-lg">
            <p className="text-lg font-semibold mb-4">Challenge Stats</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <p>Monthly Progress</p>
                <p>15/30</p>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full">
                <div className="h-full w-1/2 bg-white rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <p>Total Points</p>
                <p>1250</p>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full">
                <div className="h-full w-3/4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dailychallenge;
