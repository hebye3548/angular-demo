/**
 * "use strict";
 * @param  {[type]} ){	var self          [description]
 * @return {[type]}         [description]
 */
/*angular.module('notesApp',[]).controller('mainCtrl',[function(){
	var self=this;
	self.submit=function(){
		console.info(self.user);
	};
	self.checked='yes';
	self.checkChange=function(){
		console.info(self.checked);
	};
	self.testRadio='2';
	self.mySelected='3';
	self.mySwitch='Kitty';
	self.selectList=[
		{value:'1',key:'11',type:'even'},
		{value:'2',key:'22',type:'odd'},
		{value:'3',key:'33',type:'even'},
	]
}]);*/
/*angular.module('notesApp',[]).controller('MainCtrl',['$log','$location',function($log,$x){
	var self=this;
	self.printLog=function(){
		$log.log($x);
		$log.info($x.path())
		$log.error('this is error!')
		$log.debug(this)
	};
}]);*/
angular.module('notesApp', [])
    .controller('MainCtrl', [function() {
        var self = this;
        self.tab = 'first';
        self.open = function(tab) {
            self.tab = tab;
        };
    }])
    .controller('SubCtrl', ['ItemService', function(ItemService) {
        var self = this;
        self.list = function() {
            return ItemService.list();
        };
        self.add = function() {
            /*ItemService.add({
            	id:self.list().length+1,
            	label:self.list().length
            });*/
    		ItemService.callBack().then(function(data){
    			console.info(data)
    		},function(data){
    			alert(data)
    		})
        };
    }])
    .service('ItemService', ['$q', '$http', function($q, $http) {
        var items = [
            { id: 1, label: 'item 0' },
            { id: 2, label: 'item 1' },
        ];
        this.callBack=function(){
        	var deferred = $q.defer();
        	$http({
        		method:'get',
        		url:'http://127.0.0.1:8080/app',
        	}).success(function(data){
        		deferred.resolve(data);
        	}).error(function(){
        		deferred.reject('error')
        	});
        	return deferred.promise;
        }
        this.list = function() {
            return items;
        }
        this.add = function(item) {
            items.push(item);
        }
    }]);
