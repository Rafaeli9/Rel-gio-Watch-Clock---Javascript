const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const textHour = document.getElementById('text-hour');
const textMinutes = document.getElementById('text-minutes');
const dateWeek = document.getElementById('date-day-week');
const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const dateYear = document.getElementById('date-year');

function toggleClass(){
  const body = document.querySelector('body');
  body.classList.toggle('light');
}

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

const clockText = () =>{
  let date = new Date()

  let hh = date.getHours(),
      mm = date.getMinutes(),
      day = date.getDate(),
      dayweek = date.getDay(),
      month = date.getMonth(),
      year = date.getFullYear()

//Detect when it's 0 AM and transform to 12 AM
if(hh == 0){hh = 12}
// Show a zero before hours
if(hh < 10){hh = `0${hh}`}
// Show time
textHour.innerHTML = `${hh}:`
// Show a zero before the minutes
if(mm < 10){mm = `0${mm}`}
// Show minutes
textMinutes.innerHTML = mm

// Day of the week and show it
let week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
//Get the months of the year and show it
let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Set', 'Out', 'Nov', 'Dez']
//Show the day, the month and the year
dateDay.innerHTML = day
dateWeek.innerHTML = `${week[dayweek]}`
dateMonth.innerHTML = `${months[month]},`
dateYear.innerHTML = year
}
setInterval(clockText, 1000)