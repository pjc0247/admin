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
registerRenderer('Date', require('framework/component/type-renderer/Date').default);
registerRenderer('string', require('framework/component/type-renderer/String').default);
registerRenderer('number', require('framework/component/type-renderer/Number').default);

registerEditor('File', require('framework/component/type-editor/File').default);
registerEditor('Date', require('framework/component/type-editor/Date').default);
registerEditor('Enum', require('framework/component/type-editor/Enum').default);
registerEditor('boolean', require('framework/component/type-editor/Boolean').default);
registerEditor('string', require('framework/component/type-editor/String').default);
registerEditor('number', require('framework/component/type-editor/Number').default);

/*  Declare your custom type converters here:
 */
registerTypeConverter('Date', require('framework/type/Date').default);

moment.locale("ko");