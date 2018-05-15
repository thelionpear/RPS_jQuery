// $(document).ready( function() {

//to add pictures I need to download the pics I want and assign them "rock.png",etc. and then 
//do "url =" + user_input  + ".png" to get that picture from my file 

    var player_tally = 0
    var losses_tally = 0
    var tie_tally = 0 


    $("#continue_playing").click(function() {
        $("#results_box").hide()
    });

    $("#new_game").click(function() {
        $("#results_box").hide() 
        player_tally = 0
        $("#wins").text("Wins:" + " " + player_tally)
        losses_tally = 0
        $("#losses").text("Losses:" + " " + losses_tally)
        tie_tally = 0
        $("#ties").text("Ties:" + " " + tie_tally)
        
    });

    function user_selection(user_input) {
        var computer_array = ["rock", "paper", "scissor"];
        var computer_choice = computer_array[Math.floor(Math.random() * computer_array.length)];
        // switch statement
        if (user_input == computer_choice) {
            // alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nIt's a tie!");
            tie_tally += 1
            $("#ties").text("Ties:" + " " + tie_tally)

            $("#results_box").show()
            .css({
                "background-color": "yellow"
            })
            $("#winner_image").text("Player Choice:" + user_input)
            $("#computer_image").text("Computer_choice:" + computer_choice) 
            $("#win_or_lose").text("TIE!")
            
            
        } else if (user_input == "rock" && computer_choice == "paper") {
            // alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou lose!");
            losses_tally += 1;
            $("#losses").text("Losses:" + " " + losses_tally)
            // $("#ties").text("Ties:" + "" + tie_tally)

            $("#results_box").show()
            .css({
                "background-color": "red"
            })
            $("#winner_image").text("Player Choice:" + user_input)
            $("#computer_image").text("Computer_choice:" + computer_choice) 
            $("#win_or_lose").text("Lose!")
            
            
        } else if (user_input == "rock" && computer_choice == "scissors") {
            // alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou win!");
            player_tally += 1; 
            $("#wins").text("Wins:" + " " + player_tally)
            // $("#ties").text("Ties:" + "" + tie_tally)

            $("#results_box").show()
            .css({
                "background-color": "green"
            })
            $("#winner_image").text("Player Choice:" + user_input)
            $("#computer_image").text("Computer_choice:" + computer_choice)  
            $("#win_or_lose").text("Win!")
            
            
        } else if (user_input == "paper" && computer_choice == "rock") {
            // alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou win!");
            player_tally += 1;
            $("#wins").text("Wins:" + " " + player_tally) 
            // $("#ties").text("Ties:" + "" + tie_tally)

            $("#results_box").show()
            .css({
                "background-color": "green"
            })
            $("#winner_image").text("Player Choice:" + user_input)
            $("#computer_image").text("Computer_choice:" + computer_choice) 
            $("#win_or_lose").text("Win!")
        
            
        } else if (user_input == "paper" && computer_choice == "scissors") {
            // alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou lose!");
            losses_tally += 1;
            // $("#wins").text("Wins:" + "" + player_tally)
            $("#losses").text("Losses:" + " " + losses_tally)
        
            $("#results_box").show()
            .css({
                "background-color": "red"
            })
            $("#winner_image").text("Player Choice:" + user_input)
            $("#computer_image").text("Computer_choice:" + computer_choice) 
            $("#win_or_lose").text("Lose!")
            
        } else if (user_input == "scissors" && computer_choice == "paper") {
            // alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou win!");
            player_tally += 1; 
            $("#wins").text("Wins:" + " " + player_tally) 
            // $("#ties").text("Ties:" + "" + tie_tally)

            $("#results_box").show()
            .css({
                "background-color": "green"
            })
            $("#winner_image").text("Player Choice:" + user_input)
            $("#computer_image").text("Computer_choice:" + computer_choice)  
            $("#win_or_lose").text("Win!")
            
        } else if (user_input == "scissors" && computer_choice == "rock") {
            // alert ("You chose "+ user_input + " " + "Computer chose " + " " + computer_choice + "\nYou lose!");
            losses_tally += 1;
            $("#losses").text("Losses:" + " " + losses_tally)
            // $("#wins").text("Wins:" + "" + player_tally) 
            // $("#ties").text("Ties:" + "" + tie_tally)

            $("#results_box").show()
            .css({
                "background-color": "red"
            })
            $("#winner_image").text("Player Choice:" + user_input)
            $("#computer_image").text("Computer_choice:" + computer_choice) 
            $("#win_or_lose").text("Lose!")
        
        }
    }


// })