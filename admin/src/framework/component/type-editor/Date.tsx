import React from 'react';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
} from '@material-ui/pickers';
import { useFormikContext } from 'formik';

type DateProps = {
  name: string,
  value: any;
  onChange: (v: any) => void;
};
export const Date = ({
  name,
  value,
  onChange,
  ...props
}: DateProps) => {
  const {
    setFieldValue,
  } = useFormikContext();

  return (
    <MuiPickersUtilsProvider
      libInstance={moment}
      utils={MomentUtils}
    >
      <DateTimePicker
        value={value}
        onChange={(e) => setFieldValue(name, e)}
      />
    </MuiPickersUtilsProvider>
  );
};
export default Date;
