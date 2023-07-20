import { FC } from 'react';

import { BtnLink } from '@/components/button/BtnLink';
import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';

import { ProgramsSlideProps } from './ProgramsSlide.props';

export const ProgramsSlide: FC<ProgramsSlideProps> = ({
  text,
  title,
  path,
  active,
}) => {
  return (
    <CardWrapper
      tag="div"
      className="relative mx-auto flex h-[296px] w-[280px] flex-col items-center bg-white p-6"
    >
      <Title tag="h3" className="mb-4 text-center text-lg">
        {title}
      </Title>
      <Paragraph size="small" className="mb-2 text-center">
        {text}
      </Paragraph>

      <BtnLink
        variant="ghost"
        href={path}
        className="mt-auto block"
        disabled={!active}
      >
        {active ? 'Залишити заявку' : 'Набір призупинено'}
      </BtnLink>
    </CardWrapper>
  );
};
