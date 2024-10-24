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
  return (
    <View
      centered
      vertical
      className={cn('relative h-[375px] max-w-[330px] rounded-3xl p-4', bgClass)}
      gap='sm'
    >
      <Text as='h2' className='leading-6' size='2xl' weight={5}>
        {name}
      </Text>
      <Text as='h2' className='leading-5' size='xl'>
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
      <Text as='h2' className='max-w-[300px] text-center leading-6' size='xl' weight={4}>
        {description}
      </Text>
    </View>
  );
};
