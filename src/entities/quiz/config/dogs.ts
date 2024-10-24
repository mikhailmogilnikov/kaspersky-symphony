import DogSecurity from '@/shared/assets/images/dogs/dog_1.png';
import DogMdr from '@/shared/assets/images/dogs/dog_2.png';
import DogEdr from '@/shared/assets/images/dogs/dog_3.png';
import DogXdr from '@/shared/assets/images/dogs/dog_4.png';
import { ESymphonyLevels } from '@/shared/model/types';

type QuizDog = {
  img: string;
  message: string;
};

export const QuizDogs: Record<ESymphonyLevels, QuizDog> = {
  [ESymphonyLevels.SECURITY]: {
    img: DogSecurity,
    message: 'Вопросы уровня Security',
  },
  [ESymphonyLevels.MDR]: {
    img: DogMdr,
    message: 'Вой, дог! А это вопросы покруче... уровня MDR',
  },
  [ESymphonyLevels.EDR]: {
    img: DogEdr,
    message: 'Вой, дог! А это вопросы покруче... уровня EDR',
  },
  [ESymphonyLevels.XDR]: {
    img: DogXdr,
    message: 'Вой, дог! А это вопросы покруче... уровня XDR',
  },
};
