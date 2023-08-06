import clsx from 'clsx';
import { IconProps } from '.';

export default function ArrowUp({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.66699 7.99984V13.3332H7.33366V7.99984L2.66699 7.99984L8.00033 2.6665L13.3337 7.99984H8.66699Z"
        fill="currentColor"
      />
    </svg>
  );
}
