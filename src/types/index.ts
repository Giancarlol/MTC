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

export interface QuizState {
  currentGroupId: number;
  currentQuestionIndex: number;
  correctAnswers: number;
  incorrectAnswers: number;
  answeredQuestions: Record<number, boolean>; // questionId -> wasCorrect
  lastUpdated: string; // ISO date string of when the state was last updated
}