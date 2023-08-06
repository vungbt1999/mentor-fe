import clsx from 'clsx';
import { IconProps } from '.';

export default function ChevronLeft({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 12.5L14 6.5V18.5L8 12.5Z" fill="currentColor" />
    </svg>
  );
}
