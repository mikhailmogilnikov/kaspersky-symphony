import { useState } from 'react';

import { PrizesList } from '../config/prizes-list';

import { PrizesTypes } from './types';
import { BottomBlur } from './bottom-blur';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { EPrizeTypes, PrizeCard } from '@/entities/prize';
import { cn } from '@/shared/lib/utils/ui';

export const PrizesSection = () => {
  const [hoveredPrize, setHoveredPrize] = useState<null | EPrizeTypes>(null);

  return (
    <View centered vertical as='section' className='relative mt-40 pb-20'>
      <Text as={'h1'} className='text-[40px]' weight={6}>
        Призы от <span className='text-gradient-base'>Kaspersky</span>
      </Text>
      <PrizesTypes hoveredPrize={hoveredPrize} />
      <View>
        {PrizesList.map((prize) => (
          <View
            key={prize.name}
            className={cn('-ml-16 first:ml-0', prize.cardClass)}
            onMouseOut={() => setHoveredPrize(null)}
            onMouseOver={() => setHoveredPrize(prize.type)}
          >
            <PrizeCard {...prize} />
          </View>
        ))}
      </View>

      <BottomBlur />
    </View>
  );
};
