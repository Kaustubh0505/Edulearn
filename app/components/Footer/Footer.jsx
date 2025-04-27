import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white w-full p-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
                <div className="ml-4">
                    <h1 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 hover:scale-105 transition-transform duration-300 cursor-pointer">
                        Edulearn
                    </h1>
                    <p className="max-w-xs text-gray-300 leading-relaxed">
                        An educational platform designed to help students learn through quizzes, time management, and interactive science experiments.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold mb-4 text-blue-400">Quick Links</h1>
                    <p className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300 flex items-center gap-2 group">
                        <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                        Home
                    </p>
                    <p className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300 flex items-center gap-2 group">
                        <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                        Quiz
                    </p>
                    <p className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300 flex items-center gap-2 group">
                        <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                        Doubt Solver
                    </p>
                    <p className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300 flex items-center gap-2 group">
                        <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                        Daily Timer
                    </p>
                    <p className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300 flex items-center gap-2 group">
                        <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                        Daily Challenge
                    </p>
                </div>


                <div className="mr-4">
                    <h1 className="text-2xl font-bold mb-4 text-blue-400">Contact</h1>
                    <p className="text-gray-300 flex items-center cursor-pointer gap-2 hover:text-blue-400 transition-colors duration-300">
                        <span className="text-blue-400">✉</span>
                        edulearn@example.com
                    </p>
                </div>
            </div>

            <div className="text-center text-gray-400 text-sm mt-10 pt-6 border-t border-gray-700">
                © {new Date().getFullYear()} Edulearn. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;