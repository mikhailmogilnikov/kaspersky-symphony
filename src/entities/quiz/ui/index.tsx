import NumberFlow from '@number-flow/react';

import { useQuiz } from '../model/use-quiz';

import { QuizProgressBar } from './progressbar';
import { QuizForm } from './form';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';

export const Quiz = () => {
  const { currentQuestionNumber } = useQuiz();

  const wrapperClassnames = cn(
    'pointer-events-auto transition-colors h-min max-w-5xl overflow-hidden rounded-[20px] p-4 lg:h-[675px] lg:overflow-visible lg:p-8 relative',
    {
      'bg-primary-100/60': currentQuestionNumber === 1 || currentQuestionNumber === 5,
      'bg-secondary-100/80':
        currentQuestionNumber === 2 || currentQuestionNumber === 4 || currentQuestionNumber === 6,
      'bg-tretiary-100/80': currentQuestionNumber === 3 || currentQuestionNumber === 7,
    },
  );

  return (
    <View vertical className={wrapperClassnames} gap='xl' items='center'>
      <Text className='text-2xl lg:text-4xl' heading={3}>
        Вопрос <NumberFlow className='w-3 lg:w-5' value={currentQuestionNumber} />
        /7
      </Text>

      <QuizProgressBar />

      <QuizForm />
    </View>
  );
};
