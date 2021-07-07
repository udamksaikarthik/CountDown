var stopTime;
const displayAnimation = document.getElementById("displayAnimation");
function displayAnim(){
    displayAnimation.classList.toggle("active");
} 

function count(){
    stopTime = setInterval(countdown, 1000);
}

function stop(){
    clearInterval(stopTime);
}

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function countdown(){
    const enteredDate = document.getElementById('date').value;
    const convertToDate = new Date(enteredDate);
    console.log(convertToDate);
    const todayDate = new Date();
    const diffDates = convertToDate - todayDate;
    console.log(diffDates);

    const totalTime = diffDates/1000;
    const days = Math.floor(totalTime/3600/24);
    const hours = Math.floor(totalTime/3600)%24;
    const mins = Math.floor(totalTime/60)%60;
    const seconds = Math.floor(totalTime)%60;
    console.log(days+" "+hours+" "+mins+" "+seconds);
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

