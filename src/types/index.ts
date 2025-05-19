export interface Alternative {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  alternatives: Alternative[];
}

export interface Group {
  id: number;
  name: string;
  questions: Question[];
}

export interface WrongAnswer {
  question: string;
  userAnswer: string;
  correctAnswer: string;
}

export interface QuizState {
  currentGroupId: number;
  currentQuestionIndex: number;
  correctAnswers: number;
  incorrectAnswers: number;
  answeredQuestions: Record<number, boolean>; // questionId -> wasCorrect
  wrongAnswers: Record<number, WrongAnswer>; // questionId -> wrong answer details
  questionOrder: number[]; // Randomized order of question indices
  isCompleted: boolean; // Whether the current group is completed
  lastUpdated: string; // ISO date string of when the state was last updated
}