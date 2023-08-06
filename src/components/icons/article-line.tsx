import clsx from 'clsx';
import { IconProps } from '.';

export default function ArticleIcon({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 22H4.5C3.94772 22 3.5 21.5523 3.5 21V3C3.5 2.44772 3.94772 2 4.5 2H20.5C21.0523 2 21.5 2.44772 21.5 3V21C21.5 21.5523 21.0523 22 20.5 22ZM19.5 20V4H5.5V20H19.5ZM7.5 6H11.5V10H7.5V6ZM7.5 12H17.5V14H7.5V12ZM7.5 16H17.5V18H7.5V16ZM13.5 7H17.5V9H13.5V7Z"
        fill="currentColor"
      />
    </svg>
  );
}
