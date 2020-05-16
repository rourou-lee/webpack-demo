function getComponent(){
    //异步引入lodash库,打包后名称为wendors-lodash.js，可通过修改webpack.common.js的optimization修改名称
    return import(/*webpackChunkName:"lodash"*/'lodash').then(({default:_})=>{
        var element=document.createElement('div');
        element.innerHTML=_.join(['早上好','rourou-lee']);
        return element;
    })
}
getComponent().then(element=>{
    document.body.appendChild(element);
});
// import _ from 'lodash';
// var element=document.createElement('div');
//          element.innerHTML=_.join(['早上好','rourou-lee']);
//          document.body.appendChild(element);
// import {add} from './math.js';
// console.log(add(1,2));