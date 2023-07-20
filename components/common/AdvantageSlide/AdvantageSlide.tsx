import { FC } from 'react';

import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';

import Cubik from '@/public/cube.svg';
import { AdvantageSlideProps } from './AdvantageSlide.props';

export const AdvantageSlide: FC<AdvantageSlideProps> = ({ header, text }) => {
  return (
    <CardWrapper className="h-[308px] w-[592px] bg-white p-6">
      <Cubik width="60px" height="60px" />
      <Title tag="h3" className="my-5">
        {header}
      </Title>
      <Paragraph>{text}</Paragraph>
    </CardWrapper>
  );
};
