import { Icons } from '@/components/icons';
import clsx from 'clsx';

type CheckboxAllProps = {
  maxItem: number;
  checkedItems: string[];
  onCheckAll: () => void;
  onClearAll: () => void;
};

export function CheckboxAll({ checkedItems, maxItem, onCheckAll, onClearAll }: CheckboxAllProps) {
  return (
    <div className="flex items-center">
      {/** Check all */}
      <div className="flex items-center gap-3 mr-3 w-fit" onClick={onCheckAll}>
        <div
          className={clsx(
            'w-6 h-6 border border-solid border-gray-400 rounded cursor-pointer flex items-center justify-center',
            {
              'bg-success-200': checkedItems.length > 0,
              'bg-white': checkedItems.length <= 0
            }
          )}
        >
          {checkedItems.length < maxItem ? (
            <div className="w-3 h-[3px] rounded-full bg-white"></div>
          ) : (
            <Icons name="check-line" className="text-white" />
          )}
        </div>
        <p className="font-bold text-sm cursor-pointer">Select all</p>
      </div>

      {/** Clear all */}
      <div className="flex items-center cursor-pointer w-fit" onClick={onClearAll}>
        <Icons name="close-line" className="text-primary !w-5 !h-5" />
        <p className="text-sm text-primary">Clear all</p>
      </div>
    </div>
  );
}
