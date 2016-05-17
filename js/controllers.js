angular.module('todoApp')
  .controller('todoController', function($scope) {
    $scope.name = 'Harjas';
    $scope.todos = [{text: 'First todo',
                     done: false},
                    {text: 'Second todo',
                     done: false},
                    {text: 'Boom',
                     done: false}
                   ];
    $scope.addTodos = function() {
      $scope.todos.push({text:$scope.todoText, done: false});
      $scope.todoText = '';
    }

    $scope.removeTodos = function(index) {
      $scope.todos.splice(index, 1);
    }

    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done)
          $scope.todos.push(todo);
      });
    };
  })
