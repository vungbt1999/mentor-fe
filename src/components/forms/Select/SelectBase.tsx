import { Icons } from '@/components/icons';
import clsx from 'clsx';
import { SelectHTMLAttributes } from 'react';

export type SelectOptionItem = {
  value: string;
  label: string;
};

interface ISelectBaseProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'md' | 'sm' | 'xs';
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'success';
  options: SelectOptionItem[];
}

export function SelectBase({
  size = 'md',
  color,
  options,
  placeholder,
  ...reset
}: ISelectBaseProps) {
  return (
    <label
      className={clsx(
        'inline-flex items-center w-fit border border-solid rounded hover:border-primary transition-all',
        {
          // color
          'select-primary border-primary bg-primary bg-opacity-20': color === 'primary',
          'select-secondary border-secondary bg-secondary bg-opacity-20': color === 'secondary',
          'select-accent border-accent bg-accent bg-opacity-20': color === 'accent',
          'select-success border-success bg-success bg-opacity-20': color === 'success'
        }
      )}
    >
      <select
        id="select-base"
        className={clsx(
          'select select-bordered appearance-none border-none focus:outline-none bg-transparent',
          {
            // size
            'select-md': size === 'md',
            'select-sm': size === 'sm',
            'select-xs': size === 'xs'
          }
        )}
        {...reset}
      >
        {placeholder && (
          <option value="default" disabled>
            {placeholder}
          </option>
        )}
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <Icons
        name="chevron-down"
        className={clsx('select-icon text-gray-300 mb-1 transition-all', {
          '!w-5 !h-5': size !== 'md'
        })}
      />
    </label>
  );
}
