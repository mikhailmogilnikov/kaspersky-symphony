import { useEffect, useRef } from 'react';

import { useProgressStep } from '../model/use-progress-step';
import { useQuiz } from '../model/use-quiz';
import { scrollRight } from '../lib/slide';

import { MView } from '@/shared/ui/motion-view';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const QuizProgressBar = () => {
  const { correctAnswersCount } = useQuiz();
  const { progressStep } = useProgressStep();

  const containerRef = useRef<HTMLElement | null>(null);
  const barRef = useRef<any | null>(null);

  useEffect(() => {
    scrollRight(containerRef, barRef);
  }, [progressStep]);

  return (
    <View ref={containerRef} className='w-[calc(100%+2rem)] overflow-x-scroll px-4 scrollbar-hide'>
      <View
        className='relative box-content h-12 min-w-[700px] rounded-xl border border-foreground'
        items='center'
        justify='around'
      >
        <MView
          ref={barRef}
          layout
          animate={{ width: progressStep }}
          className='gradient-base absolute left-1 top-1 z-0 h-10 max-w-[calc(100%-0.5rem)] rounded-lg'
          initial={{ width: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          width='fit'
        />
        <Text className='z-10 transition-colors' color='bg' weight={5}>
          Symphony Security
        </Text>
        <Text
          className='z-10 transition-colors'
          color={correctAnswersCount > 1 ? 'bg' : 'fg'}
          weight={5}
        >
          Symphony MDR
        </Text>
        <Text
          className='z-10 transition-colors'
          color={correctAnswersCount > 3 ? 'bg' : 'fg'}
          weight={5}
        >
          Symphony EDR
        </Text>
        <Text
          className='z-10 transition-colors'
          color={correctAnswersCount > 5 ? 'bg' : 'fg'}
          weight={5}
        >
          Symphony XDR
        </Text>
      </View>
    </View>
  );
};
