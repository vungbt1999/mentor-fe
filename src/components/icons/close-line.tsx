import clsx from 'clsx';
import { IconProps } from '.';

export default function CloseLine({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99962 8.82178L14.1246 4.69678L15.303 5.87511L11.178 10.0001L15.303 14.1251L14.1246 15.3034L9.99962 11.1784L5.87462 15.3034L4.69629 14.1251L8.82129 10.0001L4.69629 5.87511L5.87462 4.69678L9.99962 8.82178Z"
        fill="currentColor"
      />
    </svg>
  );
}
