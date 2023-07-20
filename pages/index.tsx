import { NextPage } from 'next';
import Head from 'next/head';
import { withLayout } from '@/layout/Layout';

import { Faq } from '@/page-components/FAQ';
import { FeedbackSection } from '@/page-components/Feedback';
import { Hero } from '@/page-components/Hero/Hero';
import { Process } from '@/page-components/Process';
import { Programs } from '@/page-components/Programs';
import { PartnerSection } from '@/page-components/Partner';
import { Steps } from '@/page-components/Steps/Steps';
import { Duties } from '@/page-components/Duties';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>SoftRyzen Internship</title>
      </Head>

      <Hero />
      <Steps />
      <Duties />
      <Process />
      <Programs />
      <PartnerSection />
      <FeedbackSection />
      <Faq />
    </>
  );
};

export default withLayout(Home);
