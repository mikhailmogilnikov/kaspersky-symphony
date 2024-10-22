import { Button } from '@/shared/ui/button';
import { MView } from '@/shared/ui/motion-view';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const HeroSection = () => {
  return (
    <View vertical as='section'>
      <View>
        <View className='h-10 w-10 bg-primary-100' />
        <View className='h-10 w-10 bg-primary-300' />
        <View className='h-10 w-10 bg-primary-500' />
        <View className='h-10 w-10 bg-primary-700' />
        <View className='h-10 w-10 bg-primary-900' />
        <View className='gradient-base h-10 w-40' />
      </View>

      <MView animate={{ x: 200 }} initial={{ x: 0 }}>
        <Text size='5xl'>Hello</Text>
      </MView>

      <Text heading={2} size='5xl'>
        Шрифт для заголовков.
      </Text>

      <Button className='max-w-60 shadow-lg shadow-primary/40'>Отправить</Button>
    </View>
  );
};
