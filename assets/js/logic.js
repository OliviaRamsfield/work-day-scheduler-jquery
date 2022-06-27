//getting the current day using moment.js
var todaysDate = moment().format('dddd MMMM Do YYYY').toString();

$("#currentDay").innerHTML = todaysDate;

//append current date to <p> element
$("<p>" + todaysDate + "</p>").appendTo("#currentDay");

/* Begin color coding based on current time */

//get current hour using moment.js
var currentHour = moment().hour();
console.log(currentHour);

//color code based on hour
// var colorcode = document.getElementsByClassName("colorcode");
$('.colorcode').each(function(){
    var hour = parseInt($(this).prop('id'));
    if (hour > currentHour){
        $(this).removeClass("present past").addClass("future");
    }
    else if (hour < currentHour){
        $(this).removeClass("future present").addClass("past");
    }
    else if (hour == currentHour) {
        $(this).removeClass("future past").addClass("present");
    }
});

// figure out how to use setInterval() to update color codes without refreshing

/* End color coding based on current time */

/* Start saving to local storage and adding persistence */
$(document).ready(function() {
$(".saveBtn").on("click", function(){
    var text = $(this).siblings(".textarea").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    console.log(localStorage);
    })
});


