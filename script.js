
let currentDayElement = document.getElementById('currentDay');
let currentTimeElement = document.getElementById('currentTime');

function updateDayTime() {
  const today = new Date();
  const day = today.getUTCDay();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  currentDayElement.textContent = daysOfWeek[day];

  let hour = today.getUTCHours();
  let minute = today.getUTCMinutes();
  let second = today.getUTCSeconds();
  let ampm = (hour >= 12)? " PM" : " AM";

  hour = (hour > 12)? hour - 12 : hour;
  if (hour === 0) {
    hour = 12;
  }

  currentTimeElement.textContent = `${hour} : ${minute} : ${second}${ampm}`;
}

updateDayTime();
setInterval(updateDayTime, 1000); 