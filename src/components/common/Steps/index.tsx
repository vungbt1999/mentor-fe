import clsx from 'clsx';
import { ReactElement } from 'react';

export interface IStepItem {
  title: string;
  component: ReactElement;
}

type StepsProps = {
  steps: IStepItem[];
  active: number;
  className?: string;
};

export function Steps({ steps, active, className }: StepsProps) {
  return (
    <div className={`${className} w-full flex items-center justify-between`}>
      {steps.map((item, index) => {
        const isActive = active === index;

        return (
          <div
            key={index}
            className={clsx(
              'flex-1 w-full px-5 py-3 font-bold flex items-center justify-center border border-solid first:border-r-0 transition-all',
              {
                'border-primary bg-gradient-to-r from-primary to-info-200 text-white': isActive,
                'border-gray-400 bg-gray-600 text-gray-100': !isActive
              }
            )}
          >
            <span
              className={`rounded-full mr-3 w-8 aspect-square flex items-center justify-center ${
                isActive ? 'bg-white text-primary' : 'bg-gray-100 text-white'
              }`}
            >
              {index + 1}
            </span>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
