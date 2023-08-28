import { IconName, Icons } from '@/components/icons';
import clsx from 'clsx';
import { SelectHTMLAttributes } from 'react';

export type SelectOptionItem = {
  value: string | number;
  label: string;
};

interface ISelectBaseProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'md' | 'sm' | 'xs';
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'success';
  options: SelectOptionItem[];
  icon?: IconName;
  iconRotate?: boolean;
}

export function SelectBase({
  size = 'md',
  color,
  options,
  placeholder,
  icon = 'chevron-down',
  iconRotate = true,
  className,
  ...reset
}: ISelectBaseProps) {
  return (
    <label
      className={clsx(
        'custom-select inline-flex items-center justify-between w-fit border border-solid rounded hover:border-primary transition-all',
        {
          // color
          'select-primary border-primary bg-primary bg-opacity-20': color === 'primary',
          'select-secondary border-secondary bg-secondary bg-opacity-20': color === 'secondary',
          'select-accent border-accent bg-accent bg-opacity-20': color === 'accent',
          'select-success border-success bg-success bg-opacity-20': color === 'success'
        },
        className
      )}
    >
      <select
        id="select-base"
        className={clsx(
          'select select-bordered appearance-none border-none focus:!outline-none bg-transparent focus-visible:outline-none focus:border-none rounded flex-1',
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
            <option key={item.value} value={item.value} className="bg-base-100">
              {item.label}
            </option>
          );
        })}
      </select>
      <div
        className={clsx({
          'icon-select-wrap flex items-center justify-center bg-base-300 aspect-square rounded-tr rounded-br border-l border-solid border-base-content transition-all':
            !iconRotate,
          'h-12': size === 'md' && !iconRotate,
          'h-8': size === 'sm' && !iconRotate,
          'h-6': size === 'xs' && !iconRotate
        })}
      >
        <Icons
          name={icon}
          className={clsx('select-icon text-gray-300 transition-all', {
            '!w-5 !h-5': size !== 'md',
            'mb-1': size === 'md',
            '!rotate-0': !iconRotate
          })}
        />
      </div>
    </label>
  );
}
