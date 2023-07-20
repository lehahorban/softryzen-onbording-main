import { BtnLink } from '@/components/button/BtnLink';
import { Section } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import hero from '@/data/hero.json';

export const Hero = () => {
  return (
    <Section className="hero-bg bg-white pb-[105px] pt-20 md:pb-[215px] md:pt-[119px] xl:pb-[233px] xl:pt-[120px]">
      <div className="container text-center">
        <Title
          tag="h1"
          className="mb-5 md:mb-10 smOnly:mx-auto smOnly:max-w-[290px]"
        >
          {hero.title.soft}
          <span className="text-primary">{hero.title.ryzen}</span>{' '}
          {hero.title.internship}
        </Title>
        <Paragraph className="mx-auto mb-10 max-w-[387px] md:mb-10 md:max-w-[498px] xl:max-w-[568px]">
          {hero.text}
        </Paragraph>
        <BtnLink href={'program'} scroll className="mx-auto mb-4 block md:mb-5">
          {hero.button}
        </BtnLink>
        <div className="mx-auto md:flex md:max-w-[300px] md:gap-4">
          <p className="text-[16px] font-semibold leading-[1.75] text-primary smOnly:mb-1">
            <span className="text-dark">Тривалість: </span>
            {hero.duration}
          </p>
          <p className="text-[16px] font-semibold leading-[1.75] text-primary">
            <span className="text-dark">Старт: </span>
            {hero.start}
          </p>
        </div>
      </div>
    </Section>
  );
};
