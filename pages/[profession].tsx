import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter, withRouter } from 'next/router';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { WithRouterProps } from 'next/dist/client/with-router';

import { Form } from '@/page-components/Form';
import { routes } from '@/utils/routes';
import { withLayout } from '@/layout/Layout';

import { Modal } from '@/components/common/Modal';
import { Paragraph } from '@/components/typography/Paragraph';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';

export interface ProfessionProps extends WithRouterProps {
  profession: string;
}

const Profession = ({ profession, router }: ProfessionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useRouter();

  const closeModal = () => {
    setIsOpen(false);
    navigate.push(routes.HOME);
  };

  const openModal = () => setIsOpen(true);

  let type: string;

  switch (profession) {
    case 'frontend':
      type = 'FrontEnd';
      break;
    case 'backend':
      type = 'BackEnd';
      break;
    case 'pm':
      type = 'PM';
      break;
    case 'design':
      type = 'UI/UX Design';
      break;
    case 'qa':
      type = 'QA';
      break;
    default:
      type = 'other';
      break;
  }

  useEffect(() => {
    if (type === 'other') {
      router.push(routes.HOME);
    }
  }, [router, type]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>SoftRyzen Internship {type}</title>
      </Head>

      <Section>
        {type !== 'other' && (
          <div className="container">
            <Title
              tag="h2"
              className="mb-6 text-primary md:mb-10 md:text-center xl:mb-[60px]"
            >
              Почни свою кар`єру {type} зараз
            </Title>
            <Form
              type={profession}
              closeModal={closeModal}
              openModal={openModal}
            />

            <Modal isOpen={isOpen} closeModal={closeModal}>
              <h2 className="mx-auto mb-4 max-w-[320px] text-center text-lg font-semibold text-white md:mb-10 md:max-w-[356px] md:text-xl xl:mb-9 xl:max-w-[608px] xl:text-4xl">
                Дякуємо за реєстрацію на стажування у SoftRyzen
              </h2>

              <Paragraph size="small" className="text-center" color="white">
                Вам на пошту надіслано тестове завдання.
              </Paragraph>
            </Modal>
          </div>
        )}
      </Section>
    </>
  );
};

export default withLayout(withRouter(Profession));

// interface Props {
//   profession: string;
// }

// interface IContextProps extends GetServerSidePropsContext {
//   params: ParsedUrlQuery;
// }

// export const getServerSideProps = (
//   context: IContextProps,
// ): Promise<GetServerSidePropsResult<Props>> => {
//   const { profession } = context.params;

//   return Promise.resolve({
//     props: { profession: profession as string },
//   });
// };

export const getStaticProps: GetStaticProps<any> = async (
  ctx: GetStaticPropsContext<any>,
) => {
  const { profession } = ctx.params;

  if (!profession) {
    return {
      notFound: true,
    };
  }

  return {
    props: { profession },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { profession: 'frontend' } },
      { params: { profession: 'backend' } },
      { params: { profession: 'pm' } },
      { params: { profession: 'design' } },
      { params: { profession: 'qa' } },
    ],
    fallback: false,
  };
};
