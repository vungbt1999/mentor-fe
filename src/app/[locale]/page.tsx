import {
  ButtonBase,
  CheckboxBase,
  InputBase,
  RadioBase,
  RangeSliderBase,
  SelectBase,
  SelectOptionItem,
  TextareaBase,
  ToggleBase
} from '@/components/forms';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  const options: SelectOptionItem[] = [
    { value: 'home', label: 'Home' },
    { value: 'campaign', label: 'campaign' },
    { value: 'target', label: 'Target' }
  ];
  return (
    <MainLayout>
      <ButtonBase iconLeft="add-line" iconRight="add-line" size="md" />
      <ButtonBase color="secondary" iconLeft="add-line" iconRight="add-line" size="sm" />
      <ButtonBase color="accent" iconLeft="add-line" iconRight="add-line" size="xs" />
      <br />
      <ButtonBase iconLeft="add-line" iconRight="add-line" buttonType="outline" size="md" />
      <ButtonBase
        iconLeft="add-line"
        iconRight="add-line"
        buttonType="outline"
        color="secondary"
        size="sm"
      />
      <ButtonBase
        iconLeft="add-line"
        iconRight="add-line"
        buttonType="outline"
        color="accent"
        size="xs"
      />

      <br />
      <ButtonBase iconLeft="add-line" iconRight="add-line" buttonType="gradient" size="md" />
      <ButtonBase
        iconLeft="add-line"
        iconRight="add-line"
        buttonType="gradient"
        color="secondary"
        size="sm"
      />
      <ButtonBase
        iconLeft="add-line"
        iconRight="add-line"
        buttonType="gradient"
        color="accent"
        size="xs"
      />
      <br />
      <ButtonBase iconLeft="loading" iconRight="loading" buttonType="gradient" size="md" />
      <ButtonBase
        iconLeft="loading"
        iconRight="loading"
        buttonType="gradient"
        color="secondary"
        size="sm"
      />
      <ButtonBase
        iconLeft="loading"
        iconRight="loading"
        buttonType="gradient"
        color="accent"
        size="xs"
      />
      <br />
      <ToggleBase />
      <ToggleBase size="sm" />
      <ToggleBase size="xs" />
      <br />
      <CheckboxBase />
      <CheckboxBase size="sm" />
      <CheckboxBase size="xs" />
      <CheckboxBase color="primary" size="xs" />
      <br />
      <RadioBase />
      <RadioBase size="sm" />
      <RadioBase size="xs" />
      <RadioBase color="primary" size="xs" />
      <br />
      <SelectBase options={options} />
      <SelectBase
        defaultValue="default"
        placeholder="Select placeholder..."
        options={options}
        size="sm"
      />
      <SelectBase options={options} size="xs" />
      <SelectBase options={options} color="primary" size="xs" />
      <SelectBase options={options} color="secondary" size="xs" />
      <SelectBase options={options} color="accent" size="xs" />
      <SelectBase options={options} color="success" size="xs" />
      <br />
      <InputBase className="mt-5" placeholder="Placeholder...." />
      <InputBase className="mt-5" placeholder="Placeholder...." size="sm" />
      <InputBase className="mt-5" placeholder="Placeholder...." size="xs" />
      <InputBase className="mt-5" placeholder="Placeholder...." color="primary" size="xs" />

      <br />
      <TextareaBase className="mt-5" placeholder="Placeholder...." />
      <TextareaBase className="mt-5" placeholder="Placeholder...." size="sm" />
      <TextareaBase className="mt-5" placeholder="Placeholder...." size="xs" />
      <TextareaBase className="mt-5" placeholder="Placeholder...." color="primary" size="xs" />
      <TextareaBase className="mt-5" placeholder="Placeholder...." color="secondary" size="xs" />

      <br />
      <RangeSliderBase className="mt-10" />
    </MainLayout>
  );
}
