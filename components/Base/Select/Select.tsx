import { FC, ChangeEvent } from 'react';

interface SelectFieldProps {
  name: string;
  value: string;
  options: string[];
  title: string;
  className: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectField: FC<SelectFieldProps> = ({
  name,
  value,
  options,
  title,
  className,
  onChange,
}) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    title={title}
    className={className}
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);
