import clsx from "clsx";

type ProcessProps = {
  process?: number;
};

export function Process({ process = 0 }: ProcessProps) {
  return (
    <div className="h-full w-full flex items-center">
      <div className="rounded-md relative bg-gray-400 h-fit w-full px-4 py-1 flex items-center justify-center">
        <span
          className={clsx('text-xs font-bold z-10', {
            'text-body':  process < 50,
            'text-white': process >= 50
          })}>
          {process}%
        </span>
        <div className={clsx('absolute top-0 left-0 right-0 bottom-0 rounded-md',{
          'bg-danger-100': process < 30,
          'bg-warn-default': process >= 30 && process < 50,
          'bg-primary': process >= 50,
          'bg-success-200': process > 90
        })} style={{ width: `${process}%`}} />
      </div>
    </div>
  );
}
