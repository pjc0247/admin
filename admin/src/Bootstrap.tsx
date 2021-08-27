import 'moment/locale/ko';
import moment from 'moment';

import { registerRenderer } from 'framework/model/renderer';
import { registerEditor } from 'framework/model/editor';
import { registerTypeConverter } from 'framework/type/converter';

/*  Write your model imports here:
 */
import 'app/model/user';

/*  Declare your custom type renderers here:
 */
registerRenderer('Date', require('framework/component/type-renderer/Date').Date);
registerRenderer('string', require('framework/component/type-renderer/String').String);
registerRenderer('number', require('framework/component/type-renderer/Number').Number);
registerRenderer('Rating', require('framework/component/type-renderer/Rating').Rating);

registerEditor('File', require('framework/component/type-editor/File').File);
registerEditor('Date', require('framework/component/type-editor/Date').Date);
registerEditor('Enum', require('framework/component/type-editor/Enum').Enum);
registerEditor('boolean', require('framework/component/type-editor/Boolean').Boolean);
registerEditor('string', require('framework/component/type-editor/String').String);
registerEditor('number', require('framework/component/type-editor/Number').Number);

/*  Declare your custom type converters here:
 */
registerTypeConverter('Date', require('framework/type/Date').Date);

moment.locale("ko");