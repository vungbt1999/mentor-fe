import clsx from 'clsx';
import { IconProps } from '.';

export default function ArrowRight({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9768 9.16664L9.50683 4.69664L10.6852 3.51831L17.1668 9.99998L10.6852 16.4816L9.50683 15.3033L13.9768 10.8333H3.8335V9.16664H13.9768Z"
        fill="currentColor"
      />
    </svg>
  );
}
