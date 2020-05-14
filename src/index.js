/**如果是在.babelrc文件设置了usage:true, 则需要在入口文件的最顶部导入pollyfill,来兼容低版本浏览器对ES6语法的处理
 * 或者可以在webpack。config.js中设置entry进行配置
 * 这种引入方法，会以全局变量的方式注入ES6语法，会污染全局环境，所以在打包类库的时候要用到别的配置方式，不用这种@babel/plugin-transform-runtime
*/
//import "@babel/polyfill";
//require("@babel/polyfill");
const arr=[
    new Promise(()=>{}),
    new Promise(()=>{})
];
arr.map(item=>{
    console.log(item);
});