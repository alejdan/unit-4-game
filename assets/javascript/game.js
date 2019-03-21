$(document).ready(function () {

    //Generates random number between 19 and 120 as our goal.

    var goal = Math.floor((Math.random() * (120 - 19) + 19));

    //generates random numbers between 1 and 12 for each crystal.

    var green = Math.floor((Math.random() * 12) + 1);
    var blue = Math.floor((Math.random() * 12) + 1);
    var red = Math.floor((Math.random() * 12) + 1);
    var purple = Math.floor((Math.random() * 12) + 1);

    //Wins and losses will be stored here.

    var wins = 0;

    var losses = 0;

    //Score will be stored here.

    var score = 0;

    //Initialize the game

    function reset() {

        green = Math.floor((Math.random() * 12) + 1);
        blue = Math.floor((Math.random() * 12) + 1);
        red = Math.floor((Math.random() * 12) + 1);
        purple = Math.floor((Math.random() * 12) + 1);
        score = 0;
        $("#score").text(score);
        goal = Math.floor((Math.random() * (120 - 19) + 19));
        $("#goal").text(goal);

    }

    reset();

    //Adds the values of the images to score.

    $(".crystal").click(function () {

        if ($(this).attr("id") === "green") {

            score += green;

        } else if ($(this).attr("id") === "blue") {

            score += blue;

        } else if ($(this).attr("id") === "red") {

            score += red;

        } else if ($(this).attr("id") === "purple") {

            score += purple;

        } else {

        }

        $("#score").text(score);

        //Compares score to goal and adds wins or losses depending on the case.
        
        if (score === goal) {

            reset();
            wins++;
            $("#wins").text(wins);


        } else if (score > goal) {

            reset();
            losses++;
            $("#losses").text(losses);

        }

    });
 
});