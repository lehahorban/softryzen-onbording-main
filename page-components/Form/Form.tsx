import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from '@/utils/schema';
import { postMail, sendGoogleTable } from '@/utils/api';

import { Paragraph } from '@/components/typography/Paragraph';
import { FormTextArea, Loader, Input, RadioGroup } from '@/components/Form';
import { Button } from '@/components/button/Button';
import { Modal } from '@/components/common/Modal';

import { FormProps } from '@/page-components/Form/Form.props';

import Check from '@/public/images/form/check-form.svg';
import mail from '@/data/mailText.json';

const isBrowser = typeof window !== 'undefined';
const SESSION_KEY = 'form';

export const Form = ({ type, openModal, closeModal }: FormProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema(type === 'frontend' || type === 'backend')),
  });

  useEffect(() => {
    isLoading
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isLoading]);

  useFormPersist(SESSION_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
    exclude: ['language', 'consent'],
  });

  const handleChange = () => {
    setChecked(!checked);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      const user = {
        ...data,
        type,
        createdAt: new Date().toLocaleString(),
      };

      await Promise.all([
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        postMail(user.name, data.email, mail[type]),
        sendGoogleTable(user),
      ]);

      openModal();
      reset();
      setChecked(false);
      sessionStorage.removeItem(SESSION_KEY);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <>
      {error && (
        <Modal isOpen={isLoading} closeModal={closeModal}>
          <Paragraph className="text-center text-white">
            Щось пішло не так, спробуйте будь ласка пізніше
          </Paragraph>
        </Modal>
      )}

      {isLoading && (
        <Modal isOpen={isLoading} loader closeModal={closeModal}>
          <Loader>
            <Paragraph className="text-center text-white">
              Зачекайте, ваш запит обробляється
            </Paragraph>
          </Loader>
        </Modal>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto mb-10 grid gap-x-6 gap-y-3 md:mb-[84px] xl:grid-cols-2 notXl:max-w-[608px]">
          <Input
            label="Прізвище та ім'я"
            name="name"
            type="text"
            register={register}
            placeholder="Прізвище Ім'я"
            errors={errors}
          />

          <Input
            label="Telegram у форматі https://t.me/name"
            name="telegram"
            register={register}
            type="text"
            placeholder="https://t.me/"
            errors={errors}
            defaultValue="https://t.me/"
          />

          <Input
            label="Email"
            name="email"
            type="text"
            register={register}
            placeholder="test@Ukraine"
            errors={errors}
          />

          <Input
            label="Група, яку ви закінчили в GoIT"
            name="group"
            type="text"
            register={register}
            placeholder=""
            errors={errors}
          />

          <Input
            label="Контактний телефон"
            name="phone"
            type="tel"
            register={register}
            placeholder="+380"
            defaultValue="+380"
            errors={errors}
          />

          <Input
            label="Вкажіть, будь ласка, місто, де ви знаходитесь у поточний момент"
            name="city"
            type="text"
            register={register}
            placeholder=""
            errors={errors}
          />
        </div>

        <RadioGroup
          register={register}
          errors={errors}
          className="mb-10 md:mb-[84px]"
        />

        <div className="mx-auto mb-[50px] grid w-full gap-x-8 gap-y-10 md:gap-y-[86px] xl:grid-cols-2 notXl:max-w-[608px]">
          <FormTextArea
            errors={errors}
            name="motive"
            label="Чому Ви найкращий кандидат? Що Вас мотивує?"
            register={register}
            // className={` ${type === 'fullstack' && 'h-[356px]'}`}
          />

          <div className="flex flex-col gap-y-3 self-end">
            <Input
              label="Посилання на резюме (Google Drive, Dropbox)"
              name="resume"
              type="text"
              register={register}
              placeholder=""
              errors={errors}
            />

            <Input
              label="Посилання на linkedin"
              name="linkedin"
              type="text"
              register={register}
              placeholder=""
              errors={errors}
            />

            {type === 'frontend' && (
              <Input
                label="Посилання на github"
                name="github"
                type="text"
                register={register}
                errors={errors}
              />
            )}

            {type === 'backend' && (
              <Input
                label="Посилання на github"
                name="github"
                type="text"
                register={register}
                errors={errors}
              />
            )}

            {type === 'qa' && (
              <Input
                label="Посилання на тестову документацію (за наявності)"
                name="github"
                type="text"
                register={register}
                errors={errors}
              />
            )}

            {type === 'pm' && (
              <Input
                label="Посилання на проєктну документацію (за наявності)"
                name="github"
                type="text"
                register={register}
                errors={errors}
              />
            )}

            {type === 'design' && (
              <Input
                label="Посилання на портфоліо"
                name="github"
                type="text"
                register={register}
                errors={errors}
              />
            )}

            <label
              className="grid cursor-pointer grid-cols-[min-content,1fr] items-center gap-x-6"
              onChange={handleChange}
            >
              <input
                type="checkbox"
                className="custom-checkbox sr-only"
                {...register('consent')}
              />

              {checked ? (
                <Check className="h-4 w-4" />
              ) : (
                <span
                  className={`${
                    errors.consent ? 'border-red' : 'border-gray_light'
                  } h-4 w-4 rounded border `}
                />
              )}

              <span className="self-end text-xs text-gray_light">
                Надсиланням даних за цією заявкою Ви надаєте свою згоду на збір
                та обробку наданих Вами персональних даних для використання
                SoftRyzen Internship для письмового чи усного спілкування з
                Вами.
              </span>
            </label>
          </div>
        </div>

        <div className="mx-auto w-[212px]">
          <Button variant="primary">Відправити заявку</Button>
        </div>
      </form>
    </>
  );
};
