import { DogsOptions } from '../../config/dogs-options';

import { HeroDogDesktop } from './dog-desktop';

import { View } from '@/shared/ui/view';

export const HeroDogsDesktop = () => {
  return (
    <View className='relative -mt-24 h-[600px]'>
      {DogsOptions.map((dog) => (
        <HeroDogDesktop {...dog} key={dog.title} />
      ))}
    </View>
  );
};
