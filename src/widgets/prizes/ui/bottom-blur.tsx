import Blur from '@/shared/assets/images/prizes/prizes_blur.png';

export const BottomBlur = () => {
  return (
    <div className='absolute bottom-0 flex h-1/2 w-full items-center justify-center overflow-hidden'>
      <img
        alt='blur'
        className='absolute bottom-0 left-1/2 -z-10 w-2/3 -translate-x-1/2 translate-y-1/4'
        src={Blur}
      />
      <div className='border-gradient-primary absolute bottom-0 h-[1px] w-2/3 opacity-50' />
    </div>
  );
};
