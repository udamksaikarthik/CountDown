var stopTime;
const displayAnimation = document.getElementById("displayAnimation");
const formEl = document.getElementById("formJS");

formEl.addEventListener('submit',function(event){
    event.preventDefault();
})

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

    console.log("Entered Date:"+enteredDate);
    const convertToDate = new Date(enteredDate);
    console.log("converted Date:"+convertToDate);
    const dateEn = convertToDate.getDate();
    const monthEn = convertToDate.getMonth();
    const yearEn = convertToDate.getFullYear();
    const monthsEn = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
    console.log("dateEn:"+dateEn+",MonthEn:"+monthsEn[monthEn]+",YearEN:"+yearEn);

    const ConveretedDate = dateEn+"-"+monthsEn[monthEn]+"-"+yearEn;

    const finalDateConv = new Date(ConveretedDate);

    console.log("Final Date:"+finalDateConv);

    const todayDate = new Date();
    const diffDates = finalDateConv - todayDate;
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

