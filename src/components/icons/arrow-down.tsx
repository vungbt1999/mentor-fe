import clsx from 'clsx';
import { IconProps } from '.';

export default function ArrowDown({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.58301 7.00016H11.6663L6.99967 11.6668L2.33301 7.00016H6.41634V2.3335H7.58301V7.00016Z"
        fill="currentColor"
      />
    </svg>
  );
}
