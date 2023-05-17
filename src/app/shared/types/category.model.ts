export interface Category {
  id: number;
  name: string;
  imagePath: string;
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

export interface CategoryState {
  loading: boolean;
  category: Category | null;
}

export interface QuestionState {
  loading: boolean;
  question: Question | null;
}
