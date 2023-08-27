import clsx from 'clsx';
import { IconProps } from '.';

export default function Loading({ className }: IconProps) {
  return <span className={clsx(className, 'loading loading-spinner')}></span>;
}
