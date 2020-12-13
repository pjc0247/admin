import moment from 'moment';

import TypeSpec from 'spec/Type';
import ITypeConverter from './ITypeConverter';

export enum TimestampKind {
  Epoch = 'epoch',
  ISO = 'iso',
  SQL = 'sql',
};

class DateConverter extends ITypeConverter {
  toClientType(value: any) {
    return moment(value);
  }
  toServerType(value: any) {
    if (TypeSpec.timestamp === TimestampKind.ISO)
      return value.toISOString();
    else if (TypeSpec.timestamp === TimestampKind.SQL)
      return value.format("YYYY-MM-DD HH:mm:ss");
    else if (TypeSpec.timestamp === TimestampKind.Epoch)
      return value.unix();

    throw new Error('You must specify timestampKind or implement your own.');
  }
}
export default DateConverter;
