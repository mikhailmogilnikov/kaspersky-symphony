import './index.css';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { DotButton, useDotButton } from './carousel-dot-button';

export type CarouselProps = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  hideControls?: boolean;
  isAutoplay?: boolean;
};

const Carousel = ({ slides, options, hideControls, isAutoplay }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: isAutoplay, delay: 3000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className='embla'>
      <div ref={emblaRef} className='embla__viewport'>
        <div className='embla__container'>
          {slides.map((slide, index) => (
            <div key={index} className='embla__slide'>
              {slide}
            </div>
          ))}
        </div>
      </div>

      {hideControls ? null : (
        <div className='embla__controls'>
          <div className='embla__dots'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                className={'embla__dot'.concat(
                  index === selectedIndex ? `${' '}embla__dot--selected` : '',
                )}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
