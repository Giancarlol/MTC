import React, { useState, useEffect } from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { Group } from '../types';
import QuestionCard from './QuestionCard';
import ResultTracker from './ResultTracker';
import GroupSelector from './GroupSelector';
import SavedProgressBanner from './SavedProgressBanner';
import QuizSummary from './QuizSummary';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface QuizAppProps {
  groups: Group[];
}

const QuizApp: React.FC<QuizAppProps> = ({ groups }) => {
  // State to track if we're showing the saved progress banner
  const [showSavedProgress, setShowSavedProgress] = useState(true);
  const {
    quizState,
    currentGroup,
    currentQuestion,
    selectedAnswerIndex,
    showFeedback,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    selectGroup,
    resetQuiz,
    clearSavedProgress,
    isGroupCompleted,
    getWrongAnswers,
  } = useQuiz(groups);
  
  // Check if there's saved progress to show
  useEffect(() => {
    // If there's saved progress and the banner should be shown
    if (quizState.lastUpdated && Object.keys(quizState.answeredQuestions).length > 0) {
      setShowSavedProgress(true);
    } else {
      setShowSavedProgress(false);
    }
  }, [quizState]);

  // Handle continuing from saved progress
  const handleContinue = () => {
    setShowSavedProgress(false);
  };

  // Handle clearing saved progress
  const handleClearProgress = () => {
    clearSavedProgress();
    setShowSavedProgress(false);
  };

  // Check if the current group is completed to show summary
  const showSummary = isGroupCompleted();
  
  // Handle resetting the current group
  const handleResetGroup = () => {
    resetQuiz();
  };
  
  // Handle selecting a new group
  const handleSelectNewGroup = () => {
    // Just open the group selector dropdown
    // The user will need to select a group manually
  };
  
  if (!currentGroup) {
    return <div className="text-center p-8">No questions available</div>;
  }
  
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Show saved progress banner if there's saved progress */}
        {showSavedProgress && (
          <SavedProgressBanner
            quizState={quizState}
            onContinue={handleContinue}
            onClearProgress={handleClearProgress}
            groups={groups}
          />
        )}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Quiz App</h1>
          
          <div className="flex items-center space-x-3">
            <GroupSelector 
              groups={groups} 
              currentGroupId={quizState.currentGroupId}
              onSelectGroup={selectGroup}
            />
            
            <button 
              onClick={resetQuiz}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              title="Reset Quiz"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </div>
        
        {showSummary ? (
          /* Show summary when the group is completed */
          <QuizSummary 
            wrongAnswers={getWrongAnswers()}
            totalQuestions={currentGroup.questions.length}
            correctAnswers={quizState.correctAnswers}
            onReset={handleResetGroup}
            onSelectNewGroup={handleSelectNewGroup}
          />
        ) : (
          /* Show quiz questions when not completed */
          <>
            <ResultTracker 
              correctAnswers={quizState.correctAnswers}
              incorrectAnswers={quizState.incorrectAnswers}
              currentQuestionIndex={quizState.currentQuestionIndex}
              totalQuestions={currentGroup.questions.length}
            />
            
            {currentQuestion && (
              <div className="my-6">
                <QuestionCard 
                  question={currentQuestion}
                  selectedAnswerIndex={selectedAnswerIndex}
                  showFeedback={showFeedback}
                  onSelectAnswer={selectAnswer}
                />
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <button
                onClick={previousQuestion}
                disabled={quizState.currentQuestionIndex <= 0}
                className={`flex items-center space-x-1 px-4 py-2 rounded-md ${
                  quizState.currentQuestionIndex <= 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-gray-800 shadow-md hover:bg-gray-100'
                }`}
              >
                <ChevronLeft size={18} />
                <span>Previous</span>
              </button>
              
              <button
                onClick={nextQuestion}
                disabled={quizState.currentQuestionIndex >= quizState.questionOrder.length - 1}
                className={`flex items-center space-x-1 px-4 py-2 rounded-md ${
                  quizState.currentQuestionIndex >= quizState.questionOrder.length - 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-gray-800 shadow-md hover:bg-gray-100'
                }`}
              >
                <span>Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;