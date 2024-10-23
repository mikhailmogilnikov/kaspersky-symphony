import { useEffect, useState } from 'react';

import { getQuizProgress } from '../lib/get-progress';

import { useQuiz } from './use-quiz';

export const useProgressStep = () => {
  const { correctAnswersCount } = useQuiz();

  const [progressStep, setProgressStep] = useState('0%');

  useEffect(() => {
    setProgressStep(getQuizProgress(correctAnswersCount));
  }, [correctAnswersCount]);

  return { progressStep };
};
