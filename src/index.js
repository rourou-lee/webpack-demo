// async function getComponent(){
//     const {default:_}=await import(/*webpackChunkName:"lodash"*/ 'lodash');
//      const element=document.createElement('div');
//         element.innerHTML=_.join(['早上好','rourou-lee']);
//         return element;
//     //异步引入lodash库,打包后名称为wendors-lodash.js，可通过修改webpack.common.js的optimization修改名称
// }

//document.addEventListener('click',()=>{
 //   import(/* webpackPrefetch: true */'./click.js').then(({default:func})=>{
 //       func();
//    })
//});

// import _ from 'lodash';
// var element=document.createElement('div');
//          element.innerHTML=_.join(['早上好','rourou-lee']);
//          document.body.appendChild(element);
// import {add} from './math.js';
// console.log(add(1,2));
//import "@babel/polyfill";
//import $ from 'jquery';
//import _ from 'lodash';
//import {ui} from './jquery.ui'
//ui();
//import avatar from './css/logo.jpeg';
//import './css/common.scss'
//var img = new Image();
//img.src=avatar;
//img.classList.add('avatar');
//var root = document.getElementById('app');
//root.append(img)

//const dom =$('div');
//dom.html(_.join(['rourou','lee'],'-'));
//$('body').append(dom);
console.log(this)