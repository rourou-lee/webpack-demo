
import counter from './counter.js';
import number from './number.js';
counter();
number();
//如果当前模块开启了hot module replacement,接受的number如果发生变化，移除之前的number,number重新执行
if(module.hot){
    module.hot.accept('./number',function(){
        console.log(1)
        document.body.removeChild(document.getElementById('number'));
        number();
    });
}