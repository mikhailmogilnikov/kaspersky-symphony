import { AnimatePresence, m } from 'framer-motion';

import { TypesColors } from '../../config/types-colors';

import { EPrizeTypes } from '@/entities/prize';
import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';

interface Props {
  hoveredPrize: EPrizeTypes | null;
  type: EPrizeTypes;
}

export const PrizesType = ({ hoveredPrize, type }: Props) => {
  const animationProps = {
    initial: { opacity: 0, filter: 'blur(12px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(12px)' },
    transition: { duration: 0.3 },
  };

  return (
    <View centered className='relative px-4 py-4' width='fit'>
      <View
        className='inner-shadow rounded-2xl bg-white bg-opacity-10 px-12 py-3 text-lg'
        width='fit'
      >
        {type}
      </View>
      <AnimatePresence>
        {hoveredPrize === type ? (
          <>
            <m.div
              {...animationProps}
              className={cn('absolute bottom-0 h-[1px] w-2/3', TypesColors[type].gradient)}
            />
            <m.img
              alt='blur'
              className='absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 scale-[200%]'
              src={TypesColors[type].bgBlur}
              {...animationProps}
            />
          </>
        ) : null}
      </AnimatePresence>
    </View>
  );
};
