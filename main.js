function updateCountdown() {
	const today = new Date();
	const thisYear = today.getFullYear();
	let birthday = new Date(thisYear, 8, 24); //

	const timeDiff = birthday - today;
	const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
	document.getElementById('countdown').innerText = `J-${daysLeft}`;
}

updateCountdown();

document.addEventListener("DOMContentLoaded", () => {
	const TITLES = ["🚨","‼️"];

	let index = 0;

	setInterval(() => {
		document.title = TITLES[index];
		index = (index + 1) % titles.length;
	}, 30000);
});
 