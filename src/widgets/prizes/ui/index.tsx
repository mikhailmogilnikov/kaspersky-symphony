import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { PrizesTypes } from './types';
import { BottomBlur } from './bottom-blur';
import { DesktopCards } from './desktop-cards';
import { MobileCards } from './mobile-cards';

import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { EPrizeTypes } from '@/entities/prize';

export const PrizesSection = () => {
  const [hoveredPrize, setHoveredPrize] = useState<null | EPrizeTypes>(null);
  const [tapType, setTabType] = useState<EPrizeTypes>(EPrizeTypes.SYMPHONY_SECURITY);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <View centered vertical as='section' className='relative mt-40 pb-20'>
      <Text as={'h1'} className='text-center text-[24px] md:text-[32px] lg:text-[40px]' weight={6}>
        Призы от <span className='text-gradient-base'>Kaspersky</span>
      </Text>
      <PrizesTypes
        hoveredPrize={hoveredPrize}
        isDesktop={isDesktop}
        setTabType={setTabType}
        tabType={tapType}
      />
      {isDesktop ? (
        <DesktopCards setHoveredPrize={setHoveredPrize} />
      ) : (
        <MobileCards tabType={tapType} />
      )}

      <BottomBlur />
    </View>
  );
};
