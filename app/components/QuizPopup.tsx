"use client";

import { useState, useEffect } from 'react';
import { X, ArrowRight, Brain } from 'lucide-react';

const QuizPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleStartQuiz = () => {
    window.location.href = '/quiz';
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-purple-200/20 dark:border-purple-700/20 p-8 sm:p-12">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">AI Potential</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Take our 2-minute AI assessment and get personalized automation recommendations for your business.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>2-Minute Assessment</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Personalized Report</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span>Free AI Quick Wins</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <button
              onClick={handleStartQuiz}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Start Free Quiz</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPopup; 