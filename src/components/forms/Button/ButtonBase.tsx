import { IconName, Icons } from '@/components/icons';
import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode, useEffect } from 'react';

interface IButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'sm' | 'xs';
  buttonType?: 'default' | 'outline' | 'gradient';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
  iconLeft?: IconName;
  iconRight?: IconName;
}

export function ButtonBase({
  className,
  size = 'md',
  buttonType = 'default',
  iconLeft,
  iconRight,
  color = 'primary',
  ...reset
}: IButtonBaseProps) {
  return (
    <button
      className={clsx(
        className,
        'btn rounded',
        ` btn-${color}`,
        buttonType === 'gradient' ? `bg-gradient-to-l to-${color} from-secondary` : '',
        {
          'btn-outline': buttonType === 'outline',

          // size
          'btn-md': size === 'md',
          'btn-sm': size === 'sm',
          'btn-xs': size === 'xs',

          // color
          'btn-primary': color === 'primary' && buttonType !== 'gradient',
          'btn-secondary': color === 'secondary' && buttonType !== 'gradient',
          'btn-accent': color === 'accent' && buttonType !== 'gradient',

          // outline
          'bg-primary bg-opacity-20': color === 'primary' && buttonType === 'outline',
          'bg-secondary bg-opacity-20': color === 'secondary' && buttonType === 'outline',
          'bg-accent bg-opacity-20': color === 'accent' && buttonType === 'outline',

          // gradient
          'bg-gradient-to-l to-primary from-secondary':
            color === 'primary' && buttonType === 'gradient',
          'bg-gradient-to-l to-secondary from-primary':
            color === 'secondary' && buttonType === 'gradient',
          'bg-gradient-to-l to-accent from-secondary':
            color === 'accent' && buttonType === 'gradient'
        }
      )}
      {...reset}
    >
      {iconLeft && <IconButton size={size} name={iconLeft} />}
      Button
      {iconRight && <IconButton size={size} name={iconRight} />}
    </button>
  );
}

const IconButton = ({ name, size }: { name: IconName; size?: 'md' | 'sm' | 'xs' }) => {
  return (
    <Icons
      className={clsx({
        '!w-5 !h-5 mb-1': size === 'md',
        '!w-4 !h-4 mb-[0.125rem]': size !== 'md'
      })}
      name={name}
    />
  );
};
