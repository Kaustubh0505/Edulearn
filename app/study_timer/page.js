"use client"
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';

const Studytimer = () => {
  const [time, setTime] = useState(25 * 60)
  const [Running, setRunning] = useState(false)
  const [customMinutes, setCustomMinutes] = useState('')
  const [bgColor, setBgColor] = useState('bg-white')

  useEffect(() => {
    let timer;
    if (Running) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [Running]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return formattedMinutes + ":" + formattedSeconds
  };

  const startTimer = () => setRunning(true)
  const pauseTimer = () => setRunning(false)
  const resetTimer = () => {
    setRunning(false)
    setTime(25 * 60)
    setCustomMinutes('')
    setBgColor('bg-white')
  };

  const customInput = () => {
    const minutes = parseInt(customMinutes);
    if (!isNaN(minutes) && minutes > 0) {
      setTime(minutes * 60)
      setRunning(false)
      setBgColor('bg-white')
    } else {
      alert("Please enter a valid number of minutes!");
    }
  };

  const setPresetTime = (minutes, color) => {
    setTime(minutes * 60)
    setRunning(false)
    setCustomMinutes('')
    setBgColor(color)
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className='font-bold text-3xl m-10'>Boost your Study with Pomodoro</div>
        <div className={`w-1/2 min-h-60 border rounded-2xl mb-50  ${bgColor} text-black flex flex-col items-center justify-center shadow-lg pl-6 pr-6 pt-15 pb-15 duration-500 font-semibold`}>
          <h1 className="text-5xl font-bold mb-6">{formatTime(time)}</h1>

          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setPresetTime(25, 'bg-indigo-200')}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 ">
              Focus Session (25 min)
            </button>
            <button
              onClick={() => setPresetTime(5, 'bg-green-200')}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ">
              Short Break (5 min)
            </button>
            <button
              onClick={() => setPresetTime(15, 'bg-sky-800')}
              className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700/90 ">
              Long Break (15 min)
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={startTimer}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ">
              Start
            </button>
            <button
              onClick={pauseTimer}
              className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-600 ">
              Pause
            </button>
            <button
              onClick={resetTimer}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 ">
              Reset
            </button>
          </div>

          <div className="flex space-x-2 mt-4">
            <input
              type="number"
              placeholder="Enter minutes"
              value={customMinutes}
              onChange={(e) => setCustomMinutes(e.target.value)}
              className="border rounded-lg p-2 w-32 text-center"
            />
            <button
              onClick={customInput}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ">
              Set Timer
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Studytimer;
