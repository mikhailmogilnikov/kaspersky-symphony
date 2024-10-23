import { Picture } from '@/shared/ui/picture';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';
import puppy from '@/shared/assets/images/puppies/puppy_6.png';
import { CurvedLine } from '@/shared/assets/icons/curved-line';

export const HeroDescription = () => {
  return (
    <>
      <Text as='h2' className='mt-10 max-w-[700px] text-center text-[40px] leading-10' weight={5}>
        Kaspersky и <span className='text-gradient-base'>технология Symphony</span> подготовили для
        тебя классный тест!
      </Text>
      <View className='relative' width='fit'>
        <Text size='xl' weight={3}>
          Проверь свою мощь в кибербезопасности и получи своего{' '}
          <span className='font-semibold'>тотемного пёселя</span>
        </Text>
        <CurvedLine className='absolute -top-1 right-0 -z-10' size={192} />
        <Picture alt='dog' className='absolute -right-8 -top-4 -z-10' src={puppy} width={42} />
      </View>
    </>
  );
};
