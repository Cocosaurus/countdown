const titre = document.querySelector("#titre");

function updateCountdown() {
  const today = new Date();
  const thisYear = today.getFullYear();
  let date = new Date(thisYear, 11, 31); //

  const timeDiff = date - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText = `J-${daysLeft}`;

  // titre.innerText = '' + date;
  console.log(date);
}

updateCountdown();

document.addEventListener("DOMContentLoaded", () => {
  const TITLES = ["❗", "❓"];

  let index = 0;

  setInterval(() => {
    document.title = TITLES[index];
    index = (index + 1) % TITLES.length;
  }, 10000);
});
