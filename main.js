const description = `Hej, jestem Daria. Mam 23 lata i uczę się front-end'u. Cechuje mnie
duża upartość w dążeniu do celu i spory dystans do siebie. Lubię się
śmiać i staram się być pozytywną osobą. W wolnych chwilach próbuję
wszystkiego, żegluje, chodzę po linach, gram w gry komputerowe i
planszowe, jeżdżę na nightdrivy, chodzę na siłownie, czytam książki,
oglądam seriale i wszystko co tylko wpadnie mi do głowy. Aktualnie
jestem na kursie "junior front-ed developer" i chętnie odbędę u kogoś
staż.`;

let descriptionContainer = document.querySelector(".description");
let number = 0;
let index = 0;
const cursor = document.querySelector(".cursor");

const cursorAnimation = setInterval(
  () => cursor.classList.toggle("un__active"),
  500
);

const writing = setInterval(() => {
  if (number < description.length) {
    number++;
    descriptionContainer.textContent =
      descriptionContainer.textContent + description[index];
    index++;
  }
}, 60);
