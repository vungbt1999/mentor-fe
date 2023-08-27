import clsx from 'clsx';
import { IconProps } from '.';

export default function ArrowLeft({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.0235 9.16664H17.1668V10.8333H7.0235L11.4935 15.3033L10.3152 16.4816L3.8335 9.99998L10.3152 3.51831L11.4935 4.69664L7.0235 9.16664Z"
        fill="currentColor"
      />
    </svg>
  );
}
