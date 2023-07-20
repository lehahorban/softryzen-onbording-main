import { FC } from 'react';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import GoIT from '@/public/images/brands/goit.svg';

export const PartnerSection: FC = () => {
  return (
    <Section className="partner-section bg-white xl:py-20">
      <div className="container">
        <Title tag="h2" className="mb-[40px] text-center xl:mb-[60px]">
          Партнер
        </Title>
        <GoIT className="ml-auto mr-auto h-9 w-[120px] md:mb-10 xl:mb-[60px]" />
      </div>
    </Section>
  );
};
