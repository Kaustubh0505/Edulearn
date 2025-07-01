"use client"
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

const Quiz = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [difficulty, setDifficulty] = useState('');
  const [amount, setAmount] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const decodeHtml = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(res => res.json())
      .then(data => setCategories(data.trivia_categories))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const filtered = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startQuiz = () => {
    if (!selectedCategory || !difficulty || !amount) return;
    fetch(`https://opentdb.com/api.php?amount=${amount}&category=${selectedCategory.id}&difficulty=${difficulty}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results);
        setQuizStarted(true);
        setSelectedAnswers({});
        setScore(0);
      })
      .catch(err => console.error('Error fetching questions:', err));
  };

  const handleAnswer = (qIndex, answer) => {
    if (selectedAnswers[qIndex] !== undefined) return;
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: answer }));
    if (answer === questions[qIndex].correct_answer) {
      setScore(prev => prev + 1);
    }
  };

  return (
    <div className='w-full bg-gray-50 overflow-x-hidden'>
      <Navbar />

      <div className="p-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Interactive Quiz</h1>
        <p className='mt-4 text-xl text-gray-500'>Test your knowledge across various subjects</p>
      </div>

      {!quizStarted ? (
        <div className='bg-white border rounded-xl shadow-xl mt-10 mb-20 mx-auto w-3/4 p-6'>
          {!selectedCategory ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <p className='text-xl font-bold'>Choose Quiz Category</p>
                <div className='flex items-center'>
                  <label htmlFor="categorySearch" className='mr-2 text-sm'>Search Category</label>
                  <input
                    id="categorySearch"
                    className='w-64 p-2 border rounded-xl focus:ring-2 focus:ring-indigo-500'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {filtered.map(cat => (
                  <div
                    key={cat.id}
                    className='p-4 bg-indigo-50 rounded-lg cursor-pointer hover:bg-indigo-100'
                    onClick={() => setSelectedCategory(cat)}
                  >{cat.name}</div>
                ))}
              </div>
            </>
          ) : (
            <div className='space-y-4'>
              <p className='text-lg font-semibold'>Category: {selectedCategory.name}</p>
              <div>
                <label htmlFor="difficulty">Difficulty:</label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={e => setDifficulty(e.target.value)}
                  className='w-full p-2 border rounded-lg'
                >
                  <option value="">Select difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div>
                <label htmlFor="amount">Number of Questions:</label>
                <input
                  id="amount"
                  type="number"
                  min={1}
                  max={20}
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  className='w-full p-2 border rounded-lg'
                />
              </div>
              <div className='flex space-x-4'>
                <button onClick={startQuiz} className='bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700'>Start Quiz</button>
                <button onClick={() => setSelectedCategory(null)} className='bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400'>Back</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='mx-auto w-3/4 mb-20 space-y-6'>
          {questions.map((q, idx) => {
            const answers = [...q.incorrect_answers, q.correct_answer].sort();
            const userAnswer = selectedAnswers[idx];
            return (
              <div key={idx} className='p-4 bg-white border rounded-lg shadow'>
                <p className='font-medium mb-2'>{idx + 1}. {decodeHtml(q.question)}</p>
                <ul className='space-y-2'>
                  {answers.map((ans, i) => {
                    const isSelected = userAnswer === ans;
                    const isCorrect = ans === q.correct_answer;
                    let classes = 'cursor-pointer p-2 border rounded-lg';
                    if (userAnswer) {
                      classes += isSelected
                        ? (isCorrect ? ' border-green-500 bg-green-50' : ' border-red-500 bg-red-50')
                        : (isCorrect ? ' border-green-500' : '');
                    } else {
                      classes += ' hover:bg-indigo-50';
                    }
                    return (
                      <li key={i} className={classes} onClick={() => handleAnswer(idx, ans)}>
                        {decodeHtml(ans)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className='text-center'>
            <p className='text-xl font-semibold'>Your Score: {score} / {questions.length}</p>
            <button
              onClick={() => {
                setQuizStarted(false);
                setSelectedCategory(null);
                setDifficulty('');
                setAmount(10);
              }}
              className='mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700'
            >Restart Quiz</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Quiz;
