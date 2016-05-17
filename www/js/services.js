angular.module('starter.services', ['ngResource'])
		//https://devdactic.com/improving-rest-with-ngresource/
        .constant("baseURL", 'http://jsonplaceholder.typicode.com/users/:user') //"http://localhost:3000/")
        .factory('testFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
		  	var data = $resource('http://jsonplaceholder.typicode.com/users/:user', {user: '@user'}, {
		  		update:{
		    		method:'PUT'
		   		}
		    });
		    return data;
  		}])
        //https://devdactic.com/improving-rest-with-ngresource/
      //   var data = $resource('http://jsonplaceholder.typicode.com/users/:user', {user: '@user'}, {
      // update:{
      //     method:'PUT'
      //     }
      // });
      // return data;
        /*
        menuFactory.get({id:parseInt($stateParams.id, 10)});
        .factory('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

            return $resource(baseURL + "dishes/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });

        }])
        */

;//closing semicolon


//EXAMPLE OF USING A SERVICE
/*
var query = UserService.query();
query.$promise.then(function(data) {
     $scope.users = data;
     // Do whatever when the request is finished
});
*/
