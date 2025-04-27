import React from 'react';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center mt-0.5">
            <div className="w-full text-5xl pl-10 pt-20 font-bold bg-gradient-to-b from-gray-900 to-gray-800 rounded-b-3xl shadow-lg pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full">
                    <img
                        className="absolute top-0 right-0 w-40 mr-20 mt-20"
                        src="book.svg"
                        alt="Book Icon"
                    />
                </div>

                <div className="relative z-10">
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
                    <button className="bg-blue-900 text-white px-6 py-3 cursor-pointer rounded-full font-bold hover:from-blue-700 hover: mt-auto mx-auto transition duration-300 shadow-md hover:shadow-lg">
                        Start
                    </button>
                </div>

                <div className="bg-blue-50 shadow-lg rounded-2xl p-8 w-80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100">
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-4 w-20 h-20 mb-4 mx-auto flex items-center justify-center">
                        <img src="https://img.icons8.com/color/480/000000/teacher.png" className="w-12 h-12" />
                    </div>
                    <h2 className="font-extrabold text-2xl bg-clip-text text-blue-900 mb-2 text-center">AI Doubt Solver</h2>
                    <p className="text-blue-900 mb-6 text-center font-medium">Solve your doubts easily with AI explanations crafted for you.</p>
                    <button className=" bg-blue-900 text-white cursor-pointer px-6 py-3 rounded-full font-bold hover: mt-auto mx-auto transition duration-300 shadow-md hover:shadow-lg">
                        Ask
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-12 mt-12 mb-20 relative">
                <img
                    src="https://img.icons8.com/color/480/000000/learning.png"
                    className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-32 h-32 opacity-5"
                />

                <div className="bg-blue-50 shadow-lg rounded-2xl p-8 w-80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-4 w-20 h-20 mb-4 mx-auto flex items-center justify-center">
                        <img src="https://img.icons8.com/color/480/000000/stopwatch.png" alt="Daily Timer" className="w-12 h-12" />
                    </div>
                    <h2 className="font-extrabold text-2xl bg-clip-text text-blue-900 mb-2 text-center">Daily Timer</h2>
                    <p className="text-blue-900 mb-6 text-center font-medium">Boost productivity with our Pomodoro timer. Stay focused and efficient.</p>
                    <button className=" bg-blue-900 cursor-pointer text-white px-6 py-3 rounded-full font-bold hover:from-blue-700 hover: mt-auto mx-auto transition duration-300 shadow-md hover:shadow-lg">
                        Start
                    </button>
                </div>

                <div className="bg-blue-50 shadow-lg rounded-2xl p-8 w-80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100">
                    <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-4 w-20 h-20 mb-4 mx-auto flex items-center justify-center">
                        <img src="https://img.icons8.com/color/480/000000/medal.png" alt="Daily Challenge" className="w-12 h-12" />
                    </div>
                    <h2 className="font-extrabold text-2xl bg-clip-text text-blue-900 mb-2 text-center">Daily Challenge</h2>
                    <p className="text-blue-900 mb-6 text-center font-medium">Challenge yourself daily — small steps lead to big achievements!</p>
                    <button className=" bg-blue-900 text-white cursor-pointer px-6 py-3 rounded-full font-bold hover:from-blue-700 hover: mt-auto mx-auto transition duration-300 shadow-md hover:shadow-lg">
                        Let's Do
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
