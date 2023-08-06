import moment from 'moment';

export enum FORMAT_DATE_PATTERN {
  DEFAULT = 'DD-MM-YYYY',
  MM_DD_YYYY = 'MM-DD-YYYY'
}

export const formatDate = (date: string | number | Date, format?: FORMAT_DATE_PATTERN) => {
  return moment(date).format(format ?? FORMAT_DATE_PATTERN.DEFAULT);
};
