import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

import { ICardPrize } from '../../model/card-prize.type';

import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';

export const PrizeCard = ({
  name,
  feature,
  image,
  description,
  imgWidth,
  bgClass,
  imgClass,
}: ICardPrize) => {
  const isMobile = !useMediaQuery({ query: '(min-width: 600px)' });
  const cardClass = clsx('relative h-[375px] max-w-[330px] rounded-3xl p-4', {
    'h-[340px] max-w-[280px]': isMobile,
  });

  const descClass = clsx('max-w-[300px] text-center leading-6', {
    'max-w-[240px]': isMobile,
  });

  return (
    <View centered vertical className={cn(cardClass, bgClass)} gap='sm'>
      <Text as='h2' className='leading-6' size={isMobile ? 'xl' : '2xl'} weight={5}>
        {name}
      </Text>
      <Text as='h2' className='leading-5' size={isMobile ? 'base' : 'xl'}>
        {feature}
      </Text>
      <View className='h-[200px] w-[200px]'>
        <Picture
          alt={name}
          className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', imgClass)}
          draggable={false}
          src={image}
          width={imgWidth}
        />
      </View>
      <Text as='h2' className={descClass} size={isMobile ? 'base' : 'xl'} weight={4}>
        {description}
      </Text>
    </View>
  );
};
