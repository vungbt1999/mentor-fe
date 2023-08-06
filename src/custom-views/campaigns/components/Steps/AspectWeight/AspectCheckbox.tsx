import { CheckboxForm } from '@/components/forms';
import { IAspectWeight } from '@/types/common';
import { Control } from 'react-hook-form';

type AspectCheckboxProps = {
  items: IAspectWeight[];
  control: Control<{ targets: string[] }, any>;
};

export default function AspectCheckbox({ items, control }: AspectCheckboxProps) {
  return (
    <>
      {items.map((item) => {
        return (
          <div
            key={item.aspect_id}
            className="px-5 py-5 flex items-center justify-between hover:bg-gray-1 border-t border-solid"
          >
            <CheckboxForm
              control={control}
              name="targets"
              label={item.display_name}
              value={item.aspect_id}
            />
            <p className="text-primary font-bold text-sm leading-[22px]">{item.score}%</p>
          </div>
        );
      })}
    </>
  );
}
