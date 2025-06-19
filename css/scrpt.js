const image = document.getElementById("mainImage");
const countryName = document.getElementById("countryName");
const historyText = document.getElementById("historyText");
const progress = document.getElementById("progress");
const miniImages = document.querySelectorAll(".mini-images img");

const names = [
  "Британські острови",
  "Англія",
  "Англія з Уельсом",
  "Велика Британія",
  "Сполучене Королівство",
  "Сучасна Британія",
  "Сучасна Британія",
  "Сучасна Британія",
  "Сучасна Британія"
];

let index = 0;

function updateView() {
  // Апдейт картинки
  image.src = `img/UK0${index === 0 ? "" : index}.svg`;
  // Апдейт назв і текстів
  countryName.textContent = names[index];
  historyText.textContent = `Поточний стан: ${names[index]}`;
  // Апдейт прогрес-бару
  progress.style.width = `${(index / (names.length - 1)) * 100}%`;

  // Підсвічування активної мініатюри
  miniImages.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

// Кнопки вперед/назад
document.getElementById("backButton").addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateView();
  }
});
document.getElementById("forwardButton").addEventListener("click", () => {
  if (index < names.length - 1) {
    index++;
    updateView();
  }
});

// Клік по мініатюрах
miniImages.forEach((img) => {
  img.addEventListener("click", () => {
    index = parseInt(img.dataset.index);
    updateView();
  });
});

// Запускаємо одразу, щоб все по поличках стало
updateView();
