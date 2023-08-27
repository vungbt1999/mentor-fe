import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface IInputBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'md' | 'sm' | 'xs';
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'success';
}

export function InputBase({
  size = 'md',
  color = 'default',
  placeholder,
  className
}: IInputBaseProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={clsx(
        'input border border-solid w-full outline-none focus:outline-none rounded',
        {
          // size
          'input-md': size === 'md',
          'input-sm': size === 'sm',
          'input-xs': size === 'xs',

          // color
          'border-base-content hover:border-primary transition-all placeholder:text-gray-300':
            color === 'default',
          'input-primary border-primary bg-primary bg-opacity-20 placeholder:text-gray-300':
            color === 'primary',
          'input-secondary bg-secondary bg-opacity-20 placeholder:text-gray-300':
            color === 'secondary',
          'input-accent bg-accent bg-opacity-20 placeholder:text-gray-300': color === 'accent',
          'input-success bg-success bg-opacity-20 placeholder:text-gray-300': color === 'success'
        },
        className
      )}
    />
  );
}
