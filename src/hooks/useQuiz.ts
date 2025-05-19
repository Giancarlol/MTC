import { useState, useCallback, useEffect } from 'react';
import { QuizState, Group } from '../types';

const STORAGE_KEY = 'mtc_quiz_state';

const initialQuizState: QuizState = {
  currentGroupId: 1,
  currentQuestionIndex: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  answeredQuestions: {},
  wrongAnswers: {},  // Track wrong answers for summary
  questionOrder: [],  // Track randomized question order
  isCompleted: false, // Track if the current group is completed
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

// Fisher-Yates shuffle algorithm to randomize questions
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useQuiz(groups: Group[]) {
  const [quizState, setQuizState] = useState<QuizState>(() => {
    const savedState = loadSavedState();
    return savedState || initialQuizState;
  });
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentGroup = groups.find(group => group.id === quizState.currentGroupId) || groups[0];
  
  // Initialize question order if it's empty or invalid
  useEffect(() => {
    if ((!quizState.questionOrder || quizState.questionOrder.length === 0) && currentGroup && currentGroup.questions) {
      const randomizedOrder = shuffleArray(
        currentGroup.questions.map((_q, idx) => idx)
      );
      setQuizState((prev: QuizState) => ({
        ...prev,
        questionOrder: randomizedOrder,
        // Reset current question index to ensure it's valid
        currentQuestionIndex: 0
      }));
    }
  }, [currentGroup, quizState.questionOrder]);
  
  // Get current question using the randomized order - with additional safety checks
  const currentQuestion = currentGroup && 
    quizState.questionOrder && 
    quizState.questionOrder.length > 0 && 
    currentGroup.questions && 
    quizState.currentQuestionIndex < quizState.questionOrder.length && 
    quizState.questionOrder[quizState.currentQuestionIndex] < currentGroup.questions.length
      ? currentGroup.questions[quizState.questionOrder[quizState.currentQuestionIndex]]
      : undefined;
  
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

  // Add a state to track if we should move to the next question
  const [shouldMoveNext, setShouldMoveNext] = useState(false);
  
  // Define nextQuestion function before using it in the effect
  const nextQuestion = useCallback(() => {
    if (!currentQuestion) return; // Guard against undefined currentQuestion
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    
    setQuizState((prev: QuizState) => {
      // If we're at the last question, mark as completed
      if (prev.currentQuestionIndex >= prev.questionOrder.length - 1) {
        return {
          ...prev,
          isCompleted: true
        };
      }
      
      return {
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      };
    });
  }, [currentQuestion, setQuizState, setShowFeedback, setSelectedAnswerIndex]);
  
  // Effect to handle automatic progression
  useEffect(() => {
    let timer: number;
    
    if (showFeedback && shouldMoveNext) {
      timer = window.setTimeout(() => {
        nextQuestion();
        setShouldMoveNext(false);
      }, 1500);
    }
    
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [showFeedback, shouldMoveNext, nextQuestion]);
  
  const selectAnswer = useCallback((answerIndex: number) => {
    if (!currentQuestion) return; // Guard against undefined currentQuestion
    if (showFeedback) return; // Prevent multiple selections while showing feedback
    
    setSelectedAnswerIndex(answerIndex);
    setShowFeedback(true);
    
    const isCorrect = currentQuestion.alternatives[answerIndex].isCorrect;
    
    // Update state with answer result
    setQuizState((prev: QuizState) => {
      const updatedState = {
        ...prev,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
        incorrectAnswers: !isCorrect ? prev.incorrectAnswers + 1 : prev.incorrectAnswers,
        answeredQuestions: {
          ...prev.answeredQuestions,
          [currentQuestion.id]: isCorrect,
        },
      };
      
      // If answer is wrong, store the question and the correct answer for summary
      if (!isCorrect) {
        const correctAlternative = currentQuestion.alternatives.find(alt => alt.isCorrect);
        updatedState.wrongAnswers = {
          ...prev.wrongAnswers,
          [currentQuestion.id]: {
            question: currentQuestion.text,
            userAnswer: currentQuestion.alternatives[answerIndex].text,
            correctAnswer: correctAlternative ? correctAlternative.text : '',
          }
        };
      }
      
      return updatedState;
    });
    
    // Set flag to move to next question after showing feedback
    setShouldMoveNext(true);
  }, [currentQuestion, showFeedback]);
  
  // This is a duplicate function declaration and has been removed
  
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
  
  // Check if all questions in the current group have been answered
  const isGroupCompleted = useCallback(() => {
    if (!currentGroup) return false;
    return quizState.isCompleted || 
           quizState.currentQuestionIndex >= quizState.questionOrder.length - 1;
  }, [currentGroup, quizState.currentQuestionIndex, quizState.questionOrder.length, quizState.isCompleted]);

  // Get wrong answers for summary
  const getWrongAnswers = useCallback(() => {
    return Object.values(quizState.wrongAnswers);
  }, [quizState.wrongAnswers]);

  const selectGroup = useCallback((groupId: number) => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    
    // Find the group to make sure it exists
    const groupExists = groups.some(group => group.id === groupId);
    
    setQuizState({
      ...initialQuizState,
      currentGroupId: groupExists ? groupId : (groups[0]?.id || 1),
      questionOrder: [], // Reset question order to trigger randomization
    });
  }, [groups]);
  
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
    isGroupCompleted,
    getWrongAnswers,
  };
}