import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { DutiesSlide } from '@/components/common/DutiesSlide';

import dutiesData from '@/data/duties.json';

export const Duties: FC = () => {
  return (
    <Section className="duties-section bg-section_background" id="description">
      <div className="container">
        <Title variant="light" tag="h2" className="mb-10 text-center">
          Для проходження стажування
        </Title>

        <ul className="duties-list mx-auto grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-5 xl:w-[800px] xl:gap-y-10">
          {dutiesData.map(slide => (
            <DutiesSlide key={slide.id} {...slide} />
          ))}
        </ul>
      </div>
    </Section>
  );
};
