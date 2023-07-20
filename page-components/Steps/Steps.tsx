import { CardWrapper } from '@/components/common/CardWrapper';
import { Section } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import data from '@/data/steps.json';

export const Steps = () => {
  return (
    <Section className="steps-bg relative">
      <div className="container">
        <Title tag="h2" className="mb-6 text-center md:mb-10 xl:mb-[60px]">
          {data.title}
        </Title>
        <ul className="grid gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-6 xl:grid-cols-3 xl:gap-y-[74px]">
          {data.items.map(item => {
            return (
              <CardWrapper
                key={item.id}
                className="steps-number relative flex min-h-[184px] flex-col justify-between bg-white px-5 pb-7 pt-5"
              >
                <Title tag="h3">{item.title}</Title>
                <Paragraph size="small" className="md:max-w-[206px]">
                  {item.text}
                </Paragraph>
                <p className="text-xs text-primary">{item.time}</p>
              </CardWrapper>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};
