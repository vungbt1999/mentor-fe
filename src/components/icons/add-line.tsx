import clsx from 'clsx';
import { IconProps } from '.';

export default function AddIcon({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16699 9.1665V4.1665H10.8337V9.1665H15.8337V10.8332H10.8337V15.8332H9.16699V10.8332H4.16699V9.1665H9.16699Z"
        fill="currentColor"
      />
    </svg>
  );
}
