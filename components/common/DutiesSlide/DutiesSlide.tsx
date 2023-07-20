import { FC } from 'react';

import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import { Paragraph } from '@/components/typography/Paragraph';

import { DutiesSlideProps } from './DutiesSlide.props';

export const DutiesSlide: FC<DutiesSlideProps> = ({ text }) => {
  return (
    <CardWrapper
      tag="li"
      className="duties-item flex h-28 w-full max-w-[384px] items-center  gap-5 bg-white p-5 xl:gap-7"
    >
      <Paragraph size="small">{text}</Paragraph>
    </CardWrapper>
  );
};
