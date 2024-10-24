import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import puppy from '@/shared/assets/images/puppies/puppy_6.png';
import { CurvedLine } from '@/shared/assets/icons/curved-line';

export const HeroDescription = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1260px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 560px)' });

  const subDescriptionClass = clsx('text-center text-sm xl:text-xl', {
    'max-w-[420px]': !isMobile,
  });

  return (
    <>
      <Text
        as='h2'
        className='mt-10 max-w-[720px] text-center text-[20px] leading-7 md:text-[32px] md:leading-10 lg:leading-10 xl:text-[40px] xl:leading-10'
        weight={6}
      >
        Kaspersky и <span className='text-gradient-base'>технология Symphony</span> подготовили для
        тебя классный тест!
      </Text>
      <View className='px-4' width='fit'>
        <Text className={subDescriptionClass} weight={3}>
          Проверь свою мощь в кибербезопасности и получи своего{' '}
          <span className='relative font-semibold'>
            тотемного пёселя{' '}
            <CurvedLine className='absolute -right-4 -top-1 -z-10' size={isDesktop ? 192 : 150} />
            <Picture
              alt='dog'
              className='absolute -right-12 -top-4 -z-10'
              src={puppy}
              width={isDesktop ? 42 : 36}
            />
          </span>
        </Text>
      </View>
    </>
  );
};
