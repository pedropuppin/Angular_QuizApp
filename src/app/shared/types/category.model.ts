export interface Category {
  id: number;
  name: string;
  questions: Questions[];
}

export interface Questions {
  id: number;
  question: string;
  answers: Answers[];
}

export interface Answers {
  answer: string;
  isCorrect?: boolean;
}

export interface QuestionsState {
  loading: boolean;
  questions: Questions | null;
}
