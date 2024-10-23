import { useMediaQuery } from 'react-responsive';

import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import { cn } from '@/shared/lib/utils/ui';

interface Props {
  image: string;
  title: string;
  textClassPosition: string;
  blockClassPosition: string;
}

export const HeroDogMobile = ({ image, title, textClassPosition, blockClassPosition }: Props) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <View className={cn('relative', blockClassPosition)} width='fit'>
      <Picture alt={title} draggable={false} src={image} width={isTablet ? 420 : 280} />
      <Text className={cn('absolute text-sm', textClassPosition)} weight={5}>
        {title}
      </Text>
    </View>
  );
};
