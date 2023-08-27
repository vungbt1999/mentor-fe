import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface ICheckboxBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'md' | 'sm' | 'xs';
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'success';
}
export function CheckboxBase({ size = 'md', color, className, ...reset }: ICheckboxBaseProps) {
  return (
    <input
      type="checkbox"
      className={clsx(
        'checkbox rounded',
        {
          // size
          'checkbox-md': size === 'md',
          'checkbox-sm': size === 'sm',
          'checkbox-xs': size === 'xs',

          // color
          'checkbox-primary': color === 'primary',
          'checkbox-secondary': color === 'secondary',
          'checkbox-accent': color === 'accent',
          'checkbox-success': color === 'success'
        },
        className
      )}
      {...reset}
    />
  );
}
