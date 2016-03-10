var todoApp = angular.module('todoApp', []);
var todoServerURI = "http://localhost:9999"; // TODO: modularize todo server configuration

function mainController($scope, $http) {
  clearForm();
  syncTodos();

  $scope.createTodo = function () {
    $http.post(todoServerURI + '/api/todos', $scope.formData)
      .success(function () {
        clearForm();
        syncTodos();
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };

  $scope.completeTodo = function (todo) {
    $http.put(todoServerURI + '/api/todos/' + todo._id, todo)
      .success(function () {
        syncTodos();
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteTodo = function (todo) {
    $http.delete(todoServerURI + '/api/todos/' + todo._id, todo)
      .success(function () {
        syncTodos();
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };

  $scope.active = function() {
    return $scope.todos.filter(function(todo) {
      return !todo.done;
    }).length;
  };

  $scope.completed = function () {
    return $scope.todos.filter(function(todo) {
      return todo.done;
    }).length;
  };

  function clearForm() {
    $scope.formData = {};
  }

  function syncTodos() {
    $http.get(todoServerURI + '/api/todos')
    .success(function (data) {
      $scope.todos = data || [];

      console.log(data);
    })
    .error(function (data) {
      console.log('Error: ' + data);
    });
  }
}
