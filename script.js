//Angular script

/*global angular*/
/*global $*/

angular.module('app', []).controller('mainCtrl', mainCtrl);

function mainCtrl($scope, $http) {
    $scope.printRonQuote = function() {
        var myurl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes/";
        var q = "\"";
        console.log(myurl);
        $http.get(myurl)
            .then(function(response) {
                q += response.data;
                console.log("q is: " + q);
                q += "\" - Ron Swanson";
                $scope.quote = q;
            });
    };

    $scope.printQuote = function() {
        $http.get("https://talaikis.com/api/quotes/random/")
            .then(function(response) {
                console.log(response);
                var by = "-" + response.data['author'];
                $scope.quote = response.data['quote'] + by;
            });
    };
    $scope.displayPic = function() {
        var url = "https://picsum.photos/750/600/?image=";
        var int = Math.ceil(Math.random() * 1084);
        url += int;
        $scope.picture = url;
        $("#pic").css('visibility', 'visible');
    };

    $scope.surpriseMe = function() {
        $("#para").css("color", "black");
        $scope.topText();
        if (Math.random() < .5)
            $scope.printQuote();
        else
            $scope.printRonQuote();
        $scope.displayPic();
    };

    $scope.whiteText = function() {
        $("#para").css("color", "white");
    };

    $scope.blackText = function() {
        $("#para").css("color", "black");
    };

    $scope.redText = function() {
        $("#para").css("color", "red");
    };

    $scope.topText = function() {
        $("#para").css("top", "-600px");
    };

    $scope.bottomText = function() {
        $("#para").css("top", "-150px");
    };
}
