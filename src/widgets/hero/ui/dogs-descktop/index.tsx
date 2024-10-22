import { DogsOptions } from '../../config/dogs-options';

import { HeroDogDesktop } from './dog-desctop';

import { View } from '@/shared/ui/view';

export const HeroDogsDesktop = () => {
  return (
    <View className='relative -mt-32 h-[600px]'>
      {DogsOptions.map((dog) => (
        <HeroDogDesktop {...dog} key={dog.title} />
      ))}
    </View>
  );
};
