'use strict'

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;// how many thousandths are 1 second?
var cron;

// start the timer
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

// stop the timer but it doesn't clear the variables
function pause() {
    clearInterval(cron);
}

// stop the timer and clears the variables
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

// counts the time and display
function timer() {
    ss++; // increments +1 in the ss variable

    if (ss == 60) { // check if 59 seconds
        ss = 0; // reset seconds to 0
        mm++; // add +1 to mm variable

        if (mm == 60) { // check if 59 minutes
            mm = 0;// reset the minutes to 0
            hh++;// add +1 to time variable
        }
    }

    // creates a variable with the treated value HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    // inserts the treated value in the counter element
    document.getElementById('counter').innerText = format;

    // returns the treated value
    return format;
}