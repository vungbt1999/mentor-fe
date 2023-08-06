import clsx from 'clsx';
import { IconProps } from '.';

export default function InformationIcon({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00016 14.6668C4.31816 14.6668 1.3335 11.6822 1.3335 8.00016C1.3335 4.31816 4.31816 1.3335 8.00016 1.3335C11.6822 1.3335 14.6668 4.31816 14.6668 8.00016C14.6668 11.6822 11.6822 14.6668 8.00016 14.6668ZM8.00016 13.3335C9.41465 13.3335 10.7712 12.7716 11.7714 11.7714C12.7716 10.7712 13.3335 9.41465 13.3335 8.00016C13.3335 6.58567 12.7716 5.22912 11.7714 4.22893C10.7712 3.22873 9.41465 2.66683 8.00016 2.66683C6.58567 2.66683 5.22912 3.22873 4.22893 4.22893C3.22873 5.22912 2.66683 6.58567 2.66683 8.00016C2.66683 9.41465 3.22873 10.7712 4.22893 11.7714C5.22912 12.7716 6.58567 13.3335 8.00016 13.3335ZM7.3335 4.66683H8.66683V6.00016H7.3335V4.66683ZM7.3335 7.3335H8.66683V11.3335H7.3335V7.3335Z"
        fill="currentColor"
      />
    </svg>
  );
}