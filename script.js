//Angular script

angular.module('app', []).controller('mainCtrl', mainCtrl)

function mainCtrl($scope)
{
    $scope.printRonQuote = function () 
    {
        var myurl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes/";
        var q = "\"";
        console.log(myurl);
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function(parsed_json) {
                console.log(parsed_json[0]);
                q += parsed_json[0];
                console.log("q is: " + q);
                q += "\" - Ron Swanson";
                $scope.quote = q;
                //$("#quote").html(q);
            }
        });
        //$("#quote").html(q);
    }
    
    $scope.printQuote = function () 
    {
        $.ajax({
            url: "https://talaikis.com/api/quotes/random/",
            //crossDomain: true,
            dataType: "json",
            success: function(parsed_json) {
                console.log(parsed_json);
                var by = "-" + parsed_json['author'];
                $scope.quote = parsed_json['quote'] + by;
                //$('#quote').html(parsed_json['quote'] + by);
            }
        });
    }
    
    $scope.displayPic = function () 
    {
        //console.log("here")
        var url = "https://picsum.photos/750/600/?image=";
        var int = Math.ceil(Math.random() * 1084);
        url += int;
        $scope.picture = url;
        $("#pic").css('visibility', 'visible');
    }
    
    $scope.surpriseMe = function() 
    {
        $("#para").css("color", "black");
        if (Math.random() < .5)
            $scope.printQuote();
        else
            $scope.printRonQuote();
        $scope.displayPic();
    };
}

/*global $*/

/*$(document).ready(function() {
    $("#getRonQuote").click(function(e) {
        printRonQuote();
    });
    $("#getQuote").click(function(x) {
        printQuote();
    });
    $("#getpic").click(function(x) {
        diplayPic();
    });
    $("#supriseMe").click(function(x) {
        $("#para").css("color", "black");
        if (Math.random() < .5)
            printQuote();
        else
            printRonQuote();
        diplayPic();
    });
    $("#black").click(function(e) {
        $("#para").css("color", "black");
    });
    $("#white").click(function(e) {
        $("#para").css("color", "white");
    });
    $("#red").click(function(e) {
        $("#para").css("color", "red");
    });
    $("#top").click(function(e) {
        $("#para").css("top", "34px");
    });
    $("#bottom").click(function(e) {
        $("#para").css("top", "490px");
    });
})*/