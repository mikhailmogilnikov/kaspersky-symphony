import { PuppyButton } from '@/shared/ui/puppy-button';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const HeroButtonWithBgTitle = () => {
  return (
    <View centered vertical>
      <Text
        className='mb-0 text-[56px] opacity-[4%] sm:text-[150px] md:text-[200px] lg:-mt-[386px] lg:text-[250px] xl:-mb-28 xl:-mt-[386px] xl:text-[306px]'
        weight={6}
      >
        Kaspersky
      </Text>
      <PuppyButton onClick={() => {}} />
    </View>
  );
};
