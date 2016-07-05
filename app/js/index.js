"use strict";
angular.module('notesApp',[]).controller('mainCtrl',[function(){
	var self=this;
	self.submit=function(){
		console.info(self.user)
	}
}]);