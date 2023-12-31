import clsx from 'clsx';
import { IconProps } from '.';

export default function HistoryIcon({ className, transform }: IconProps) {
  return (
    <svg
      className={clsx(className, 'w-6', 'w-6')}
      transform={transform}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0003 1.6665C14.6028 1.6665 18.3337 5.39734 18.3337 9.99984C18.3337 14.6023 14.6028 18.3332 10.0003 18.3332C5.39783 18.3332 1.66699 14.6023 1.66699 9.99984H3.33366C3.33366 13.6815 6.31866 16.6665 10.0003 16.6665C13.682 16.6665 16.667 13.6815 16.667 9.99984C16.667 6.31817 13.682 3.33317 10.0003 3.33317C7.70866 3.33317 5.68699 4.489 4.48783 6.24984H6.66699V7.9165H1.66699V2.9165H3.33366V4.99984C4.85366 2.97484 7.27449 1.6665 10.0003 1.6665ZM10.8337 5.83317V9.654L13.5362 12.3565L12.357 13.5357L9.16699 10.344V5.83317H10.8337Z"
        fill="currentColor"
      />
    </svg>
  );
}
