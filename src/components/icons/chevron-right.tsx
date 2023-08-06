import clsx from 'clsx';
import { IconProps } from '.';

export default function ChevronRight({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 12.5L10 18.5V6.5L16 12.5Z" fill="currentColor" />
    </svg>
  );
}
