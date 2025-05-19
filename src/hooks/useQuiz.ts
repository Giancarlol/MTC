import { useState, useCallback, useEffect } from 'react';
import { QuizState, Group } from '../types';

const STORAGE_KEY = 'mtc_quiz_state';

const initialQuizState: QuizState = {
  currentGroupId: 1,
  currentQuestionIndex: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  answeredQuestions: {},
  lastUpdated: new Date().toISOString(),
};

// Load saved state from localStorage
const loadSavedState = (): QuizState | null => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error('Error loading saved quiz state:', error);
  }
  return null;
};

// Save state to localStorage
const saveState = (state: QuizState) => {
  try {
    const stateWithTimestamp = {
      ...state,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateWithTimestamp));
  } catch (error) {
    console.error('Error saving quiz state:', error);
  }
};

export function useQuiz(groups: Group[]) {
  const [quizState, setQuizState] = useState<QuizState>(() => {
    const savedState = loadSavedState();
    return savedState || initialQuizState;
  });
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentGroup = groups.find(group => group.id === quizState.currentGroupId) || groups[0];
  const currentQuestion = currentGroup?.questions[quizState.currentQuestionIndex];
  
  // Save state whenever it changes
  useEffect(() => {
    saveState(quizState);
  }, [quizState]);

  // Function to clear all saved progress
  const clearSavedProgress = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setQuizState(initialQuizState);
      setSelectedAnswerIndex(null);
      setShowFeedback(false);
    } catch (error) {
      console.error('Error clearing saved progress:', error);
    }
  }, []);

  const selectAnswer = useCallback((answerIndex: number) => {
    if (showFeedback) return; // Prevent multiple selections while showing feedback
    
    setSelectedAnswerIndex(answerIndex);
    setShowFeedback(true);
    
    const isCorrect = currentQuestion.alternatives[answerIndex].isCorrect;
    
    // Update state with answer result
    setQuizState((prev: QuizState) => ({
      ...prev,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      incorrectAnswers: !isCorrect ? prev.incorrectAnswers + 1 : prev.incorrectAnswers,
      answeredQuestions: {
        ...prev.answeredQuestions,
        [currentQuestion.id]: isCorrect,
      },
    }));
    
    // Move to next question after delay
    setTimeout(() => {
      nextQuestion();
    }, 1500);
  }, [currentQuestion, showFeedback]);
  
  const nextQuestion = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    
    setQuizState((prev: QuizState) => {
      // If we're at the last question, keep the index as is
      if (prev.currentQuestionIndex >= currentGroup.questions.length - 1) {
        return prev;
      }
      
      return {
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      };
    });
  }, [currentGroup]);
  
  const previousQuestion = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    
    setQuizState((prev: QuizState) => {
      // If we're at the first question, keep the index as is
      if (prev.currentQuestionIndex <= 0) {
        return prev;
      }
      
      return {
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      };
    });
  }, []);
  
  const selectGroup = useCallback((groupId: number) => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    
    setQuizState({
      ...initialQuizState,
      currentGroupId: groupId,
    });
  }, []);
  
  // Clear saved state and reset quiz
  const resetQuiz = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    setQuizState(initialQuizState);
  }, []);
  
  return {
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
  };
}