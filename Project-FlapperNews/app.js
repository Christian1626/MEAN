/**
 * Created by Christian on 31/07/2015.
 */

var app = angular.module('flapperNews', []);

app.controller('MainCtrl',function($scope){
    $scope.posts = [
        {title: 'Google', upvotes: 5, link:"https://www.google.co.uk/?gws_rd=ssl"},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
    ];


    $scope.addPost = function() {
        if(!$scope.title || $scope.title=='') {
            return;
        }

        $scope.posts.push({title: $scope.title, upvotes: 0,link:$scope.link});
        $scope.title = '';
        $scope.link = '';
    }

    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    }
});