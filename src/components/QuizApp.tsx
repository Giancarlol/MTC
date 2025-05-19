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
  // Add error state to track any issues
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Validate groups before using them
  useEffect(() => {
    try {
      if (!Array.isArray(groups)) {
        throw new Error('Invalid groups data: not an array');
      }
      
      if (groups.length === 0) {
        throw new Error('No quiz groups available');
      }
      
      // Validate the structure of at least the first group
      const firstGroup = groups[0];
      if (!firstGroup || typeof firstGroup.id !== 'number' || !Array.isArray(firstGroup.questions)) {
        throw new Error('Invalid group structure');
      }
      
      setIsLoading(false);
    } catch (err) {
      console.error('Error in QuizApp:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setIsLoading(false);
    }
  }, [groups]);
  
  // State to track if we're showing the saved progress banner
  const [showSavedProgress, setShowSavedProgress] = useState(true);
  
  // Wrap the useQuiz hook in a try-catch to prevent crashes
  let quizHookResult;
  try {
    quizHookResult = useQuiz(groups);
  } catch (err) {
    console.error('Error in useQuiz hook:', err);
    setError(err instanceof Error ? err.message : 'An error occurred in the quiz logic');
    // Provide fallback values
    quizHookResult = {
      quizState: { currentGroupId: 1, currentQuestionIndex: 0, correctAnswers: 0, incorrectAnswers: 0, answeredQuestions: {}, wrongAnswers: {}, questionOrder: [], isCompleted: false, lastUpdated: '' },
      currentGroup: null,
      currentQuestion: null,
      selectedAnswerIndex: null,
      showFeedback: false,
      selectAnswer: () => {},
      nextQuestion: () => {},
      previousQuestion: () => {},
      selectGroup: () => {},
      resetQuiz: () => {},
      clearSavedProgress: () => {},
      isGroupCompleted: () => false,
      getWrongAnswers: () => [],
    };
  }
  
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
  } = quizHookResult;
  
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
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl font-semibold">Loading quiz data...</div>
      </div>
    );
  }
  
  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="mb-4">{error}</p>
          <button 
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Clear Data & Refresh
          </button>
        </div>
      </div>
    );
  }
  
  // Show message if no groups or current group is missing
  if (!currentGroup || !Array.isArray(groups) || groups.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">No Questions Available</h2>
          <p className="mb-4">Unable to load quiz questions. Please try refreshing the page.</p>
          <button 
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Clear Data & Refresh
          </button>
        </div>
      </div>
    );
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