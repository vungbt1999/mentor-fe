import { SxProps, Theme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormStepActionType, useFormStepCampaign } from '../FormStepContext';
import { InputTextForm, TextareaForm } from '@/components/forms';
import FooterStep from './FooterStep';

export default function CampaignInfoStep() {
  const {
    state: { steps, stepIndex, compiledForm },
    dispatch
  } = useFormStepCampaign();

  const campaignInfo = z.object({
    name: z
      .string({
        required_error: 'Tên chiến dịch không được để trống.',
        invalid_type_error: 'Tên chiến dịch không được để trống.'
      })
      .nonempty('Tên chiến dịch không được để trống.'),
    description: z
      .string({
        required_error: 'Mô tả chiến dịch không được để trống.',
        invalid_type_error: 'Mô tả chiến dịch không được để trống.'
      })
      .nonempty('Mô tả chiến dịch không được để trống.')
  });

  const defaultValues = {
    name: '',
    description: ''
  };

  const { control, handleSubmit, watch, setValue } = useForm({
    resolver: zodResolver(campaignInfo),
    mode: 'all',
    defaultValues: { ...defaultValues }
  });
  const formData = watch();

  useEffect(() => {
    if (compiledForm) {
      setValue('name', compiledForm?.name ?? '');
      setValue('description', compiledForm?.description ?? '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compiledForm]);

  const onSubmit = (values: { name: string; description: string }) => {
    dispatch({ type: FormStepActionType.NEXT_STEP, payload: { data: values } });
  };

  return (
    <form>
      <div className="px-5">
        <label htmlFor="name" className="mb-1 text-sm font-bold text-body block w-fit outline-none">
          Tên chiến dịch:
        </label>
        <InputTextForm name="name" control={control} placeholder="Tên chiến dịch" />
        <div className="mt-5">
          <TextareaForm name="description" label="Mô tả" control={control} />
        </div>
      </div>
      <FooterStep
        className="mt-5 rounded-bl-lg rounded-br-lg"
        stepIndex={stepIndex}
        maxStep={steps.length}
        onNext={handleSubmit(onSubmit)}
        onPrevious={() =>
          dispatch({ type: FormStepActionType.PREVIOUS_STEP, payload: { data: formData } })
        }
      />
    </form>
  );
}
