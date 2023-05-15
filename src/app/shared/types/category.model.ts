export interface Category {
  id: number;
  name: string;
  questions: Question[];
}

export interface Question {
  id: number;
  questionText: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  isCorrect?: boolean;
}

export interface QuestionsState {
  loading: boolean;
  questions: Question | null;
}
