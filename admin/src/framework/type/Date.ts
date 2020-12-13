import moment from 'moment';

import ITypeConverter from './ITypeConverter';

class DateConverter extends ITypeConverter {
  toClientType(value: any) {
    return moment(value);
  }
  toServerType(value: any) {
    return value.toISOString();
  }
}
export default DateConverter;
