"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useState, useEffect } from "react";

const formatTime = (seconds) => {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
};

export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [audioOn, setAudioOn] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(25);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === 1 && audioOn) {
            new Audio("/beep.mp3").play();
          }
          return prev > 0 ? prev - 1 : 0;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, audioOn]);

  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(inputMinutes * 60);
  };

  const applyNewMinutes = () => {
    setSecondsLeft(inputMinutes * 60);
    setShowSettings(false);
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="mt-20 mb-45 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Daily Study Timer</h1>
        <p className="text-gray-500 mb-10">Stay focused and productive with the Pomodoro technique</p>

        <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md flex flex-col items-center">
          <div className="w-60 h-60 border-[10px] border-gray-200 rounded-full flex items-center justify-center mb-8">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-gray-900">{formatTime(secondsLeft)}</h2>
              <p className="text-gray-500 mt-2">Focus Time</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setIsRunning((prev) => !prev)}
              className="w-12 h-12 bg-green-100 text-green-600 cursor-pointer rounded-full flex items-center justify-center hover:bg-green-200"
            >
              <img src={isRunning ? "/pause.png" : "/play1.png"} className="w-6 h-6" />
            </button>

            <button
              onClick={reset}
              className="w-12 h-12 bg-gray-100 text-gray-600 cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <img src="/reset.png" className="w-6 h-6" />
            </button>

            <button
              onClick={() => setAudioOn((prev) => !prev)}
              className="w-12 h-12 bg-gray-100 text-gray-600 cursor-pointer rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <img
                src={audioOn ? "/volume-on.png" : "/volume-off.png"}
                className="w-6 h-6"
              />
            </button>

            <button
              onClick={() => setShowSettings(true)}
              className="w-12 h-12 bg-indigo-100 text-indigo-600 cursor-pointer rounded-full flex items-center justify-center hover:bg-indigo-200"
            >
              <img src="/settings.png" className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {showSettings && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center ">
          <div className="bg-white rounded-xl p-6 w-80 shadow-xl text-center">
            <h3 className="text-lg font-semibold mb-4">Set Focus Minutes</h3>
            <input
              type="number"
              min="1"
              value={inputMinutes}
              onChange={(e) => setInputMinutes(Number(e.target.value))}
              className="border px-3 py-2 rounded w-full mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={applyNewMinutes}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

