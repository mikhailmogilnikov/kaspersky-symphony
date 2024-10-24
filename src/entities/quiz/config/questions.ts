import { QuizQuestion } from '../model/types';

import { ESymphonyLevels } from '@/shared/model/types';

const SecurityQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      'В разговоре вы услышали: «Symphony выдала активность на серваке, кинули задачку в сок». Что сделали с задачей?',
    correctVariant: 3,
    variants: [
      {
        variant: 1,
        title: 'Поставили в срочный приоритет',
      },
      {
        variant: 2,
        title: 'Проигнорировали задачу из-за её незначительности',
      },
      {
        variant: 3,
        title: 'Отправили на проверку в информ. безопаснось',
        description:
          'Сок — SOC (Security Operation Center) — центр информационной безопасности, отвечающий за обнаружение и реагирование на кибер-угрозы',
      },
      {
        variant: 4,
        title: 'Дали статус «очень интересная»',
      },
    ],
  },
  {
    id: 2,
    question:
      'В разговоре вы услышали: «Symphony выдала активность на серваке, кинули задачку в сок». Что сделали с задачей?',
    correctVariant: 3,
    variants: [
      {
        variant: 1,
        title: 'Поставили в срочный приоритет',
      },
      {
        variant: 2,
        title: 'Проигнорировали задачу из-за её незначительности',
      },
      {
        variant: 3,
        title: 'Отправили на проверку в информ. безопаснось',
        description:
          'Сок — SOC (Security Operation Center) — центр информационной безопасности, отвечающий за обнаружение и реагирование на кибер-угрозы',
      },
      {
        variant: 4,
        title: 'Дали статус «очень интересная»',
      },
    ],
  },
];

const MdrQuestions: QuizQuestion[] = SecurityQuestions;

const EdrQuestions: QuizQuestion[] = SecurityQuestions;

const XdrQuestions: QuizQuestion[] = SecurityQuestions;

export const QuizQuestions: Record<ESymphonyLevels, QuizQuestion[]> = {
  [ESymphonyLevels.SECURITY]: SecurityQuestions,
  [ESymphonyLevels.MDR]: MdrQuestions,
  [ESymphonyLevels.EDR]: EdrQuestions,
  [ESymphonyLevels.XDR]: XdrQuestions,
};
