import { mockEmployees } from '@/mocks';
import { IUser } from '@/types/common';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormStepActionType, useFormStepCampaign } from '../../FormStepContext';
import { CheckboxAll } from '@/components/common';
import EmployeeCheckbox from './EmployeeCheckbox';
import FooterStep from '../FooterStep';

export default function EmployeeStep() {
  const {
    state: { steps, stepIndex, compiledForm },
    dispatch
  } = useFormStepCampaign();

  const listEmployee = useMemo(() => {
    if (!mockEmployees || Object.keys(mockEmployees).length <= 0) return [];

    return Object.keys(mockEmployees).reduce((acc: IUser[], item) => {
      const employee = (mockEmployees as any)[item];
      acc.push({
        ...employee
      });

      return acc;
    }, []);
  }, []);

  const campaignEmployee = z
    .object({
      employeeIds: z.string().array().min(1, 'Nhân sự không được để trống.')
    })
    .required();

  const defaultValues = {
    employeeIds: []
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
    setValue
  } = useForm<{ employeeIds: string[] }>({
    resolver: zodResolver(campaignEmployee),
    mode: 'all',
    defaultValues: { ...defaultValues }
  });

  const employeeIds = watch('employeeIds') ?? [];

  useEffect(() => {
    if (compiledForm) {
      setValue('employeeIds', compiledForm?.employeeIds ?? []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compiledForm]);

  const onCheckAll = () => {
    const employeeIdsChecked =
      employeeIds.length === listEmployee.length
        ? []
        : listEmployee.map((employee) => String(employee.id));
    setValue('employeeIds', employeeIdsChecked);
  };

  const onSubmit = (values: { employeeIds: string[] }) => {
    dispatch({ type: FormStepActionType.NEXT_STEP, payload: { data: values } });
  };

  return (
    <form>
      <div className="px-5">
        <div className="flex items-center justify-between px-5 py-3 bg-gray-600">
          <CheckboxAll
            maxItem={listEmployee.length}
            checkedItems={employeeIds}
            onCheckAll={onCheckAll}
            onClearAll={() => setValue('employeeIds', [])}
          />

          <p className="font-bold text-sm">Thứ hạng hiện tại</p>
        </div>

        <EmployeeCheckbox employees={listEmployee} control={control} />

        {errors['employeeIds']?.message && (
          <p className="ml-[14px] text-danger-100 text-xs">
            {errors['employeeIds'].message as string}
          </p>
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
            payload: { data: { employeeIds: employeeIds } }
          })
        }
      />
    </form>
  );
}
