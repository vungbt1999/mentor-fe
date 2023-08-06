import clsx from 'clsx';
import { IconProps } from '.';

export default function StarIcon({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4999 18.26L5.44691 22.208L7.02191 14.28L1.08691 8.792L9.11391 7.84L12.4999 0.5L15.8859 7.84L23.9129 8.792L17.9779 14.28L19.5529 22.208L12.4999 18.26ZM12.4999 15.968L16.7469 18.345L15.7979 13.572L19.3709 10.267L14.5379 9.694L12.4999 5.275L10.4619 9.695L5.62891 10.267L9.20191 13.572L8.25291 18.345L12.4999 15.968Z"
        fill="currentColor"
      />
    </svg>
  );
}
