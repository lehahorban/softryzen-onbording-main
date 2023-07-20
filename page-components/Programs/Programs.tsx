import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import { SwiperNav } from '@/components/common/SwiperNav';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { ProgramsSlide } from '@/components/common/ProgramsSlide/ProgramsSlide';

import internshipProgramsData from '@/data/internshipPrograms.json';

export const Programs: FC = () => {
  return (
    <Section className="programs-section bg-primary" id="program">
      <div className="container">
        <Title
          variant="light"
          tag="h2"
          className="mb-6 text-center md:mb-10 xl:mb-[60px]"
        >
          Напрями стажування
        </Title>

        <Swiper
          wrapperTag="ul"
          grabCursor={true}
          // slidesPerView={'auto'}
          // rewind={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          {internshipProgramsData.map(slide => (
            <SwiperSlide tag="li" key={slide.id} className="m-0">
              <ProgramsSlide {...slide} />
            </SwiperSlide>
          ))}

          <SwiperNav color="white" />
        </Swiper>
      </div>
    </Section>
  );
};
