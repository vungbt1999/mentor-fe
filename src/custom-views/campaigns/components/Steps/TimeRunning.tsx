import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodErrorMap } from 'zod';
import { FormStepActionType, useFormStepCampaign } from '../FormStepContext';
import { InputNumberForm, InputTextForm, RangeSliderForm } from '@/components/forms';
import FooterStep from './FooterStep';

const dateErrorMap: ZodErrorMap = (error, ctx) => {
  const path = error.path;
  const fieldName = path[0];

  switch (error.code) {
    case z.ZodIssueCode.invalid_date:
      if (fieldName === 'startTime') return { message: 'Ngày bắt đầu không tồn tại.' };

      return { message: 'Ngày kết thúc không tồn tại.' };
  }

  return { message: ctx.defaultError };
};

export default function TimeRunningStep() {
  const {
    state: { steps, stepIndex, compiledForm },
    dispatch
  } = useFormStepCampaign();

  const endTimeDefault = new Date();
  endTimeDefault.setDate(endTimeDefault.getDate() + 1);

  const campaignTimeRunning = z.object({
    startTime: z.date({
      errorMap: dateErrorMap
    }),
    endTime: z.date({
      errorMap: dateErrorMap
    }),
    numberOfQuestion: z
      .number({
        required_error: "Số lượng câu hỏi phải > 0.'",
        invalid_type_error: "Số lượng câu hỏi phải > 0.'"
      })
      .min(1, 'Số lượng câu hỏi phải > 0.'),
    threshold: z.number()
  });

  const defaultValues = {
    startTime: new Date(),
    endTime: endTimeDefault,
    numberOfQuestion: 1,
    threshold: 0
  };

  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    setError,
    getValues,
    watch,
    formState: {}
  } = useForm({
    resolver: zodResolver(campaignTimeRunning),
    mode: 'all',
    defaultValues: { ...defaultValues }
  });
  const formData = watch();

  useEffect(() => {
    if (compiledForm) {
      setValue('startTime', compiledForm?.startTime ?? new Date());
      setValue('endTime', compiledForm?.endTime ?? endTimeDefault);
      setValue('numberOfQuestion', compiledForm?.numberOfQuestion ?? 1);
      setValue('threshold', compiledForm?.threshold ?? 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compiledForm]);

  const onChangeStartTime = (starTime: Date | null) => {
    if (!starTime) return;

    const endTime = new Date(starTime);
    endTime.setDate(endTime.getDate() + 1);
    setValue('endTime', endTime);
    clearErrors('endTime');

    //validation starTime is actually smaller than endTime will remove error
    if (starTime < endTime) {
      clearErrors('startTime');
    } else {
      setError('startTime', { message: 'Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc' });
    }
  };

  const onSubmit = (values: {
    startTime: Date;
    endTime: Date;
    numberOfQuestion: number;
    threshold: number;
  }) => {
    dispatch({ type: FormStepActionType.NEXT_STEP, payload: { data: values } });
  };

  return (
    <form>
      <div className="px-5">
        <div className="flex items-end gap-5">
          <div className="flex-1">
            <InputTextForm
              // disablePast
              name="startTime"
              control={control}
              label="Thời gian chạy campaign"
              // labelStyle='custom'
              // haveErrors
              // onChange={onChangeStartTime}
            />
          </div>

          <div className="flex-1">
            <InputTextForm
              // disablePast
              // shouldDisableDate={date => date < new Date(getValues('startTime'))}
              name="endTime"
              control={control}
              // haveErrors
              // labelStyle='custom'
            />
          </div>
        </div>

        <div className="mt-1">
          <InputNumberForm
            name="numberOfQuestion"
            label="Số lượng câu hỏi"
            control={control}
            min={1}
          />
        </div>

        <div className="mt-5">
          <RangeSliderForm
            name="threshold"
            control={control}
            label="Ngưỡng đạt kỳ vọng"
            setValue={(_, value) => setValue('threshold', value)}
          />
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
