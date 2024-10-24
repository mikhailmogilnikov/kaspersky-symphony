import { ESymphonyLevels } from '@/shared/model/types';

export const getQuizProgress = (correctAnswers: number) => {
  switch (correctAnswers) {
    case 0:
    case 1:
      return '25%';
    case 2:
    case 3:
      return '50%';
    case 4:
    case 5:
      return '75%';
    case 6:
    case 7:
    default:
      return '100%';
  }
};

export const getStatusByProgress = (currentQuestion: number) => {
  switch (currentQuestion) {
    case 1:
      return ESymphonyLevels.SECURITY;
    case 2:
    case 3:
      return ESymphonyLevels.MDR;
    case 4:
    case 5:
      return ESymphonyLevels.EDR;
    case 6:
    case 7:
    default:
      return ESymphonyLevels.XDR;
  }
};
