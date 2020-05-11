function number() {  
    var div=document.createElement('div');
    div.setAttribute('id','number');
    div.innerHTML=5000;
    div.onclick=function () { 
        div.innerHTML=parseInt(div.innerHTML,10)+1;
    };
    document.body.appendChild(div);
}
export default number;