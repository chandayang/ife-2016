/*
* @Author: Administrator
* @Date:   2016-04-13 09:53:49
* @Last Modified by:   Administrator
* @Last Modified time: 2016-04-13 12:30:14
*/

'use strict';
window.onload=function(){
	init();
}
function init(){
	var root=document.getElementsByClassName("root")[0];
	var btns=document.getElementsByTagName("input");
	var prebtn = btns[0];
	var inbtn = btns[1];
	var postbtn = btns[2];
	var treeWalker = new TreeWalker();
	var EventUtil={
		addHandler:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent("on"+type,handler);
			}else{
				element["on"+type]=handler;
			}
		}
	};
	EventUtil.addHandler(prebtn, "click", function() {
	    treeWalker.preOrder(root);
	    treeWalker.animation();
	});
	EventUtil.addHandler(inbtn, "click", function() {
	    treeWalker.inOrder(root);
	    treeWalker.animation();
	});
	EventUtil.addHandler(postbtn, "click", function() {
	    treeWalker.postOrder(root);
	    treeWalker.animation();
	});
}
function TreeWalker(){
	this.stack = [];
	this.isWalking = false;
};
TreeWalker.prototype.preOrder = function(node){
	this.stack.push(node);
	if(node.firstElementChild){
		this.preOrder(node.firstElementChild);
	}
	if(node.lastElementChild){
		this.preOrder(node.lastElementChild);
	}
};
TreeWalker.prototype.inOrder = function(node){
	if(node.firstElementChild) {
	        this.inOrder(node.firstElementChild);
	    }
	this.stack.push(node);
	if(node.lastElementChild) {
	        this.inOrder(node.lastElementChild);
	}
};
TreeWalker.prototype.postOrder = function(node){
	if(node.lastElementChild){
			this.postOrder(node.lastElementChild);
	}
	if(node.lastElementChild) {
	    	this.postOrder(node.lastElementChild);
 	}
	this.stack.push(node);
};
TreeWalker.prototype.animation = function(){
	var stack   = this.stack,
	       speeder = document.querySelector("#speeder"),
	       iter    = 0,
	       self    = this,
	       timer;
	 self.stack = [];
	 if(!self.isWalking) {
	     self.isWalking = true;
	     stack[iter].style.backgroundColor = "#F125C2";
	     timer = setInterval(function() {
	         if(iter == stack.length-1) {
	             stack[iter].style.backgroundColor = "#FFFFFF";
	             self.isWalking = false;
	             clearInterval(timer);
	         } else {
	             ++iter;
	             stack[iter-1].style.backgroundColor = "#FFFFFF";
	             stack[iter].style.backgroundColor = "#F125C2";
	         }
	     }, speeder.value);
	 }
};