const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const days = document.querySelector('.days');

const curentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${curentYear + 1} 00:00:00`);

function padNumber(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return '' + num;
  }
}

function updateCountDown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  seconds.innerText = padNumber(s);
  minutes.innerText = padNumber(m);
  hours.innerText = padNumber(h);
  days.innerText = padNumber(d);
}

setInterval(updateCountDown, 1000);
