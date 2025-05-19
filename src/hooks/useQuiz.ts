import { useState, useCallback, useEffect } from 'react';
import { QuizState, Group, SubCategory } from '../types';

const STORAGE_KEY = 'mtc_quiz_state';

const initialQuizState: QuizState = {
  currentGroupId: 1,
  currentSubCategoryId: 0, // 0 means no sub-category selected
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
  // Ensure groups is always an array
  const safeGroups = Array.isArray(groups) ? groups : [];
  
  const [quizState, setQuizState] = useState<QuizState>(() => {
    const savedState = loadSavedState();
    // If we have a saved state, validate that the group still exists
    if (savedState && savedState.currentGroupId) {
      const groupExists = safeGroups.some(group => group.id === savedState.currentGroupId);
      if (!groupExists && safeGroups.length > 0) {
        // If the saved group doesn't exist, reset to the first available group
        return {
          ...initialQuizState,
          currentGroupId: safeGroups[0].id,
          currentSubCategoryId: 0
        };
      }
    }
    return savedState || initialQuizState;
  });
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Safely find the current group or default to the first group if available
  const currentGroup = safeGroups.length > 0 ?
    (safeGroups.find(group => group.id === quizState.currentGroupId) || safeGroups[0]) :
    undefined;
    
  // Determine if the current group has sub-categories
  const hasSubCategories = currentGroup && 
    Array.isArray(currentGroup.subCategories) && 
    currentGroup.subCategories.length > 0;
    
  // Get the current sub-category if available
  const currentSubCategory: SubCategory | undefined = hasSubCategories && currentGroup && currentGroup.subCategories ? 
    (quizState.currentSubCategoryId > 0 ? 
      currentGroup.subCategories.find(subCat => subCat.id === quizState.currentSubCategoryId) : 
      currentGroup.subCategories[0]) : 
    undefined;
    
  // Get the questions from either the sub-category or the main group
  const currentQuestions = currentSubCategory ? 
    currentSubCategory.questions : 
    (currentGroup && currentGroup.questions ? currentGroup.questions : []);
  
  // Initialize question order if it's empty or invalid or if sub-category changes
  useEffect(() => {
    if ((!quizState.questionOrder || quizState.questionOrder.length === 0) && currentQuestions && currentQuestions.length > 0) {
      const randomizedOrder = shuffleArray(
        currentQuestions.map((_q, idx) => idx)
      );
      setQuizState((prev: QuizState) => ({
        ...prev,
        questionOrder: randomizedOrder,
        // Reset current question index to ensure it's valid
        currentQuestionIndex: 0,
        // Reset counters when changing sub-categories
        correctAnswers: 0,
        incorrectAnswers: 0,
        answeredQuestions: {},
        wrongAnswers: {},
        isCompleted: false
      }));
    }
  }, [currentQuestions, quizState.currentSubCategoryId]);
  
  // Get current question using the randomized order - with additional safety checks
  const currentQuestion = 
    quizState.questionOrder && 
    quizState.questionOrder.length > 0 && 
    currentQuestions && 
    quizState.currentQuestionIndex < quizState.questionOrder.length && 
    quizState.questionOrder[quizState.currentQuestionIndex] < currentQuestions.length
      ? currentQuestions[quizState.questionOrder[quizState.currentQuestionIndex]]
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
    // Enhanced guards against undefined values
    if (!currentQuestion) return; // Guard against undefined currentQuestion
    if (!quizState.questionOrder) return; // Guard against undefined questionOrder
    
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    
    setQuizState((prev: QuizState) => {
      // Ensure prev is valid
      if (!prev) return initialQuizState;
      
      // Ensure questionOrder exists
      if (!prev.questionOrder || !Array.isArray(prev.questionOrder)) {
        return {
          ...prev,
          questionOrder: [],
          currentQuestionIndex: 0,
          isCompleted: false
        };
      }
      
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
  }, [currentQuestion, quizState.questionOrder, setQuizState, setShowFeedback, setSelectedAnswerIndex]);
  
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
    // Enhanced guards against undefined values
    if (!currentQuestion) return; // Guard against undefined currentQuestion
    if (showFeedback) return; // Prevent multiple selections while showing feedback
    if (!Array.isArray(currentQuestion.alternatives)) return; // Guard against missing alternatives
    if (answerIndex < 0 || answerIndex >= currentQuestion.alternatives.length) return; // Guard against invalid index
    
    setSelectedAnswerIndex(answerIndex);
    setShowFeedback(true);
    
    // Safely access the alternative
    const alternative = currentQuestion.alternatives[answerIndex];
    const isCorrect = alternative ? alternative.isCorrect : false;
    
    // Update state with answer result
    setQuizState((prev: QuizState) => {
      // Ensure prev is valid
      if (!prev) return initialQuizState;
      
      const updatedState = {
        ...prev,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
        incorrectAnswers: !isCorrect ? prev.incorrectAnswers + 1 : prev.incorrectAnswers,
        answeredQuestions: {
          ...(prev.answeredQuestions || {}),
          [currentQuestion.id]: isCorrect,
        },
        // Ensure wrongAnswers is initialized
        wrongAnswers: prev.wrongAnswers || {}
      };
      
      // If answer is wrong, store the question and the correct answer for summary
      if (!isCorrect && currentQuestion.alternatives) {
        const correctAlternative = currentQuestion.alternatives.find(alt => alt && alt.isCorrect);
        updatedState.wrongAnswers = {
          ...(prev.wrongAnswers || {}),
          [currentQuestion.id]: {
            question: currentQuestion.text || 'Unknown question',
            userAnswer: alternative ? alternative.text || 'Unknown answer' : 'Unknown answer',
            correctAnswer: correctAlternative ? correctAlternative.text || 'Unknown correct answer' : 'Unknown correct answer',
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
    if (!quizState.questionOrder || !Array.isArray(quizState.questionOrder)) return false;
    
    return quizState.isCompleted || 
           (quizState.currentQuestionIndex >= quizState.questionOrder.length - 1 && 
            quizState.questionOrder.length > 0);
  }, [currentGroup, quizState.currentQuestionIndex, quizState.questionOrder, quizState.isCompleted]);

  // Get wrong answers for summary with safety checks
  const getWrongAnswers = useCallback(() => {
    if (!quizState.wrongAnswers || typeof quizState.wrongAnswers !== 'object') {
      return [];
    }
    return Object.values(quizState.wrongAnswers);
  }, [quizState.wrongAnswers]);

  const selectGroup = useCallback((groupId: number) => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    
    // Find the group to make sure it exists
    const groupExists = safeGroups.some(group => group.id === groupId);
    const defaultGroupId = safeGroups.length > 0 ? safeGroups[0].id : 1;
    
    // Create a fresh state with validated groupId
    setQuizState({
      ...initialQuizState,
      currentGroupId: groupExists ? groupId : defaultGroupId,
      currentSubCategoryId: 0, // Reset sub-category selection
      questionOrder: [], // Reset question order to trigger randomization
      wrongAnswers: {}, // Reset wrong answers
      answeredQuestions: {}, // Reset answered questions
      correctAnswers: 0, // Reset correct answers count
      incorrectAnswers: 0, // Reset incorrect answers count
      currentQuestionIndex: 0, // Ensure we start at the first question
      isCompleted: false, // Reset completion status
      lastUpdated: new Date().toISOString() // Update timestamp
    });
  }, [safeGroups]);
  
  // Add a function to select a sub-category
  const selectSubCategory = useCallback((subCategoryId: number) => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    
    // Validate the sub-category exists in the current group
    let validSubCategoryId = subCategoryId;
    if (currentGroup && currentGroup.subCategories) {
      const subCategoryExists = currentGroup.subCategories.some(subCat => subCat.id === subCategoryId);
      if (!subCategoryExists && currentGroup.subCategories.length > 0) {
        validSubCategoryId = currentGroup.subCategories[0].id;
      }
    } else {
      validSubCategoryId = 0; // No sub-categories available
    }
    
    setQuizState(prev => ({
      ...prev,
      currentSubCategoryId: validSubCategoryId,
      questionOrder: [], // Reset question order to trigger randomization
      wrongAnswers: {}, // Reset wrong answers
      answeredQuestions: {}, // Reset answered questions
      correctAnswers: 0, // Reset correct answers count
      incorrectAnswers: 0, // Reset incorrect answers count
      currentQuestionIndex: 0, // Ensure we start at the first question
      isCompleted: false, // Reset completion status
      lastUpdated: new Date().toISOString() // Update timestamp
    }));
  }, [currentGroup]);
  
  // Clear saved state and reset quiz
  const resetQuiz = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswerIndex(null);
    
    // Get the default group ID if available
    const defaultGroupId = safeGroups.length > 0 ? safeGroups[0].id : initialQuizState.currentGroupId;
    
    // Reset with a fresh state but keep the current group if it exists
    setQuizState({
      ...initialQuizState,
      currentGroupId: defaultGroupId,
      questionOrder: [], // Reset question order to trigger randomization
      lastUpdated: new Date().toISOString() // Update timestamp
    });
  }, [safeGroups]);
  
  return {
    quizState,
    currentGroup,
    currentSubCategory,
    hasSubCategories,
    currentQuestion,
    selectedAnswerIndex,
    showFeedback,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    selectGroup,
    selectSubCategory,
    resetQuiz,
    clearSavedProgress,
    isGroupCompleted,
    getWrongAnswers,
  };
}