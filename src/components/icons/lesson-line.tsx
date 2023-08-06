import clsx from 'clsx';
import { IconProps } from '.';

export default function LessonIcon({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 20V4H7V11L9.5 9.5L12 11V4H17V11.08C17.33 11.03 17.66 11 18 11C18.34 11 18.67 11.03 19 11.08V4C19 2.9 18.1 2 17 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.9 22 5 22H12.26C11.84 21.4 11.51 20.72 11.29 20H5ZM18 13C15.24 13 13 15.24 13 18C13 20.76 15.24 23 18 23C20.76 23 23 20.76 23 18C23 15.24 20.76 13 18 13ZM16.75 20.5V15.5L20.75 18L16.75 20.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
