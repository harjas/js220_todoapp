angular.module('todoApp', ['ngRoute']);

angular.module('todoApp')
.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: 'templates/todo.html',
    controller: 'todoController'
  })
  .when('/gallery', {
    templateUrl:'templates/gallery.html',
  })
  .otherwise({
    redirectTo:'/'
  })
}])
