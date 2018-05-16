// $(document).ready( function() {

//to add pictures I need to download the pics I want and assign them "rock.png",etc. and then 
//do "url =" + user_input  + ".png" to get that picture from my file 

    var player_tally = 0
    var losses_tally = 0
    var tie_tally = 0 


    function user_selection(user_input) {
        var computer_array = ["rock", "paper", "scissors"];
        var computer_choice = computer_array[Math.floor(Math.random() * computer_array.length)];
        // switch statement
        if (user_input == computer_choice) {
            tie_tally += 1
            $("#ties").text("Ties:" + " " + tie_tally)

            $("#results_box").show()
            .css({
                "background-color": "yellow"
            })
            $("#win_or_lose").text("TIE!")
            
            
        } else if (user_input == "rock" && computer_choice == "paper") {
            losses_tally += 1;
            $("#losses").text("Losses:" + " " + losses_tally)
            $("#results_box").show()
            .css({
                "background-color": "red"
            })
            $("#win_or_lose").text("Lose!")
            
            
        } else if (user_input == "rock" && computer_choice == "scissors") {
            player_tally += 1; 
            $("#wins").text("Wins:" + " " + player_tally)
            $("#results_box").show()
            .css({
                "background-color": "green"
            }) 
            $("#win_or_lose").text("Win!")
            
            
        } else if (user_input == "paper" && computer_choice == "rock") {
            player_tally += 1;
            $("#wins").text("Wins:" + " " + player_tally) 
            $("#results_box").show()
            .css({
                "background-color": "green"
            })
            $("#win_or_lose").text("Win!")
        
            
        } else if (user_input == "paper" && computer_choice == "scissors") {
            losses_tally += 1;
            $("#losses").text("Losses:" + " " + losses_tally)
        
            $("#results_box").show()
            .css({
                "background-color": "red"
            })
            $("#win_or_lose").text("Lose!")
            
        } else if (user_input == "scissors" && computer_choice == "paper") {
            player_tally += 1; 
            $("#wins").text("Wins:" + " " + player_tally) 
            $("#results_box").show()
            .css({
                "background-color": "green"
            }) 
            $("#win_or_lose").text("Win!")
            
        } else if (user_input == "scissors" && computer_choice == "rock") {
            losses_tally += 1;
            $("#losses").text("Losses:" + " " + losses_tally)
            $("#results_box").show()
            .css({
                "background-color": "red"
            })
            $("#win_or_lose").text("Lose!")
        
        }

        add_imgs(user_input, '#player_image');
        add_imgs(computer_choice, '#computer_image'); 
        
    }

    function add_imgs(image_name, element_name) {
        var img = $("<img />", { 
            class: "result_box_img",
            src: image_name + ".png",
        });

        img.appendTo($(element_name));

    }

    $("#continue_playing").click(function() {
        $("#results_box").hide();
        $(".result_box_img").remove() 
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


// })