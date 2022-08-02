import { DateFr, DateFrHrWithTime } from '../DateToFrench';
export const dateFormatter = (cell: any, row: any) => {
  return <div>{DateFrHrWithTime(cell)} </div>;
};

export const dateFormatterNoTime = (cell: any, row: any) => {
  return <div>{DateFr(cell)} </div>;
};
