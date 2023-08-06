import { CreateEditProvider } from '@/custom-views/campaigns/components/CreateEditContext';
import CampaignCreateEdit from '../campaigns/add/components/CampaignAdd';

export default function CoursesPage() {
  return (
    <CreateEditProvider>
      <CampaignCreateEdit />
    </CreateEditProvider>
  );
}
