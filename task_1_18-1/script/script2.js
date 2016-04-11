/*
* @Author: Administrator
* @Date:   2016-04-11 18:40:41
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-11 18:40:52
*/

'use strict';
(function(){
            var print = document.getElementById('pf'),
                    btn = document.getElementsByTagName('button'),
                    txt='',
                    array=[];

            /*事件监听*/
            for(var i =0;i<btn.length;i++){
                btn[i].index = i;
                btn[i].addEventListener('click', function () {
                    txt = document.getElementById('input').value;
                    isNum()?actions(this.index):alert('请输入正确的数字')
                })
            }

            /*节点方法*/
            function actions(i){
                switch (i){
                    case 0: array.unshift(txt);break;
                    case 1: array.push(txt);break;
                    case 2: array.shift();break;
                    case 3: array.pop();break;
                }
                pf();
            }

            /*验证*/
            function isNum(){
                return txt.match(/^\d+$/)?1:0;
            }

            /*输出*/
            function pf(){
                var htmls ='';
                for(var i=0;i<array.length;i++){
                    htmls = htmls+ "<li class='"+i+"'>"+array[i]+"</li>"
                }
                print.innerHTML = htmls;
            }

            /*点击删除*/
            print.addEventListener('click', function (e) {
                var event = window.event || e,
                        li = event.target;
                array.splice(li.className,1);
                pf();
            })
        })()