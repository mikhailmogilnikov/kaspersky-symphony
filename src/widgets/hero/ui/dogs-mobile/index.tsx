import { EmblaOptionsType } from 'embla-carousel';
import { useMediaQuery } from 'react-responsive';

import { MobileDogsOptions } from '../../config/mobile-dogs-options';

import { HeroDogMobile } from './dog-mobile';

import Carousel from '@/shared/ui/carousel';

export const HeroDogsMobile = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const slides = MobileDogsOptions.map((dog) => {
    const {
      textClassPositionMobile,
      textClassPositionTablet,
      blockClassPositionMobile,
      blockClassPositionTablet,
      ...restDog
    } = dog;

    const textClassPosition = isTablet ? textClassPositionTablet : textClassPositionMobile;
    const blockClassPosition = isTablet ? blockClassPositionTablet : blockClassPositionMobile;

    return (
      <HeroDogMobile
        key={dog.title}
        {...restDog}
        blockClassPosition={blockClassPosition}
        textClassPosition={textClassPosition}
      />
    );
  });

  return <Carousel options={OPTIONS} slides={slides} />;
};
