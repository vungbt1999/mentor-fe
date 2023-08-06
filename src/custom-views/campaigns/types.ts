export interface ICampaign {
  id?: string;
  name: string;
  description: string;
  fromDate: Date;
  toDate: Date;
  process: number;
  status: ECampaignStatus;
  reward: number;
  participateRate: number;
  passRate: number;
  employeeIds: string[];
  aspectWeightIds: { id: string; weight: number }[];
  numberOfQuestion: number;
  threshHold: number;
}

export interface CampaignReq {
  id?: string;
  name: string;
  description: string;
  fromDate: Date;
  toDate: Date;
  status: ECampaignStatus;
  employeeIds: string[];
  aspectWeightIds: string[];
  numberOfQuestion: number;
  threshHold: number;
}

export enum ECampaignStatus {
  WAITING = 'waiting',
  RUNNING = 'running',
  FINISH = 'finish'
}
