import { PrizesType } from './type';

import { EPrizeTypes } from '@/entities/prize';
import { View } from '@/shared/ui/view';

interface Props {
  hoveredPrize: EPrizeTypes | null;
}

export const PrizesTypes = ({ hoveredPrize }: Props) => {
  const types = Object.values(EPrizeTypes);

  return (
    <View centered className='mb-8 gap-0'>
      {types.map((type) => (
        <PrizesType key={type} hoveredPrize={hoveredPrize} type={type} />
      ))}
    </View>
  );
};
