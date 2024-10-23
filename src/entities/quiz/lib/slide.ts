import { MutableRefObject } from 'react';

export const scrollRight = (
  containerRef: MutableRefObject<HTMLElement | null | undefined>,
  barRef: MutableRefObject<HTMLElement | null | undefined>,
) => {
  if (containerRef.current && barRef.current) {
    const barWidth = barRef.current.offsetWidth;

    containerRef.current.scrollTo({
      left: barWidth,
      behavior: 'smooth',
    });
  }
};
