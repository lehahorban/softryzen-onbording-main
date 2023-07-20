import { CardWrapper } from '@/components/common/CardWrapper';
import { Section } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import data from '@/data/internshipProcessData.json';
import Cube from '@/public/images/cube.svg';
import { FC } from 'react';

export const Process: FC = () => {
  return (
    <Section
      className="programs-section bg-white_light xl:pb-[100px] smOnly:pb-8"
      id="process"
    >
      <div className="container relative">
        <Title
          variant="dark"
          tag="h2"
          className="mb-6 text-center md:mb-10 xl:mb-[120px]"
        >
          {data.title}
        </Title>
        <ul className="mx-auto grid gap-2 md:grid-cols-2 md:gap-x-8 md:gap-y-3 xl:w-[1008px] xl:gap-x-[448px]">
          {data.infoItems.map(item => (
            <CardWrapper
              key={item.id}
              className="relative px-7 py-5 after:absolute after:top-1/2 after:z-10 after:hidden after:h-3 after:bg-no-repeat after:content-[''] odd:after:right-[-76px] odd:after:w-[92px] odd:after:bg-stickBg even:after:left-[-80px] even:after:w-[96px] even:after:bg-stickBgRight md:px-9 after:xl:block"
            >
              <Title tag="h3" className="pb-4 text-primary">
                {item.title}
              </Title>
              <Paragraph className="xl:text-base">{item.text}</Paragraph>
            </CardWrapper>
          ))}
        </ul>
        <div className="left-1/2 top-[100px] z-10 hidden -translate-x-1/2 transform xl:absolute xl:block">
          <Cube width={384} height={384} />
        </div>
      </div>
    </Section>
  );
};
