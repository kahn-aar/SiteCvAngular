    var phonecatApp = angular.module('phonecatApp', []);
     
    phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('./uv.json').success(function(data) {
                $scope.listuv = data;
            });
            $http.get('./contenu.json').success(function(data) {
                $scope.contenu = data;
            });
            $http.get('./xp.json').success(function(data) {
                $scope.xp = data;
            });
            $http.get('./projets.json').success(function(data) {
                $scope.projets = data;
            });
        }
    ]);

    function displayUv() {
        hideAll();
        $('.uv').show(); 
    }

    function displayContent() {
        hideAll();
        $('.cont').show();
    }

    function displayXp() {
        hideAll();
        $('.xp').show(); 
    }

    function displayProjets() {
        hideAll();
        $('.projets').show(); 
    }

    function hideAll() {
        $('.uv').hide(); 
        $('.cont').hide();
        $('.xp').hide();
        $('.projets').hide();
    }


    