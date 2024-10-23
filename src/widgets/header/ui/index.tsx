import { useMediaQuery } from 'react-responsive';

import Logo from '@/shared/assets/icons/logo';
import RulesIcon from '@/shared/assets/icons/rules-icon';
import { Text } from '@/shared/ui/text';
import { View } from '@/shared/ui/view';

export const Header = () => {
  const isNotMobile = useMediaQuery({ query: '(min-width: 560px)' });

  return (
    <View
      as='header'
      className='my-6 py-4'
      items='center'
      justify={isNotMobile ? 'between' : 'center'}
    >
      <Logo />
      {isNotMobile ? (
        <View centered as='a' href='/' width='fit'>
          <RulesIcon />
          <Text className='-ml-2 text-nowrap' size='sm'>
            Правила конкурса
          </Text>
        </View>
      ) : null}
    </View>
  );
};
