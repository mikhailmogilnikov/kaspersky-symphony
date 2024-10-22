import { ISVGProps } from '../../model/types/svg-props.type';

export const ArrowRight = ({ size = 24 }: ISVGProps) => {
  return (
    <svg viewBox='0 0 24 24' width={size} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 12H20M20 12L14 6M20 12L14 18'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  );
};
