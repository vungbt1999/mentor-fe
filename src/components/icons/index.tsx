import { CSSProperties, FC } from 'react';
import NotificationIcon from './notification';
import LocaleIcon from './locale';

export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

export type IconName = 'notification' | 'locale';

export type IconsType = Record<IconName, Icon>;

export const IconsRender: IconsType = {
  notification: (props: IconProps) => {
    return <NotificationIcon {...props} />;
  },
  locale: (props: IconProps) => {
    return <LocaleIcon {...props} />;
  }
};

export const Icons = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = IconsRender[name];

  return <Icon {...reset} />;
};
