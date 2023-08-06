import clsx from 'clsx';
import { IconProps } from '.';

export default function ChevronDown({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 13.8335L5 8.8335H15L10 13.8335Z" fill="currentColor" />
    </svg>
  );
}
