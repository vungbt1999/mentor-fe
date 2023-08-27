import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface IRadioBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'md' | 'sm' | 'xs';
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'success';
}

export function RadioBase({ size = 'md', color, className, ...reset }: IRadioBaseProps) {
  return (
    <input
      type="radio"
      name="radio-5"
      className={clsx(
        'radio',
        {
          // size
          'radio-md': size === 'md',
          'radio-sm': size === 'sm',
          'radio-xs': size === 'xs',

          // color
          'radio-primary': color === 'primary',
          'radio-secondary': color === 'secondary',
          'radio-accent': color === 'accent',
          'radio-success': color === 'success'
        },
        className
      )}
      {...reset}
    />
  );
}
