import { registerRenderer } from 'model/renderer';

/*  Write your model imports here:
 */
import 'model/user';


/*  Declare your custom type renderers here:
 */
registerRenderer('Date', require('component/type-renderer/Date').default);
registerRenderer('string', require('component/type-renderer/String').default);
registerRenderer('number', require('component/type-renderer/Number').default);
