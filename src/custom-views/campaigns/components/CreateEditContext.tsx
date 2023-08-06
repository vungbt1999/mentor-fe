'use client';
import { useRouter } from 'next/navigation';
import { Dispatch, createContext, useContext, useReducer, useState } from 'react';
import { ICampaign } from '..';
import { FormStepProvider } from './FormStepContext';

type CreateEditContextProps = {
  children: JSX.Element | React.ReactNode;
};

export enum CampaignActionType {
  SET_MESSAGE_SUCCESS = 'SET_MESSAGE_SUCCESS',
  SAVE_CAMPAIGN = 'SAVE_CAMPAIGN',
  SET_DETAIL_CAMPAIGN = 'SET_DETAIL_CAMPAIGN'
}

type Action =
  | {
      type: CampaignActionType.SET_MESSAGE_SUCCESS;
      payload: { message?: string };
    }
  | {
      type: CampaignActionType.SAVE_CAMPAIGN;
      payload: { data?: any };
    };

type CreateEditContextType = {
  message?: string;
  campaign?: ICampaign;
};

const initContext: CreateEditContextType = {};

const CreateEditContext = createContext({ state: initContext } as {
  state: CreateEditContextType;
  dispatch: Dispatch<Action>;
});

export function CreateEditProvider({ children }: CreateEditContextProps) {
  const router = useRouter();

  const [campaignId] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSaveData = async (data: any) => {
    try {
      setLoading(true);
      if (campaignId) {
        // TODO: Edit here
      }

      // TODO: Create here
    } catch (errors) {
      setLoading(false);
    }
  };

  const reducer = (state: CreateEditContextType, action: Action): CreateEditContextType => {
    switch (action.type) {
      case CampaignActionType.SET_MESSAGE_SUCCESS:
        const payload = action.payload;

        return {
          ...state,
          message: payload?.message
        };

      case CampaignActionType.SAVE_CAMPAIGN:
        const formData = action.payload;
        onSaveData(formData.data);

        return state;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initContext as CreateEditContextType);

  return (
    <CreateEditContext.Provider value={{ state, dispatch }}>
      <FormStepProvider>{children}</FormStepProvider>
    </CreateEditContext.Provider>
  );
}

export const useCreateEditCampaign = () => useContext(CreateEditContext);
