import { PrizesList } from '../config/prizes-list';

import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';
import { EPrizeTypes, PrizeCard } from '@/entities/prize';

interface Props {
  setHoveredPrize: (type: null | EPrizeTypes) => void;
}

export const DesktopCards = ({ setHoveredPrize }: Props) => {
  return (
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
  );
};
