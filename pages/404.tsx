import { NextPage } from 'next';
import Head from 'next/head';

import { BtnLink } from '@/components/button/BtnLink';
import { Title } from '@/components/typography/Title';
import { withLayout } from '@/layout/Layout';
import { Section } from 'components/common/Section';

import { routes } from '@/utils/routes';

import Error from '@/public/images/404.svg';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Section>
        <div className="container">
          <Title tag="h2" className="mb-6 text-center">
            Сторінка, яку ви шукали - ще не створена
          </Title>

          <Error className="mx-auto mb-6 md:mb-8 md:h-[276px] md:w-[504px]" />

          <BtnLink
            variant="primary"
            className="mx-auto flex justify-center"
            href={routes.HOME}
          >
            На головну
          </BtnLink>
        </div>
      </Section>
    </>
  );
};

export default withLayout(Custom404);
