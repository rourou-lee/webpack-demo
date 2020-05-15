/**如果是在.babelrc文件设置了usage:true, 则需要在入口文件的最顶部导入pollyfill,来兼容低版本浏览器对ES6语法的处理
 * 或者可以在webpack。config.js中设置entry进行配置
 * 这种引入方法，会以全局变量的方式注入ES6语法，会污染全局环境，所以在打包类库的时候要用到别的配置方式，不用这种@babel/plugin-transform-runtime
*/
/**
 * babel/pollyfill这样的文件，如果没有到处任何文件，在配置了Tree Shaking后，不会导入任何ES6的语法，但是我们又需要这样的文件
 * 所以，需要在package.json中配置"sideEffects":["@babel/polyfill","*css"],将这种没有任何导出的文件添加进来，
 * 如果没有这样的文件，设置成false,以上配置，在遇到css文件和@babel/polyfill的时候将不使用Tree Shaking
 */
import "@babel/polyfill";
//require("@babel/polyfill");

/** Tree Shaking
 * 只支持静态方法的引入，因此只支持ESModule方法的引入
 * 此配置会按需引入，比如此处如果不添加这个配置，会将math.js的所有方法引入，配置后用到什么引入什么
 */
import {add} from './math.js';
add(1,6);