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
var times = [8, 9, 10, 11, 12, 13, 14, 15, 16]

var TimeEvents = [
    "EightAm",
    "NineAm",
    "TenAm",
    "ElevenAm",
    "TwelvePm",
    "OnePm",
    "TwoPm",
    "ThreePm",
    "FourPm"
]




for (let i = 0; i < boxIds.length; i++) {
    var boxId = boxIds[i];

    var ActualTime = (moment().hour())
    console.log(ActualTime, times[i], boxId, TimeEvents[i])
    if (times[i] === ActualTime) {
        document.getElementById(TimeEvents[i]).className = "present"
    }
    else if (times[i] < ActualTime) {
        document.getElementById(TimeEvents[i]).className = "past"
    }
    else if (times[i] > ActualTime) {
        document.getElementById(TimeEvents[i]).className = "future"
    }

}

document.getElementById("8am").addEventListener("click", function (event) {
    console.log(document.getElementById("EightAm").value)
    event.preventDefault();
    var timeSave = document.getElementById("EightAm").value;
    localStorage.setItem("EightAm", JSON.stringify(timeSave));
    alert("Appointment saved to local storage");
});

document.getElementById("9am").addEventListener("click", function (event) {
    console.log(document.getElementById("NineAm").value)
    event.preventDefault();
    var timeSave = document.getElementById("NineAm").value;
    localStorage.setItem("NineAm", JSON.stringify(timeSave));
    alert("Appointment saved to local storage");
});

document.getElementById("10am").addEventListener("click", function (event) {
    console.log(document.getElementById("TenAm").value)
    event.preventDefault();
    var timeSave = document.getElementById("TenAm").value;
    localStorage.setItem("TenAm", JSON.stringify(timeSave));
    alert("Appointment saved to local storage");
});

document.getElementById("11am").addEventListener("click", function (event) {
    console.log(document.getElementById("ElevenAm").value)
    event.preventDefault();
    var timeSave = document.getElementById("ElevenAm").value;
    localStorage.setItem("ElevenAm", JSON.stringify(timeSave));
    alert("Appointment saved to local storage");
});

document.getElementById("12pm").addEventListener("click", function (event) {
    console.log(document.getElementById("TwelvePm").value)
    event.preventDefault();
    var timeSave = document.getElementById("TwelvePm").value;
    localStorage.setItem("TwelvePm", JSON.stringify(timeSave));
    alert("Appointment saved to local storage");
});

document.getElementById("1pm").addEventListener("click", function (event) {
    console.log(document.getElementById("OnePm").value)
    event.preventDefault();
    var timeSave = document.getElementById("OnePm").value;
    localStorage.setItem("OnePm", JSON.stringify(timeSave));
    alert("Appointment saved to local storage");
});

document.getElementById("2pm").addEventListener("click", function (event) {
    console.log(document.getElementById("TwoPm").value)
    event.preventDefault();
    var timeSave = document.getElementById("TwoPm").value;
    localStorage.setItem("TwoPm", JSON.stringify(timeSave));
    alert("Appointment saved to local storage");
});

document.getElementById("3pm").addEventListener("click", function (event) {
    console.log(document.getElementById("ThreePm").value)
    event.preventDefault();
    var timeSave = document.getElementById("ThreePm").value;
    localStorage.setItem("ThreePm", JSON.stringify(timeSave));
    alert("Appointment saved to local storage");
});

document.getElementById("4pm").addEventListener("click", function (event) {
    console.log(document.getElementById("FourPm").value)
    event.preventDefault();
    var timeSave = document.getElementById("FourPm").value;
    localStorage.setItem("FourPm", JSON.stringify(timeSave));
    alert("Appointment saved to local storage");
});

function GettingStorage() {
    for (let i = 0; i < TimeEvents.length; i++) {
        var TextId = TimeEvents[i]; 
    var timeSaver = JSON.parse(localStorage.getItem(TextId));
    document.getElementById(TextId).innerHTML = timeSaver;
    }
}

GettingStorage();
