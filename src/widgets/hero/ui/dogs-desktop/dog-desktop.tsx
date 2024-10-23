import { cn } from '@/shared/lib/utils/ui';
import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

interface Props {
  image: string;
  imageWidth: number;
  title: string;
  textClassPosition: string;
  blockClassPosition: string;
}

export const HeroDogDesktop = ({
  image,
  imageWidth,
  title,
  textClassPosition,
  blockClassPosition,
}: Props) => {
  return (
    <View className={cn('absolute select-none', blockClassPosition)} width='fit'>
      <Picture alt={title} draggable={false} src={image} width={imageWidth} />
      <Text className={cn('absolute select-none', textClassPosition)} weight={5}>
        {title}
      </Text>
    </View>
  );
};
