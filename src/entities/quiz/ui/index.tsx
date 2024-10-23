import { useQuiz } from '../model/use-quiz';

import { QuizProgressBar } from './progressbar';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const Quiz = () => {
  const { currentQuestionNumber, incCorrectAnswers, nextQuestion } = useQuiz();

  return (
    <View
      vertical
      className='pointer-events-auto h-min max-w-5xl overflow-hidden rounded-[20px] bg-primary-100/60 p-4 lg:h-[675px] lg:overflow-visible lg:p-8'
      gap='xl'
      items='center'
    >
      <Text className='text-2xl lg:text-4xl' heading={3}>
        Вопрос {currentQuestionNumber}/7
      </Text>

      <QuizProgressBar />

      <button onClick={() => incCorrectAnswers()}>inc</button>
    </View>
  );
};
