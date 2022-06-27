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

// setInterval(checkTime, 1000);
// console.log(checkTime);