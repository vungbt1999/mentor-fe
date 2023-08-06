import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { FormStepActionType, useFormStepCampaign } from '../../FormStepContext';
import { mockAspectWeight } from '@/mocks';
import { IAspectWeight } from '@/types/common';
import { CheckboxAll } from '@/components/common';
import AspectCheckbox from './AspectCheckbox';
import FooterStep from '../FooterStep';

export default function AspectWeightStep() {
  const {
    state: { steps, stepIndex, compiledForm },
    dispatch
  } = useFormStepCampaign();

  const campaignAspectWeight = z
    .object({
      targets: z.string().array().min(1, 'Mục tiêu chiến dịch không được để trống.')
    })
    .required();

  const defaultValues = {
    targets: []
  };

  const {
    control,
    watch,
    formState: { errors },
    setValue,
    handleSubmit
  } = useForm<{ targets: string[] }>({
    resolver: zodResolver(campaignAspectWeight),
    mode: 'all',
    defaultValues: { ...defaultValues }
  });

  const listAspectWeight = useMemo(() => {
    if (!mockAspectWeight || Object.keys(mockAspectWeight).length <= 0) return [];

    return Object.keys(mockAspectWeight).reduce((acc: IAspectWeight[], item) => {
      const aspectItem = (mockAspectWeight as any)[item];
      const thresHold = aspectItem?.thresh_hold ? `${aspectItem.thresh_hold}%` : '0%';

      acc.push({
        ...aspectItem,
        score: aspectItem?.score,
        thresh_hold: thresHold
      });

      return acc;
    }, []);
  }, []);

  const targets = watch('targets') ?? [];

  useEffect(() => {
    if (compiledForm) {
      setValue('targets', compiledForm?.targets ?? []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compiledForm]);

  const onCheckAll = () => {
    const targetChecked =
      targets.length === listAspectWeight.length
        ? []
        : listAspectWeight.map((aspectWeight) => String(aspectWeight.aspect_id));
    setValue('targets', targetChecked);
  };

  const onSubmit = (values: { targets: string[] }) => {
    dispatch({ type: FormStepActionType.NEXT_STEP, payload: { data: values } });
  };

  return (
    <form>
      <div className="px-5">
        <div className="flex items-center justify-between px-5 py-[10px] bg-gray-1">
          <CheckboxAll
            maxItem={listAspectWeight.length}
            checkedItems={targets}
            onCheckAll={onCheckAll}
            onClearAll={() => setValue('targets', [])}
          />

          <p className="font-bold text-sm leading-[22px]">Điểm</p>
        </div>

        <AspectCheckbox control={control} items={listAspectWeight} />
        {errors['targets']?.message && (
          <p className="ml-[14px] text-[#FF4C51] text-xs">{errors['targets'].message as string}</p>
        )}
      </div>

      <FooterStep
        className="mt-5 rounded-bl-lg rounded-br-lg"
        stepIndex={stepIndex}
        maxStep={steps.length}
        onNext={handleSubmit(onSubmit)}
        onPrevious={() =>
          dispatch({
            type: FormStepActionType.PREVIOUS_STEP,
            payload: { data: { targets: targets } }
          })
        }
      />
    </form>
  );
}
