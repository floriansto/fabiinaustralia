function countdown() {
    const endDate = new Date("May 1, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    distance = endDate - now;
    text = "Zeit, bis Fabi nach Australien geht"

    if (distance < 0) {
      distance = -distance;
      text = "Zeit, die Fabi in Australien ist"
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
    document.getElementById("heading").innerHTML = text;
}

setInterval(countdown, 1000);

