import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const HomePage = () => {
  return (
    <View vertical>
      <View>
        <div className='h-14 w-14 bg-primary-100' />
        <div className='h-14 w-14 bg-primary-200' />
        <div className='h-14 w-14 bg-primary-300' />
        <div className='h-14 w-14 bg-primary-400' />
        <div className='h-14 w-14 bg-primary-500' />
        <div className='h-14 w-14 bg-primary-600' />
        <div className='h-14 w-14 bg-primary-700' />
        <div className='h-14 w-14 bg-primary-800' />
        <div className='h-14 w-14 bg-primary-900' />
      </View>

      <View>Hello</View>
      <Text color='primary'>Hii</Text>
    </View>
  );
};
