/*
* @Author: Administrator
* @Date:   2016-04-11 18:50:48
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-12 10:16:43
*/

'use strict';
 function BubbleSort(){
     var divs=pf.children;
     var temp="";
     for(var i=0;i<divs.length;i++){
        for(var j=0;j<divs.length;j++){
         if(parseInt(divs[i].innerHTML)>parseInt(divs[j].innerHTML)){
             temp=divs[i].innerHTML;    
             divs[i].innerHTML = divs[j].innerHTML;
             divs[j].innerHTML = temp;
         }
        }
     }
     render();
 }
 function leftIna(){
     var inp = document.getElementById("num").value;
     var pf = document.getElementById("pf");
     var newdiv = document.createElement("div");
     if(isSixty()){
         if( inp>=10 && inp<=100){
           newdiv.innerHTML = inp;
           pf.insertBefore(newdiv,pf.firstChild);  
           render();
       }else{
         alert("范围错误");
       }
     }else{
         alert("超过60个");
     } 
 }
 function rightIna(){
     var inp = document.getElementById("num").value;
     var pf = document.getElementById("pf");
     var newdiv = document.createElement("div");
     if(isSixty()){
         if( inp>=10 && inp<=100){
           newdiv.innerHTML = inp;
           pf.appendChild(newdiv);
           render();
       }else{
         alert("范围错误");
       }
     }else{
         alert("超过60个");
     } 
 }
 function leftOuta(){
     pf.removeChild(pf.firstChild);
 }
 function rightOuta(){
     pf.removeChild(pf.lastChild);
 }
 //dele函数使用了事件委托，将事件绑定到pf上；注意target.nodeName.toLowerCase() =="div"&&target.parentNode==pf
 function dele(){
     var pf = document.getElementById("pf");
     pf.addEventListener("click",function(e){
         e=e||window.e;
         var target = e.target||e.srcElement;
         if(target.nodeName.toLowerCase() =="div"&&target.parentNode==pf){
             pf.removeChild(e.target);
         }
     },false)
     
 }
 function isSixty(){
     var divs = pf.children;
     if(divs.length<=60){
         return true;
     }else{
         return false;
     }
 }
 function render(){
     var divs = pf.children;//注意childNodes与children的区别
     for(var i=0;i<divs.length;i++){
         var text = divs[i].innerHTML;
         divs[i].style.height = text+"px";
     }
 }
 function init(){
     render();
     dele();
     var leftIn = document.getElementById("left-in");
     var rightIn = document.getElementById("right-in");
     var leftOut = document.getElementById("left-out");
     var rightOut = document.getElementById("right-out");
     var sort = document.getElementById("sort");
     leftIn.addEventListener('click',leftIna,false);
     rightIn.addEventListener("click",rightIna,false);
     leftOut.addEventListener("click",leftOuta,false);
     rightOut.addEventListener("click",rightOuta,false);
     sort.addEventListener("click",BubbleSort,false);
 }
window.onload = function(){
    init();
}