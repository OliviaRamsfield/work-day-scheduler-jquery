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

    //save items to local storage
    localStorage.setItem(time, text);
    console.log(localStorage);
});

// get items from local storage if present
$("#9 .textarea").val(localStorage.getItem("9"));
$("#10 .textarea").val(localStorage.getItem("10"));
$("#11 .textarea").val(localStorage.getItem("11"));
$("#12 .textarea").val(localStorage.getItem("12"));
$("#13 .textarea").val(localStorage.getItem("13"));
$("#14 .textarea").val(localStorage.getItem("14"));
$("#15 .textarea").val(localStorage.getItem("15"));
$("#16 .textarea").val(localStorage.getItem("16"));
$("#17 .textarea").val(localStorage.getItem("17"));
});
