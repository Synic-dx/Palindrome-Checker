$(document).ready(function() {
    $("#text").keypress(function(event) {
        if (event.which == 13) { 
            event.preventDefault(); 
            $("#checkButton").click(); 
        }
    });

    $("#checkButton").click(function() {
        var userInput = $("#text").val();
        var alphaPattern = /^[a-zA-Z\s]+$/;

        if(alphaPattern.test(userInput)) {
            var resultStringForward = "";
            var resultStringBackward = "";

            for(var i = 0; i < userInput.length; i++) {
                resultStringForward += userInput[i];
            }
            for(var i = userInput.length - 1; i >= 0; i--) {
                resultStringBackward += userInput[i];
            }

            console.log(resultStringForward);
            console.log(resultStringBackward);

            function match(resultStringForward, resultStringBackward) {
                return resultStringForward === resultStringBackward;
            }

            if(match(resultStringForward, resultStringBackward)) {
                $("#result").text("Palindrome");
                console.log("Palindrome");
            } else {
                $("#result").text("Not a Palindrome");
                console.log("Not a Palindrome");
            }
        } else {
            $("#result").text("Please enter only words or phrases");
            console.log("Invalid input");
        }
    });
});