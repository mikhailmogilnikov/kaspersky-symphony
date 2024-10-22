import { HeroDogsDesktop } from './dogs-descktop';
import { HeroButtonWithBgTitle } from './dogs-descktop/button-with-bg-title';
import { HeroTitle } from './title';

import { View } from '@/shared/ui/view';

export const HeroSection = () => {
  return (
    <View centered vertical as='section'>
      <HeroTitle />
      <HeroDogsDesktop />
      <HeroButtonWithBgTitle />
    </View>
  );
};
