import { Icons } from '@/components/icons';
import { Button } from '@mui/material';

type FooterStepProps = {
  stepIndex: number;
  maxStep: number;
  className?: string;
  onNext: () => void;
  onPrevious: () => void;
};

export default function FooterStep({
  stepIndex,
  maxStep,
  className,
  onNext,
  onPrevious
}: FooterStepProps) {
  return (
    <div
      className={`flex items-center justify-center py-3 bg-gray-600 rounded-br-lg rounded-bl-lg gap-2 border-t border-solid border-gray-400 ${className}`}
    >
      <Button
        variant="outlined"
        className={`${stepIndex > 0 ? 'block' : 'hidden'}`}
        onClick={onPrevious}
        startIcon={<Icons name="arrow-down" className="!w-5 !h-5 rotate-90" />}
      >
        Quay lại
      </Button>

      <Button
        variant="outlined"
        className={`${stepIndex < maxStep - 1 ? 'block' : 'hidden'}`}
        onClick={onNext}
        endIcon={<Icons name="arrow-down" className="!w-5 !h-5 -rotate-90" />}
      >
        {stepIndex === maxStep - 1 ? 'Hoàn tất' : 'Tiếp theo'}
      </Button>
    </div>
  );
}
