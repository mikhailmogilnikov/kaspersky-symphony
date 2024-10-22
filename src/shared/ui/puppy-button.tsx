import { ArrowRight } from '../assets/icons/arrow-right';
import puppy1 from '../assets/images/button-puppies/puppy_1.png';
import puppy2 from '../assets/images/button-puppies/puppy_2.png';
import puppy3 from '../assets/images/button-puppies/puppy_3.png';
import puppy4 from '../assets/images/button-puppies/puppy_4.png';
import puppy5 from '../assets/images/button-puppies/puppy_5.png';

import { Button } from './button/button';
import { Picture } from './picture';

interface Props {
  onClick: VoidFunction;
}

export const PuppyButton = ({ onClick }: Props) => {
  return (
    <div className='relative'>
      <Button
        className='!primary-shadow gap-4 rounded-full px-32 py-12 shadow-2xl shadow-primary/40'
        size='lg'
        onClick={onClick}
      >
        Пройти тест
        <ArrowRight />
      </Button>
      <Picture alt='puppy1' className='absolute -bottom-6 right-6' src={puppy1} width={48} />
      <Picture alt='puppy2' className='absolute -top-12 right-2 -z-10' src={puppy2} width={68} />
      <Picture alt='puppy3' className='absolute -bottom-6 left-12' src={puppy3} width={46} />
      <Picture alt='puppy4' className='absolute -top-6 right-28' src={puppy4} width={40} />
      <Picture alt='puppy5' className='absolute -left-9 top-4 -z-10' src={puppy5} width={52} />
    </div>
  );
};
