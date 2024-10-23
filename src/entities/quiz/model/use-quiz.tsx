import { create } from 'zustand';

interface QuizStore {
  currentQuestionNumber: number;
  correctAnswersCount: number;
  nextQuestion: VoidFunction;
  incCorrectAnswers: VoidFunction;
}

export const useQuiz = create<QuizStore>()((set) => ({
  currentQuestionNumber: 1,
  correctAnswersCount: 0,
  nextQuestion: () => set((state) => ({ currentQuestionNumber: state.currentQuestionNumber + 1 })),
  incCorrectAnswers: () => set((state) => ({ correctAnswersCount: state.correctAnswersCount + 1 })),
}));
