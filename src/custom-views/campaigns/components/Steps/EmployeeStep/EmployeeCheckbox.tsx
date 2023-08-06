import { Avatar } from '@/components/common';
import { CheckboxForm } from '@/components/forms';
import { IUser } from '@/types/common';
import { Control } from 'react-hook-form';

type EmployeeCheckboxProps = {
  employees: IUser[];
  control: Control<{ employeeIds: string[] }, any>;
};

export default function EmployeeCheckbox({ employees, control }: EmployeeCheckboxProps) {
  return (
    <>
      {employees.map((employee) => {
        const score = employee.score;

        return (
          <div
            key={employee.id}
            className="px-5 py-5 flex items-center justify-between hover:bg-gray-600 border-t border-solid"
          >
            <div className="flex items-center gap-3">
              <CheckboxForm control={control} name="employeeIds" value={employee.id} />
              <label
                htmlFor={`employeeIds_${employee.id}`}
                className="flex items-center cursor-pointer"
              >
                <Avatar name={employee.name} avatar={employee.avatar} />
                <div className="text-sm font-bold ml-3">
                  <p className="text-body">{`${employee.name}`}</p>
                  <p className="text-gray-200 font-normal leading-4">{employee.email}</p>
                </div>
              </label>
            </div>
            <p className="bg-gray-400 text-body font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">
              {score}
            </p>
          </div>
        );
      })}
    </>
  );
}
