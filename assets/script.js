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






//Shows current day of week and day of month
function date_time() {
    now = moment().format('dddd, MMMM Do');
    document.getElementById("time-display").innerHTML = now;
    setTimeout(function () { date_time(); }, 1000)
}
date_time()

//Make variable for current moment, have 3 conditional statements, if value is less than , euqal to, and greater than
var boxIds = [
    "row-1",
    "row-2",
    "row-3",
    "row-4",
    "row-5",
    "row-6",
    "row-7",
    "row-8",
    "row-9"
]
var times = [8, 9, 10, 11, 12, 1, 2, 3, 4]

// var ActualTimes = (8 + " A.M")
// console.log(ActualTimes)



for (let i = 0; i < boxIds.length; i++) {
    var boxId = boxIds[i];
    document.getElementById(boxId).innerHTML = times[i]

    var ActualTime = (moment().hour())

    if (times[i] === ActualTime) {
        document.getElementById(boxId).className = "present"
    }
    else if (times[i] > ActualTime) {
        document.getElementById(boxId).className = "past"
    }
    else {
        document.getElementById(boxId).className = "future"
    }




}
// var boxId
var boxes = getElementById.boxIds


var currentTime = moment().hour()
var boxTime

// if (boxTime === moment().hour()) {
// document.getElementById(boxId).className = "past"
// }
// else if (boxTime > moment().hour()) {

// }
// else {

// }




//use moment.hours
//Make sure to remove other color in conditional statement so it doesn't write over it

//Making blocks using bootstrap, each row needs 3 components and then change column size


//USE local storage for whatever the user inputs into the boxes