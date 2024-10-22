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
    <View className={`absolute ${blockClassPosition}`} width='fit'>
      <Picture alt={title} src={image} width={imageWidth} />
      <Text className={`absolute ${textClassPosition}`} weight={5}>
        {title}
      </Text>
    </View>
  );
};
