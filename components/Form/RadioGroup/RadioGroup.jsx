import PropTypes from 'prop-types';
import { useState } from 'react';
import { Radio } from '..';
import { paragraph } from './RadioGroup.module.css';

const english = [
  'Beginner/Elementary (А1)',
  'Intermediate (В1)',
  'Advanced (С1)',
  'Pre-Intermediate (А2)',
  'Upper Intermediate (В2)',
  'Proficiency (С2)',
];

export const RadioGroup = ({ register, errors, className }) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = e => {
    setValue(e.target.value);
    setChecked(true);
  };
  return (
    <div className={className}>
      <p className={paragraph}>Рівень англійської</p>
      <div
        className={`grid gap-y-9 whitespace-nowrap rounded-lg border-2 border-primary bg-primary px-4 py-9 text-white_light  shadow-header md:grid-cols-2 md:gap-x-[128px] md:px-12 xl:grid-cols-3 xl:gap-x-[170px] xl:gap-y-8 xl:px-[106px] xl:py-[38px] ${
          errors?.language && 'border-red'
        }`}
      >
        {english.map(name => (
          <Radio
            key={name}
            name={name}
            checked={checked}
            value={value}
            handleClick={handleClick}
            register={register}
          />
        ))}
      </div>

      <span className="text-[10px] text-red">
        {errors?.language && errors.language?.message}
      </span>
    </div>
  );
};
RadioGroup.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
};
