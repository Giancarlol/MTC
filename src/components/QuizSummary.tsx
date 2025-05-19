import React from 'react';
import { WrongAnswer } from '../types';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface QuizSummaryProps {
  wrongAnswers: WrongAnswer[];
  totalQuestions: number;
  correctAnswers: number;
  onReset: () => void;
  onSelectNewGroup: () => void;
}

const QuizSummary: React.FC<QuizSummaryProps> = ({
  wrongAnswers,
  totalQuestions,
  correctAnswers,
  onReset,
  onSelectNewGroup
}) => {
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const incorrectAnswers = totalQuestions - correctAnswers;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Quiz Summary</h2>
      
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gray-100 border-4 border-blue-500">
          <span className="text-3xl font-bold">{score}%</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="flex justify-center mb-2">
            <CheckCircle className="text-green-500" size={24} />
          </div>
          <div className="text-xl font-semibold text-green-700">{correctAnswers}</div>
          <div className="text-sm text-green-600">Correct</div>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <div className="flex justify-center mb-2">
            <XCircle className="text-red-500" size={24} />
          </div>
          <div className="text-xl font-semibold text-red-700">{incorrectAnswers}</div>
          <div className="text-sm text-red-600">Incorrect</div>
        </div>
      </div>
      
      {wrongAnswers.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Review Incorrect Answers</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {wrongAnswers.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-2">{item.question}</p>
                <div className="flex items-start mb-1">
                  <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <p className="text-red-700">Your answer: {item.userAnswer}</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <p className="text-green-700">Correct answer: {item.correctAnswer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={onReset}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
        >
          <RefreshCw size={18} className="mr-2" />
          Retry This Group
        </button>
        <button 
          onClick={onSelectNewGroup}
          className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
        >
          Choose Another Group
        </button>
      </div>
    </div>
  );
};

export default QuizSummary;
