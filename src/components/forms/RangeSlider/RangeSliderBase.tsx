import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface IRangeSliderBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'md' | 'sm' | 'xs';
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'success';
}

export function RangeSliderBase({
  size = 'md',
  color = 'default',
  className,
  ...reset
}: IRangeSliderBaseProps) {
  return (
    <div className={clsx('range-slider', className)}>
      {/* <div className="relative w-full">
        <span className="absolute h-10 w-10 transform translate-x[-70%] scale-100 font-medium -top-10 z-10 text-base-content origin-bottom transition-all ease-in-out duration-300">
          100
        </span>
      </div> */}
      <div className="flex items-center justify-center h-full relative">
        <div className="absolute text-lg text-primary font-bold -left-5">0</div>
        <input
          type="range"
          min="10"
          max="200"
          defaultValue="100"
          className="appearance-none w-full h-1 bg-primary outline-none border-none z-10 rounded"
          {...reset}
        />
        <div className="absolute text-lg text-primary font-bold value -right-10">200</div>
      </div>
    </div>
  );
}
