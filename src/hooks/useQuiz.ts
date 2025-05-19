import { useState, useCallback } from 'react';
import { QuizState, Group, Question } from '../types';

const initialQuizState: QuizState = {
  currentGroupId: 1,
  currentQuestionIndex: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  answeredQuestions: {},
};

export function useQuiz(groups: Group[]) {
  const [quizState, setQuizState] = useState<QuizState>(initialQuizState);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentGroup = groups.find(group => group.id === quizState.currentGroupId) || groups[0];
  const currentQuestion = currentGroup?.questions[quizState.currentQuestionIndex];
  
  const selectAnswer = useCallback((answerIndex: number) => {
    if (showFeedback) return; // Prevent multiple selections while showing feedback
    
    setSelectedAnswerIndex(answerIndex);
    setShowFeedback(true);
    
    const isCorrect = currentQuestion.alternatives[answerIndex].isCorrect;
    
    // Update state with answer result
    setQuizState(prev => ({
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
    
    setQuizState(prev => {
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
    
    setQuizState(prev => {
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
  };
}