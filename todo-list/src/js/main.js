/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-23 12:52:59
 * @version $Id$
 */

require(['todo'],function(todo){
	   
        todo.init();
        todo.taskListShow();
        todo.taskContentShow();
        todo.statusShow();
        todo.Delete();
});