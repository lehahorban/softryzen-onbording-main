import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Section } from '@/components/common/Section';
import { FeedbackSlide } from '@/components/common/FeedbackSlide';
import { Title } from '@/components/typography/Title';

import { SwiperNav } from '@/components/common/SwiperNav';

import feedbackData from '@/data/feedback.json';

export const FeedbackSection: FC = () => {
  return (
    <Section id="feedback">
      <div className="container">
        <Title tag="h2" className="mb-6 text-center md:mb-10 xl:mb-[60px]">
          Відгуки стажерів
        </Title>

        <Swiper
          wrapperTag="ul"
          grabCursor={true}
          loop={true}
          centeredSlides={false}
          centerInsufficientSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {feedbackData.data.map(slide => (
            <SwiperSlide tag="li" key={slide.id} className="m-0">
              <FeedbackSlide {...slide} />
            </SwiperSlide>
          ))}
          <SwiperNav />
        </Swiper>
      </div>
    </Section>
  );
};
