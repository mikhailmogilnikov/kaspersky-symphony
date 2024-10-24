import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

import Blur from '@/shared/assets/images/prizes/prizes_blur.png';

export const BottomBlur = () => {
  const isMobile = !useMediaQuery({ query: '(min-width: 600px)' });

  const blurClass = clsx(
    'absolute bottom-0 left-1/2 -z-10 w-2/3 -translate-x-1/2 translate-y-1/4',
    {
      'scale-[250%]': isMobile,
    },
  );

  return (
    <div className='pointer-events-none absolute bottom-0 flex h-1/2 w-dvw items-center justify-center overflow-hidden'>
      <img alt='blur' className={blurClass} src={Blur} />
      <div className='border-gradient-primary absolute bottom-0 h-[1px] w-2/3 opacity-50' />
    </div>
  );
};
