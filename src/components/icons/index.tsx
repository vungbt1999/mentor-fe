import { CSSProperties, FC } from 'react';
import NotificationIcon from './notification';
import LocaleIcon from './locale';
import HomeIcon from './home-line';
import TargetIcon from './target-line';
import ArticleIcon from './article-line';
import StarIcon from './star-line';
import ChartIcon from './chart-line';
import SettingIcon from './setting-line';
import LessonIcon from './lesson-line';
import EditIcon from './edit-line';
import BackIcon from './back';
import InformationIcon from './information';
import CalendarIcon from './calendar';
import AddIcon from './add-line';
import HistoryIcon from './history-line';
import ChevronDown from './chevron-down';
import ChevronLeft from './chevron-left';
import ChevronRight from './chevron-right';

export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

export type IconName =
  | 'notification'
  | 'locale'
  | 'home-line'
  | 'target-line'
  | 'article-line'
  | 'star-line'
  | 'chart-line'
  | 'setting-line'
  | 'lesson-line'
  | 'edit-line'
  | 'back'
  | 'information'
  | 'calender'
  | 'add-line'
  | 'history-line'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right';

export type IconsType = Record<IconName, Icon>;

export const IconsRender: IconsType = {
  notification: (props: IconProps) => {
    return <NotificationIcon {...props} />;
  },
  locale: (props: IconProps) => {
    return <LocaleIcon {...props} />;
  },
  'home-line': (props: IconProps) => {
    return <HomeIcon {...props} />;
  },
  'target-line': (props: IconProps) => {
    return <TargetIcon {...props} />;
  },
  'article-line': (props: IconProps) => {
    return <ArticleIcon {...props} />;
  },
  'star-line': (props: IconProps) => {
    return <StarIcon {...props} />;
  },
  'chart-line': (props: IconProps) => {
    return <ChartIcon {...props} />;
  },
  'setting-line': (props: IconProps) => {
    return <SettingIcon {...props} />;
  },
  'lesson-line': (props: IconProps) => {
    return <LessonIcon {...props} />;
  },
  'edit-line': (props: IconProps) => {
    return <EditIcon {...props} />;
  },
  back: (props: IconProps) => {
    return <BackIcon {...props} />;
  },
  information: (props: IconProps) => {
    return <InformationIcon {...props} />;
  },
  calender: (props: IconProps) => {
    return <CalendarIcon {...props} />;
  },
  'add-line': (props: IconProps) => {
    return <AddIcon {...props} />;
  },
  'history-line': (props: IconProps) => {
    return <HistoryIcon {...props} />;
  },
  'chevron-down': (props: IconProps) => {
    return <ChevronDown {...props} />;
  },
  'chevron-left': (props: IconProps) => {
    return <ChevronLeft {...props} />;
  },
  'chevron-right': (props: IconProps) => {
    return <ChevronRight {...props} />;
  }
};

export const Icons = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = IconsRender[name];

  return <Icon {...reset} />;
};
