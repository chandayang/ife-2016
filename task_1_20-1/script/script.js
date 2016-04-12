/*
* @Author: Administrator
* @Date:   2016-04-12 16:26:14
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-12 16:26:18
*/

'use strict';
 function leftIna(){
     var inp = document.getElementById("inp").value;
     var pf = document.getElementById("pf");   
     var inputarr = [];
     inputarr = inp.split(/[\n\r\t\s,，、;；]+/g);
     for(var i=0;i<inputarr.length;i++){
     	var newdiv = document.createElement("div");
     	newdiv.innerHTML = inputarr[i];
     	pf.insertBefore(newdiv,pf.firstChild);
     }
     render();
 }
 function rightIna(){
     var inp = document.getElementById("inp").value;
     var pf = document.getElementById("pf");
     var inputarr = [];
     inputarr = inp.split(/[\n\r\t\s,，、;；]+/g);
     for(var i=0;i<inputarr.length;i++){
     	var newdiv = document.createElement("div");
     	newdiv.innerHTML = inputarr[i];
     	pf.appendChild(newdiv);
     }
     render();
 }
 function leftOuta(){
     pf.removeChild(pf.firstChild);
 }
 function rightOuta(){
     pf.removeChild(pf.lastChild);
 }
 function querya(){
 		var divs = document.getElementById("pf").children;
 		var qutxt = document.getElementById("quTxt").value;
 		for(var i=0;i<divs.length;i++){
 			if(qutxt===divs[i].innerHTML){
 				divs[i].style.backgroundColor = "red";
 			}
 		}
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
 function render(){
     var divs = pf.children;//注意childNodes与children的区别
     for(var i=0;i<divs.length;i++){
         var text = divs[i].innerHTML;
         divs[i].className="render";
     }
 }
 function init(){
     render();
     dele();
     var leftIn = document.getElementById("left-in");
     var rightIn = document.getElementById("right-in");
     var leftOut = document.getElementById("left-out");
     var rightOut = document.getElementById("right-out");
     var query = document.getElementById("query");
     leftIn.addEventListener('click',leftIna,false);
     rightIn.addEventListener("click",rightIna,false);
     leftOut.addEventListener("click",leftOuta,false);
     rightOut.addEventListener("click",rightOuta,false);
     query.addEventListener("click",querya,false);
 }
window.onload = function(){
    init();
}