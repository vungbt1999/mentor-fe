import clsx from 'clsx';
import { IconProps } from '.';

export default function MinusIcon({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.16699 9.1665H15.8337V10.8332H4.16699V9.1665Z" fill="currentColor" />
    </svg>
  );
}
