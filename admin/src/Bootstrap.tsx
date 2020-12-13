import { registerRenderer } from 'model/renderer';
import { registerEditor } from 'model/editor';
import { registerTypeConverter } from 'type/converter';

/*  Write your model imports here:
 */
import 'model/user';

/*  Declare your custom type renderers here:
 */
registerRenderer('Date', require('component/type-renderer/Date').default);
registerRenderer('string', require('component/type-renderer/String').default);
registerRenderer('number', require('component/type-renderer/Number').default);

registerEditor('Date', require('component/type-editor/Date').default);
registerEditor('string', require('component/type-editor/String').default);
registerEditor('number', require('component/type-editor/Number').default);

/*  Declare your custom type converters here:
 */
registerTypeConverter('Date', require('type/Date').default);
