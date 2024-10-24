import { EmblaOptionsType } from 'embla-carousel';

import { PrizesList } from '../config/prizes-list';

import { View } from '@/shared/ui/view';
import { EPrizeTypes, PrizeCard } from '@/entities/prize';
import Carousel from '@/shared/ui/carousel';

interface Props {
  tabType: EPrizeTypes;
}

export const MobileCards = ({ tabType }: Props) => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const tabContent = PrizesList.filter((prize) => prize.type === tabType);
  const cards = tabContent.map((prize) => <PrizeCard key={prize.name} {...prize} />);

  return (
    <View centered className='-mb-8 w-full'>
      <Carousel hideControls isAutoplay options={OPTIONS} slides={cards} />
    </View>
  );
};
