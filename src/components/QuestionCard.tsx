import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswerIndex: number | null;
  showFeedback: boolean;
  onSelectAnswer: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswerIndex,
  showFeedback,
  onSelectAnswer,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      
      <div className="space-y-3">
        {question.alternatives.map((alternative, index) => {
          const isSelected = selectedAnswerIndex === index;
          const showCorrectFeedback = showFeedback && alternative.isCorrect;
          const showIncorrectFeedback = showFeedback && isSelected && !alternative.isCorrect;
          
          let backgroundColorClass = 'bg-white hover:bg-gray-100';
          
          if (showCorrectFeedback) {
            backgroundColorClass = 'bg-green-100 border-green-400';
          } else if (showIncorrectFeedback) {
            backgroundColorClass = 'bg-red-100 border-red-400';
          } else if (isSelected) {
            backgroundColorClass = 'bg-blue-100 border-blue-400';
          }
          
          return (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              disabled={showFeedback}
              className={`w-full text-left p-4 border rounded-md transition-colors duration-200 ${backgroundColorClass}`}
            >
              <div className="flex items-center">
                <span className="w-6 h-6 flex items-center justify-center rounded-full border mr-3 text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{alternative.text}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;