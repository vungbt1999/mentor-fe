'use client';

import dynamic from 'next/dynamic';
import {
  Dispatch,
  ReactElement,
  ReactNode,
  createContext,
  createElement,
  useContext,
  useReducer
} from 'react';

const CampaignInfo = dynamic(() => import('./Steps/CampaignInfo'), { ssr: false });
const AspectWeight = dynamic(() => import('./Steps/AspectWeight'), { ssr: false });
const TimeRunning = dynamic(() => import('./Steps/TimeRunning'), { ssr: false });
const Employee = dynamic(() => import('./Steps/EmployeeStep'), { ssr: false });

export interface INewCampaignReq {
  id?: string;
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  numberOfQuestion: number;
  departmentId?: string;
  targets: string[];
  threshold: number;
  employeeIds: string[];
}

export interface IStepItem {
  title: string;
  component: ReactElement;
}

const STEPS: IStepItem[] = [
  { title: 'Chiến dịch', component: createElement(CampaignInfo) },
  { title: 'Mục tiêu', component: createElement(AspectWeight) },
  { title: 'Thời gian', component: createElement(TimeRunning) },
  { title: 'Nhân sự', component: createElement(Employee) }
];

export enum FormStepActionType {
  NEXT_STEP = 'NEXT_STEP',
  PREVIOUS_STEP = 'PREVIOUS_STEP',
  SET_CAMPAIGN_DETAIL = 'SET_CAMPAIGN_DETAIL'
}

type Action =
  | {
      type: FormStepActionType.NEXT_STEP;
      payload: { data: any };
    }
  | {
      type: FormStepActionType.PREVIOUS_STEP;
      payload: { data: any };
    }
  | {
      type: FormStepActionType.SET_CAMPAIGN_DETAIL;
      payload: { data: INewCampaignReq };
    };

type FormStepContextType = {
  stepIndex: number;
  steps: IStepItem[];
  compiledForm: any;
};

const initContext: FormStepContextType = {
  stepIndex: 0,
  steps: STEPS,
  compiledForm: {}
};

const FormStepContext = createContext({ state: initContext } as {
  state: FormStepContextType;
  dispatch: Dispatch<Action>;
});

type FormStepProviderProps = {
  children: JSX.Element | ReactNode;
};

export function FormStepProvider({ children }: FormStepProviderProps) {
  // useEffect(() => {
  //   if (campaign) {
  //     dispatch({ type: FormStepActionType.SET_CAMPAIGN_DETAIL, payload: { data: campaign } });
  //   }
  // }, [campaign]);

  const handleNextStep = (state: FormStepContextType, data: any) => {
    const stepIndex = state.stepIndex;

    if (stepIndex < STEPS.length - 1)
      return {
        ...state,
        stepIndex: stepIndex + 1,
        compiledForm: { ...state.compiledForm, ...data }
      };

    // TODO: call api create here
    return state;
  };

  const handlePrevStep = (state: FormStepContextType, data: any) => {
    const stepIndex = state.stepIndex;
    if (stepIndex > 0) {
      return {
        ...state,
        stepIndex: stepIndex - 1,
        compiledForm: { ...state.compiledForm, ...data }
      };
    }

    return state;
  };

  const reducer = (state: FormStepContextType, action: Action): FormStepContextType => {
    switch (action.type) {
      case FormStepActionType.NEXT_STEP:
        const nextPayload = action.payload;

        return handleNextStep(state, nextPayload.data);
      case FormStepActionType.PREVIOUS_STEP:
        const prePayload = action.payload;

        return handlePrevStep(state, prePayload.data);

      case FormStepActionType.SET_CAMPAIGN_DETAIL:
        const camDetailPayload = action.payload;

        return {
          ...state,
          compiledForm: camDetailPayload?.data
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initContext as FormStepContextType);

  return (
    <FormStepContext.Provider value={{ state, dispatch }}>{children}</FormStepContext.Provider>
  );
}

export const useFormStepCampaign = () => useContext(FormStepContext);
