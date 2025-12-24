const titre = document.querySelector("#titre");

function updateCountdown() {
  const today = new Date();
  const thisYear = today.getFullYear();
  let date = new Date(thisYear, 11, 31);
  const dateFormat = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const timeDiff = date - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText = `J-${daysLeft}`;

  titre.innerText = "Jours restants avant le " + dateFormat + " :";
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
