import { useMediaQuery } from 'react-responsive';

import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

interface Props {
  image: string;
  title: string;
  textClassPosition: string;
  blockClassPosition: string;
}

export const HeroDogMobile = ({ image, title, textClassPosition, blockClassPosition }: Props) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <View className={`relative ${blockClassPosition}`} width='fit'>
      <Picture alt={title} draggable={false} src={image} width={isTablet ? 420 : 280} />
      <Text className={`absolute ${textClassPosition} text-sm`} weight={5}>
        {title}
      </Text>
    </View>
  );
};
