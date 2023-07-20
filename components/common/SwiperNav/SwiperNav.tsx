import { FC } from 'react';
import { useSwiper } from 'swiper/react';
import cn from 'classnames';

import { SwiperNavProps } from './SwiperNav.props';
import Arrow from '@/public/images/feedback/arrow.svg';

export const SwiperNav: FC<SwiperNavProps> = ({
  color = 'blue',
  className = '',
}) => {
  const swiper = useSwiper();

  return (
    <div className={cn('flex items-center justify-center gap-6', className)}>
      <button
        aria-label="Попередній слайд"
        onClick={() => swiper.slidePrev()}
        className={`py-4 hover:text-secondary focus:text-secondary ${
          color === 'blue' ? 'text-hover' : 'text-white_light'
        }`}
      >
        <Arrow className="h-[18px] w-[38px] rotate-180 duration-300 " />
      </button>

      <button
        aria-label="Наступний слайд"
        onClick={() => {
          swiper.slideNext();
          //FIXME: fix this
        }}
        className={`py-4 hover:text-secondary focus:text-secondary ${
          color === 'blue' ? 'text-hover' : 'text-white_light'
        }`}
      >
        <Arrow className="h-[18px] w-[38px] duration-300" />
      </button>
    </div>
  );
};
