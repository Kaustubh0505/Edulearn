import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const Quiz = () => {
  return (
    <div className='w-full bg-gray-50 overflow-x-hidden'>
      <Navbar />

      <div className="p-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Interactive Quiz</h1>
        <p className='mt-4 text-xl text-gray-500'>
          Test your knowledge across various subjects
        </p>
      </div>

      <div className='bg-white border border-gray-200 rounded-xl shadow-xl mt-10 mb-20 mx-auto w-3/4  p-6'>
        <div className="flex justify-between items-center mb-4">
          <p className='text-xl font-bold'>Choose Quiz Category</p>

          <div className='flex items-center'>
            <label htmlFor="categorySearch" className='mr-2 text-sm text-gray-700'>
              Search Category
            </label>
            <input
              id="categorySearch"
              className='w-64 p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Search for a category...'
            />
          </div>
        </div>

        <div className='flex justify-center mt-6'>
          <button className='w-full sm:w-auto bg-indigo-600 text-white font-medium rounded-lg py-2 px-6 hover:bg-indigo-700 transition duration-200'>
            Start Quiz
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quiz;
