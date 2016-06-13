angular.module('starter.services', ['ngResource'])
    //https://devdactic.com/improving-rest-with-ngresource/
        .constant("test_baseURL", 'http://jsonplaceholder.typicode.com/users/:user') //"http://localhost:3000/")
        .constant("baseURL", 'http://westudypoc01.azurewebsites.net/') //http://localhost:3000/')
        //.constant("baseURL", 'http://localhost:3000/')
        .factory('testFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
          var data = $resource('http://jsonplaceholder.typicode.com/users/:user', {user: '@user'}, {
          update:{
            method:'PUT'
          }
        });
        return data;
      }])
      .factory('flashCardFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
          var data = $resource(baseURL + 'flashCards/:deckId', {deckId: '@deckId'}, {
          update:{
            method:'PUT'
          }
        });
        return data;
      }])
      .factory('notesFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
          var data = $resource(baseURL + 'notes/:noteId', {deckId: '@noteId'}, {
          update:{
            method:'PUT'
          }
        });
        return data;
      }])
      .factory('quizFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
          var data = $resource(baseURL + 'quizzes/:quizId', {quizId: '@quizId'}, {
          update:{
            method:'PUT'
          }
        });
        return data;
      }])
;//closing semicolon

