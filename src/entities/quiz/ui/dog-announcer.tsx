import { m } from 'framer-motion';

import { useQuiz } from '../model/use-quiz';
import { getStatusByProgress } from '../lib/get-progress';
import { QuizDogs } from '../config/dogs';
import { QuizImgTransition, QuizMessageTransition } from '../model/transitions';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { MView } from '@/shared/ui/motion-view';

export const QuizDogAnnouncer = () => {
  const { currentQuestionNumber } = useQuiz();
  const { img, message } = QuizDogs[getStatusByProgress(currentQuestionNumber)];

  return (
    <View className='absolute -bottom-6 right-0 h-44 w-96 gap-0'>
      <MView
        {...QuizMessageTransition}
        key='message'
        className='absolute left-0 top-0 max-w-64 origin-bottom-right rounded-2xl rounded-br-none bg-gray-500/20 p-6'
        height='min'
      >
        <Text weight={6}>{message}</Text>
      </MView>

      <m.img
        key='img'
        {...QuizImgTransition}
        alt='Собака-помощник'
        className='absolute -bottom-10 -right-24 h-64 w-64'
        src={img}
      />
    </View>
  );
};
