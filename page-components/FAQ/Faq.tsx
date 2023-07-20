import { FC } from 'react';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { FaqCard } from '@/components/common/FaqCard';

import faqItems from '@/data/faq.json';

export const Faq: FC = () => {
  return (
    <Section className="faq-section bg-white" id="faq">
      <div className="container">
        <Title tag="h2" className="mb-10 text-center">
          FAQ або поширені запитання
        </Title>
        {faqItems.map((item, index) => (
          <FaqCard
            key={item.question}
            question={item.question}
            answer={item.answer}
            defaultIndex={index === 0 ? true : false}
          />
        ))}
      </div>
    </Section>
  );
};
