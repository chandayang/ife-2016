/*
* @Author: Administrator
* @Date:   2016-03-27 09:24:01
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-11 18:43:27
*/
   ( function(){
        var inp= document.getElementById("inp");
         var leftIn = document.getElementById("leftIn");
         var rightIn = document.getElementById("rightIn");
         var leftOut = document.getElementById("leftOut");
         var rightOut = document.getElementById("rightOut");
         var pf = document.getElementById("pf");
         var nowli = document.getElementsByTagName("li");

            function render(){
                for(var i=0;i<nowli.length;i++){
                      nowli[i].className="rend";
                }
              
            }

             leftIn.onclick = function(){
                  var addli = document.createElement("li");
                 addli.innerHTML = inp.value;
                 if(inp.value){
                    pf.insertBefore(addli,pf.childNodes[0]); 
                }else{
                    alert("请输入正确的数字")
                }
                 render();
                 inp.value="";
             }
            rightIn.onclick = function(){
                 var addli = document.createElement("li");
                 addli.innerHTML = inp.value;
                  if(inp.value){
                 pf.appendChild(addli); 
                }else{
                    alert("请输入正确的数字")
                }  
                 render();
                   inp.value="";
            }
             leftOut.onclick = function(){
   
                 pf.removeChild(pf.firstChild); 
                 
             }
             rightOut.onclick = function(){
                 pf.removeChild(pf.lastChild);         
             }
             for(var i=0;i<nowli.length;i++){
                nowli[i].onclick = function(){
                    pf.removeChild(this);
                }
             }

         }
            
    )();
       