import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';

interface IInputBaseProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: 'md' | 'sm' | 'xs';
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'success';
}

export function TextareaBase({
  size = 'md',
  color = 'default',
  placeholder,
  className
}: IInputBaseProps) {
  return (
    <textarea
      placeholder={placeholder}
      className={clsx(
        'textarea border border-solid w-full outline-none focus:outline-none rounded resize-none',
        {
          // size
          'textarea-md': size === 'md',
          'textarea-sm': size === 'sm',
          'textarea-xs': size === 'xs',

          // color
          'border-base-content hover:border-primary transition-all placeholder:text-gray-300':
            color === 'default',
          'textarea-primary border-primary bg-primary bg-opacity-20 placeholder:text-gray-300':
            color === 'primary',
          'textarea-secondary bg-secondary bg-opacity-20 placeholder:text-gray-300':
            color === 'secondary',
          'textarea-accent bg-accent bg-opacity-20 placeholder:text-gray-300': color === 'accent',
          'textarea-success bg-success bg-opacity-20 placeholder:text-gray-300': color === 'success'
        },
        className
      )}
    />
  );
}
