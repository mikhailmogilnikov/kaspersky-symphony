import puppy1 from '@/shared/assets/images/puppies/puppy_1.png';
import puppy2 from '@/shared/assets/images/puppies/puppy_2.png';
import puppy3 from '@/shared/assets/images/puppies/puppy_3.png';
import puppy4 from '@/shared/assets/images/puppies/puppy_4.png';
import puppy5 from '@/shared/assets/images/puppies/puppy_5.png';
import { ArrowRight } from '@/shared/assets/icons/arrow-right';
import { Button } from '@/shared/ui/button';
import { Picture } from '@/shared/ui/picture';
import { useModal } from '@/shared/ui/modal';
import { Quiz } from '@/entities/quiz';

export const PassQuizButton = () => {
  const { setModal } = useModal();

  const handleOpenQuiz = () => {
    setModal(<Quiz />, { save: false, scrollable: true });
  };

  return (
    <div className='relative'>
      <Button
        className='shadow-blum gap-4 rounded-full px-16 py-8 active:translate-y-1 xl:px-32 xl:py-12'
        size='lg'
        onClick={handleOpenQuiz}
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
