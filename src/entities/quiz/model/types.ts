export type QuestionVariant = {
  variant: number;
  title: string;
  description?: string;
};

export interface QuizQuestion {
  id: number;
  question: string;
  correctVariant: number;
  variants: QuestionVariant[];
}
