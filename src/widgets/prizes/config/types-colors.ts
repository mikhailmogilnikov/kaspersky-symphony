import { EPrizeTypes } from '@/entities/prize';
import SecurityBlur from '@/shared/assets/images/prizes/security_blur.png';
import MDRBlur from '@/shared/assets/images/prizes/mdr_blur.png';
import EDRBlur from '@/shared/assets/images/prizes/edr_blur.png';
import XDRBlur from '@/shared/assets/images/prizes/xdr_blur.png';

interface ITypeProperties {
  gradient: string;
  bgBlur: string;
}

export const TypesColors: Record<EPrizeTypes, ITypeProperties> = {
  'Symphony Security': {
    gradient: 'border-gradient-primary',
    bgBlur: SecurityBlur,
  },
  'Symphony MDR': {
    gradient: 'border-gradient-tritiary',
    bgBlur: MDRBlur,
  },
  'Symphony EDR': {
    gradient: 'border-gradient-secondary',
    bgBlur: EDRBlur,
  },
  'Symphony XDR': {
    gradient: 'border-gradient-default',
    bgBlur: XDRBlur,
  },
};
