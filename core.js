var todoApp = angular.module('todoApp', []);
var todoServerURI = 'http://localhost:9999'; // TODO: add configuration file

function mainController($scope, $http) {
  $scope.formData = {};

  $http.get(todoServerURI + '/api/todos')
    .success(function (data) {
      $scope.todos = data;

      console.log(data);
      alert('success');
    })
    .error(function (data) {
      console.log('Error: ' + data);
      alert('error');
    });

  $scope.createTodo = function () {
    $http.post(todoServerURI + '/api/todos', $scope.formData)
      .success(function (data) {
        $scope.formData = {};
        $scope.todos = data;

        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };

  $scope.completeTodo = function () {
    // TODO: add complete
  }

  $scope.deleteTodo = function (id) {
    // TODO: add delete
  };
}
