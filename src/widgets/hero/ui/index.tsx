import { HeroDogsDesktop } from './dogs-desktop';

import { PassQuizButton } from '@/features/pass-quiz';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const HeroSection = () => {
  return (
    <View centered vertical as='section'>
      <Text className='text-center text-[98px]' heading={1} weight={5}>
        Кто ты в мире киберугроз?
      </Text>
      <HeroDogsDesktop />
      <View centered vertical>
        <Text
          className='mb-0 select-none text-[56px] opacity-[4%] sm:text-[150px] md:text-[200px] lg:-mt-[386px] lg:text-[250px] xl:-mb-28 xl:-mt-[386px] xl:text-[306px]'
          weight={6}
        >
          Kaspersky
        </Text>
        <PassQuizButton />
      </View>
    </View>
  );
};
