import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface IToggleBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'md' | 'sm' | 'xs';
}
export function ToggleBase({ size = 'md', className, ...reset }: IToggleBaseProps) {
  return (
    <input
      {...reset}
      type="checkbox"
      className={clsx('toggle', {
        // size
        'toggle-md': size === 'md',
        'toggle-sm': size === 'sm',
        'toggle-xs': size === 'xs'
      })}
    />
  );
}
