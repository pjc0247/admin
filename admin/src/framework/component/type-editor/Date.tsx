import React from 'react';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';

type DateProps = {
  value: any;
  onChange: (v: any) => void;
};
export const Date = ({
  value,
  onChange,
  ...props
}: DateProps) => {
  return (
    <MuiPickersUtilsProvider
      libInstance={moment}
      utils={MomentUtils}
      locale={'kr'}
    >
      <DateTimePicker
        value={value}
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  );
};
export default Date;
