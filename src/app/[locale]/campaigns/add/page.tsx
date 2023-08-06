import { CreateEditProvider } from '@/custom-views/campaigns/components/CreateEditContext';
import CampaignCreateEdit from './components/CampaignAdd';

export default function CampaignAddPage() {
  return (
    <CreateEditProvider>
      <CampaignCreateEdit />
    </CreateEditProvider>
  );
}
