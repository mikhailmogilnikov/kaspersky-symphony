import { useMediaQuery } from 'react-responsive';

import { HeroDogsDesktop } from './dogs-desktop';
import { HeroDescription } from './description';
import { HeroDogsMobile } from './dogs-mobile';

import { PassQuizButton } from '@/features/pass-quiz';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const HeroSection = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1260px)' });

  return (
    <View centered vertical as='section'>
      <Text
        className='text-center text-[40px] leading-none md:text-[64px] xl:text-[98px]'
        heading={1}
        weight={5}
      >
        Кто ты в мире киберугроз?
      </Text>
      {isDesktop ? <HeroDogsDesktop /> : <HeroDogsMobile />}
      <View centered vertical>
        <Text
          className='pointer-events-none -mt-36 mb-20 select-none text-[64px] opacity-[4%] xl:-mb-28 xl:-mt-[386px] xl:text-[306px]'
          weight={6}
        >
          Kaspersky
        </Text>
        <PassQuizButton />
      </View>
      <HeroDescription />
    </View>
  );
};
