import PropTypes from 'prop-types';
import { labelStyle, labelText } from './Input.module.css';

export const Input = ({
  label,
  name,
  register,
  className = '',
  errors,
  ...props
}) => {
  return (
    <label className={labelStyle}>
      <span className={labelText}>{label}</span>
      <input
        className={`border-1 mb-1 h-[44px] rounded border-primary bg-white px-4 py-2 font-sans text-sm text-gray_light caret-primary shadow-input placeholder:font-light placeholder:text-gray_light focus:border-primary ${
          errors[name] && 'border-red text-red'
        } ${className}`}
        {...register(name)}
        {...props}
      />

      <span className="text-[10px] leading-none text-red">
        {errors[name] && errors[name]?.message}
      </span>
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
};
