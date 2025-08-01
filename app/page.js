"use client";
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React, { useEffect } from 'react';
import Link from "next/link";
import { checkAuthAndRedirect } from './libs/utils/firebase';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();
  useEffect(() => {
    checkAuthAndRedirect(router);
  }, [router]);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center mt-0.5">
        <div className="w-full text-5xl pl-10 pt-20 font-bold bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg pb-20 relative ">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <img
              className="hidden lg:block absolute top-0 right-0 w-40 mr-20 mt-20"
              src="book.svg"
            />

          </div>

          <div>
            <div className="pl-10 pt-5">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-indigo-300 to-purple-300 text-6xl font-extrabold">
                Learn, Practice, and Grow
              </span>
            </div>
            <div className="text-lg font-medium pl-10 pt-8 max-w-xl text-blue-100">
              Enhance your learning journey with interactive tools designed to make education engaging and effective.
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-blue-900 to-purple-800 mb-4">
            Education Tools
          </h1>
          <p className="text-blue-900 text-lg font-medium">Explore powerful tools to boost your learning experience.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 mt-16 relative">
          <div className="bg-blue-50 shadow-lg rounded-2xl p-8 w-80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
            <div className="bg-blue-100 rounded-xl p-4 w-20 h-20 mb-4 mx-auto flex items-center justify-center">
              <img src="quiz.svg" className="w-12 h-12" />
            </div>
            <h2 className="font-extrabold text-2xl bg-clip-text text-blue-900 mb-2 text-center">Quiz</h2>
            <p className="text-blue-900 mb-6 text-center font-medium">Test your skills with quizzes covering various topics and difficulty levels.</p>
            <Link

              className="flex mx-15 items-center justify-center cursor-pointer w-1/2 py-2.5 text-center text-white duration-200 bg-gray-900 border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black text-l font-semibold"
              href="/quiz"
            >
              Quiz
            </Link>
          </div>

          <div className="bg-blue-50 shadow-lg rounded-2xl p-8 w-80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-4 w-20 h-20 mb-4 mx-auto flex items-center justify-center">
              <img src="https://img.icons8.com/color/480/000000/teacher.png" className="w-12 h-12" />
            </div>
            <h2 className="font-extrabold text-2xl text-blue-900 mb-2 text-center">AI Doubt Solver</h2>
            <p className="text-blue-900 mb-6 text-center font-medium">Solve your doubts easily with AI explanations crafted for you.</p>
            <Link

              className="flex mx-15 items-center justify-center cursor-pointer w-1/2 py-2.5 text-center text-white duration-200 bg-gray-900 border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black text-l font-semibold"
              href="/doubt_solver"
            >
              Ask Gemini
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 mt-12 mb-20 relative">
          <img
            src="https://img.icons8.com/color/480/000000/learning.png"
            className="absolute left-20 top-1/2 transform  w-32 h-32 opacity-5"
          />

          <div className="bg-blue-50 shadow-lg rounded-2xl p-8 w-80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-4 w-20 h-20 mb-4 mx-auto flex items-center justify-center">
              <img src="https://img.icons8.com/color/480/000000/stopwatch.png" alt="Daily Timer" className="w-12 h-12" />
            </div>
            <h2 className="font-extrabold text-2xl bg-clip-text text-blue-900 mb-2 text-center">Daily Timer</h2>
            <p className="text-blue-900 mb-6 text-center font-medium">Boost productivity with our Pomodoro timer. Stay focused and efficient.</p>
            <Link

              className="flex mx-15 items-center justify-center cursor-pointer w-1/2 py-2.5 text-center text-white duration-200 bg-gray-900 border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black text-l font-semibold"
              href="/study_timer"
            >
              Timer
            </Link>
          </div>

          <div className="bg-blue-50 shadow-lg rounded-2xl p-8 w-80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100">
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-4 w-20 h-20 mb-4 mx-auto flex items-center justify-center">
              <img src="https://img.icons8.com/color/480/000000/medal.png" alt="Daily Challenge" className="w-12 h-12" />
            </div>
            <h2 className="font-extrabold text-2xl bg-clip-text text-blue-900 mb-2 text-center">Daily Challenge</h2>
            <p className="text-blue-900 mb-6 text-center font-medium">Challenge yourself daily — small steps lead to big achievements!</p>
            <Link

              className="flex mx-11 items-center justify-center cursor-pointer w-2/3 py-2.5 text-center text-white duration-200 bg-gray-900 border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black text-l font-semibold"
              href="/daily_challenge"
            >
              Daily Challenge
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
