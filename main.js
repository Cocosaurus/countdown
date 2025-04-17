function updateCountdown() {
      const today = new Date();
      const thisYear = today.getFullYear();
      let birthday = new Date(thisYear, 9, 24); //

      const timeDiff = birthday - today;
      const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      document.getElementById('countdown').innerText = `J-${daysLeft}`;
    }

    updateCountdown();
    // setInterval(updateCountdown, 1000 * 60 * 60); // mise à jour toutes les heures