// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist






//Working on making current time show up
// function  date_time () 
// {
// now = moment().format('MMMM Do YYYY');
// document.getElementById("time-display").innerHTML = now;
// setTimeout(function () {date_time();}, 1000)
// }
// date_time()

//Date
function  date_time() 
{
var now = moment().format('MMMM Do YYYY');
document.getElementById("time-display").innerHTML = now;
// $("time-display").text(moment().format("MMM Do, YYYY"));
}
date_time()

//Making blocks using bootstrap, each row needs 3 components and then change column size