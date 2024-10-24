import Socks from '@/shared/assets/images/prizes/socks.png';
import Broom from '@/shared/assets/images/prizes/broom.png';
import Bear from '@/shared/assets/images/prizes/bear.png';
import Hoodie from '@/shared/assets/images/prizes/hoodie.png';
import PromoCode from '@/shared/assets/images/prizes/promo_code.png';
import { EPrizeTypes, ICardPrize } from '@/entities/prize/';

interface ICardPrizeOptions extends ICardPrize {
  cardClass: string;
}

export const PrizesList: ICardPrizeOptions[] = [
  {
    name: 'Носки',
    feature: 'теплые',
    type: EPrizeTypes.SYMPHONY_SECURITY,
    image: Socks,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    imgWidth: 332,
    bgClass: 'bg-primary-200',
    cardClass: 'mt-20 -rotate-[4deg] z-10',
    imgClass: '-mt-8 -ml-2',
  },
  {
    name: 'Веник',
    feature: 'банный',
    type: EPrizeTypes.SYMPHONY_MDR,
    image: Broom,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    imgWidth: 246,
    bgClass: 'bg-tretiary',
    cardClass: 'z-20 mt-6 -rotate-[2deg]',
    imgClass: '-mt-5',
  },
  {
    name: 'Худи',
    feature: 'клевое',
    type: EPrizeTypes.SYMPHONY_XDR,
    image: Hoodie,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    imgWidth: 246,
    bgClass: 'bg-default',
    cardClass: 'z-30',
    imgClass: '-mt-5',
  },
  {
    name: 'Кнопка',
    feature: 'антистрессовая',
    type: EPrizeTypes.SYMPHONY_EDR,
    image: Bear,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    imgWidth: 246,
    bgClass: 'bg-secondary',
    cardClass: 'z-20 mt-6 rotate-[2deg]',
    imgClass: '-mt-5 ml-2',
  },
  {
    name: 'Промокод',
    feature: 'полезный',
    type: EPrizeTypes.SYMPHONY_SECURITY,
    image: PromoCode,
    description: 'Промокоды на продукцию Касперского, в виде скидки, либо бесплатного доступа.',
    imgWidth: 298,
    bgClass: 'bg-primary-200',
    cardClass: 'mt-20 rotate-[4deg]  z-10',
    imgClass: '-mt-8 ml-3',
  },
];
