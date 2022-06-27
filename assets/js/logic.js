//getting the current day using moment.js
var todaysDate = moment().format('dddd MMMM Do YYYY').toString();

$("#currentDay").innerHTML = todaysDate;

//append current date to <p> element
$("<p>" + todaysDate + "</p>").appendTo("#currentDay");