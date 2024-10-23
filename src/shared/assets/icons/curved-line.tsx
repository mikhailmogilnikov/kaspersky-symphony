import { ISVGProps } from '../../model/types/svg-props.type';

export const CurvedLine = ({ size, className }: ISVGProps) => {
  return (
    <svg className={className} viewBox='0 0 266 64' width={size} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M234.167 48.6894C195.667 50.0227 111.767 52.5894 84.1667 52.1894C49.6667 51.6894 4.16667 51.6894 1.16667 43.1894C-1.83333 34.6894 35.6667 16.6894 113.667 7.18936C191.667 -2.31064 216.167 1.18936 240.667 4.18936C265.167 7.18936 264.167 11 264.167 13.1894C264.167 16.7949 251.167 26.1894 208.667 35.6894C174.667 43.2894 101.5 56.5227 69.1667 62.1894'
        stroke='#229A85'
        strokeLinecap='round'
        strokeWidth='3'
      />
    </svg>
  );
};
