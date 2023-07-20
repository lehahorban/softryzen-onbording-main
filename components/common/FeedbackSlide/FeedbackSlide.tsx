import { FC } from 'react';
import Image from 'next/image';

import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import { Paragraph } from '@/components/typography/Paragraph';

import { FeedbackSlideProps } from './FeedbackSlide.props';
import Linkedin from '@/public/socials.svg';

export const FeedbackSlide: FC<FeedbackSlideProps> = ({
  text,
  image,
  name,
  position,
  linkedin,
}) => {
  return (
    <CardWrapper
      tag="div"
      className={`feedback-slide h-[564px] w-[270px] p-6 pb-28 md:h-[400px] md:w-[592px] md:pb-14 notXl:mx-auto`}
    >
      <div className="grid h-full gap-12">
        <div className="line-clamp-[13] overflow-hidden">
          <Paragraph className="text-dark">{text}</Paragraph>
        </div>

        <div className="flex items-start gap-2 self-end">
          <Image
            src={image}
            alt={name}
            width={68}
            height={68}
            className="rounded-lg"
          />

          <div className="grid gap-1">
            <h3 className="text-lg font-semibold text-dark">{name}</h3>

            <p className="text-xs text-dark">{position}</p>

            <a
              className="h-4 w-4"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Посилання на Лінкедін"
            >
              <Linkedin className="h-full w-full" />
            </a>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
