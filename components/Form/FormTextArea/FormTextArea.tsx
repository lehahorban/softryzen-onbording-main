import { FormTextAreaProps } from './FormTextArea.props ';

export const FormTextArea = ({
  label,
  register,
  name,
  errors,
  className = '',
  ...props
}: FormTextAreaProps) => {
  return (
    <label
      className={`mx-auto grid w-full font-sans text-xl font-semibold sm:w-[443px] md:w-full md:text-[24px] xl:mx-0`}
    >
      <span className="mb-3 text-xl font-semibold text-dark md:mb-7 md:text-2xl">
        {label}
      </span>

      <textarea
        className={`border-1 h-[356px] resize-none rounded-lg border-primary bg-white p-6 text-sm font-thin text-gray_light caret-primary shadow-input placeholder:text-sm placeholder:font-light placeholder:text-gray_light focus:border-primary md:text-xl ${
          errors[name] && 'border-red text-red'
        } ${className}`}
        {...props}
        autoComplete="off"
        {...register(name)}
        rows="6"
        cols="30"
      />
      <span className="mt-1 text-[10px] leading-tight text-red">
        {errors[name] && errors[name]?.message}
      </span>
    </label>
  );
};
