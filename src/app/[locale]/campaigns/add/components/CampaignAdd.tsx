'use client';

import { Steps } from '@/components/common';
import { useFormStepCampaign } from '@/custom-views/campaigns/components/FormStepContext';

export default function CampaignCreateEdit() {
  const {
    state: { steps, stepIndex }
  } = useFormStepCampaign();

  return (
    <div className="bg-white border border-solid border-gray-2 rounded-10">
      <Steps className="p-5" steps={steps} active={stepIndex} />

      {/** Step Content */}
      {steps.length > stepIndex && steps[stepIndex]?.component}
    </div>
  );
}
