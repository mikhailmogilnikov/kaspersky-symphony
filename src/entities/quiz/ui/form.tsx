import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { useQuiz } from '../model/use-quiz';
import { getStatusByProgress } from '../lib/get-progress';
import { QuizQuestions } from '../config/questions';

import { QuizDogAnnouncer } from './dog-announcer';

import { MView } from '@/shared/ui/motion-view';
import { RadioButton } from '@/shared/ui/radio';
import { View } from '@/shared/ui/view';
import { getRandomItemFromArray } from '@/shared/lib/utils/helpers';
import { Text } from '@/shared/ui/text';

export const QuizForm = () => {
  const { incCorrectAnswers, nextQuestion, currentQuestionNumber } = useQuiz();
  const status = getStatusByProgress(currentQuestionNumber);
  const questionsList = QuizQuestions[status];
  const { question, correctVariant, variants } = getRandomItemFromArray(questionsList);

  const [value, setValue] = useState<string | null>(null);

  const handleCheckAnswer: React.FormEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <View vertical as='form' onSubmit={handleCheckAnswer}>
      <Text>{question}</Text>
      <View vertical>
        {variants.map(({ variant, title, description }) => {
          return (
            <RadioButton
              key={variant}
              id={variant.toString()}
              name='quiz'
              onChange={(e) => setValue(e.target.id)}
            >
              {title}
            </RadioButton>
          );
        })}
      </View>

      <button type='submit'>Submit</button>

      <AnimatePresence>
        {value ? (
          <MView
            key='next-button'
            onClick={() => {
              nextQuestion();
              incCorrectAnswers();
              setValue(null);
            }}
          >
            inc
          </MView>
        ) : (
          <QuizDogAnnouncer />
        )}
      </AnimatePresence>
    </View>
  );
};
