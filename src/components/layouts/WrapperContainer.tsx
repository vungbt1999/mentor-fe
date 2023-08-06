import { ReactNode } from 'react';
import { IconName, Icons } from '@/components/icons';
import { Button } from '@mui/material';
import Link from 'next/link';

type ActionItemType = {
  iconLeft?: IconName;
  iconRight?: IconName;
  label: string;
  href?: string;
  onClick?: () => void;
};

type WrapperContainerProps = {
  children: JSX.Element | ReactNode;
  title?: string;
  actions?: {
    contained?: ActionItemType;
    outlined?: ActionItemType;
  };
};

export function WrapperContainer({ children, title, actions }: WrapperContainerProps) {
  const actionKeys = actions ? Object.keys(actions) : [];

  return (
    <div className="bg-white p-5 rounded-md border border-solid border-gray-400">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{title}</p>
        <div className="flex items-center gap-3">
          {actionKeys.length > 0 &&
            actions &&
            actionKeys.map((actionKey) => {
              const actionValues: ActionItemType = (actions as any)[actionKey];
              const href = actionValues.href;

              return (
                <div key={actionKey}>
                  {!href ? (
                    <ButtonCustom
                      item={actionValues}
                      variant={actionKey as 'text' | 'outlined' | 'contained'}
                    />
                  ) : (
                    <Link href={href}>
                      <ButtonCustom
                        item={actionValues}
                        variant={actionKey as 'text' | 'outlined' | 'contained'}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      {children}
    </div>
  );
}

const ButtonCustom = ({
  item,
  variant
}: {
  item: ActionItemType;
  variant: 'text' | 'outlined' | 'contained';
}) => {
  return (
    <Button
      variant={variant}
      onClick={item.onClick}
      startIcon={item.iconLeft && <Icons className="!w-5 !h-5" name={item?.iconLeft} />}
      endIcon={item.iconRight && <Icons className="!w-5 !h-5" name={item?.iconRight} />}
      size="small"
    >
      {item.label}
    </Button>
  );
};
