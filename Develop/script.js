//makes sure that html loads before preforming actions
$(document).ready(function (){

    //updates the current day
    $("#currentDay").text(moment().format("MMM Do YY"));
    
    // This funciton colors the Blocks based upon time
      function blockColoring() {
        //gets current hour in military time as an int
        var currentHour = moment().hour();

        // loop through time-blocks
        $(".time-block").each(function () {
            // calls the current-timeBlock with this and gets the id which is a string value of the hour
            var blockHour = $(this).attr("id");
            console.log( blockHour, currentHour)

            //removes any style classes
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");

            //if statements to add the approptriate style and coloring 
            if (blockHour < currentHour) {
                $(this).addClass("past");  
            }
            // is only a double == because the values will match but not data types as currentHour is an int and blockHour is a string
            else if (blockHour == currentHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        })
    }
    blockColoring();
    
    // listens for a click 
    $(".saveBtn").on("click", function () {
        //logs out the value for the saveBtn
        console.log(this);
        // saves the value entered in the Todo section
        var input = $(this).siblings(".ToDo").val();
        // gets the id for the hour of the day
        var time = $(this).parent().attr("id");

        //saves to localstorage
        localStorage.setItem(time, input);
    })
    //load stored data for every hour
    $("#9 .ToDo").val(localStorage.getItem("9"));
    $("#10 .ToDo").val(localStorage.getItem("10"));
    $("#11 .ToDo").val(localStorage.getItem("11"));
    $("#12 .ToDo").val(localStorage.getItem("12"));
    $("#13 .ToDo").val(localStorage.getItem("13"));
    $("#14 .ToDo").val(localStorage.getItem("14"));
    $("#15 .ToDo").val(localStorage.getItem("15"));
    $("#16 .ToDo").val(localStorage.getItem("16"));
    $("#17 .ToDo").val(localStorage.getItem("17"));
    
    })