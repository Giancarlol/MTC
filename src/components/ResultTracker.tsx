import React from 'react';

interface ResultTrackerProps {
  correctAnswers: number;
  incorrectAnswers: number;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const ResultTracker: React.FC<ResultTrackerProps> = ({
  correctAnswers,
  incorrectAnswers,
  currentQuestionIndex,
  totalQuestions,
}) => {
  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-2xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">Progress</h3>
        <span className="text-sm text-gray-600">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm font-medium">{correctAnswers} correct</span>
        </div>
        
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
          <span className="text-sm font-medium">{incorrectAnswers} incorrect</span>
        </div>
        
        <div className="text-sm font-medium">
          Ongoing result: {correctAnswers} right {incorrectAnswers} wrong
        </div>
      </div>
    </div>
  );
};

export default ResultTracker;