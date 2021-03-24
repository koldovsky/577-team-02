
const daysVal = document.querySelector('.time-count_days .time-count_val');
	const hoursVal = document.querySelector('.time-count_hours .time-count_val');
	const minutesVal = document.querySelector('.time-count_minutes .time-count_val');
	const secondsVal = document.querySelector('.time-count_seconds .time-count_val');

const endSale = new Date('June 01 2021 00:00:00');

function countDown(){
    const now = new Date();
    const letUntil = endSale - now;


let days = Math.floor(letUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(letUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(letUntil / 1000 / 60) % 60;
		let seconds = Math.floor(letUntil / 1000) % 60;

        daysVal.innerHTML = days;
		hoursVal.innerHTML =	hours;
		minutesVal.innerHTML = minutes;
		secondsVal.innerHTML = seconds;
}

        setInterval(countDown, 1000);