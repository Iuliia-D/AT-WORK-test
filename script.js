"use strict";

const DATA = [
  {
    id: "id001",
    date: "2022-11-10",
    name: "Сделать что-то",
    price: 50900,
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "Тип здания: одноэтажное",
    visible: "всем зарегистрированным",
    public: "горящее",
    img: "img/Frame406.png",
  },
  {
    id: "id002",
    date: "2022-11-30",
    name: "Куплю планшет Samsung",
    price: 10000,
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "",
    visible: "всем зарегистрированным",
    public: "премиум",
    img: "img/nout.png",
  },
  {
    id: "id003",
    date: "2022-11-17",
    name: "Продам кроссовки",
    price: 5000,
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "",
    visible: "всем зарегистрированным",
    public: "поднятие в топ",
    img: "img/boots.png",
  },
  {
    id: "id004",
    date: "2022-11-05",
    name: "Художник",
    price: 70000,
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "",
    visible: "открытая",
    public: "бесплатно",
    img: "img/user-1.jpg",
  },
];

////////////////////////////////////
// CARDS DISPLAY

const cards = JSON.parse(JSON.stringify(DATA)); // Получаем массив с копией данных
console.log(cards);

// Отображаем массив в виде разметки
function displayCard(cards) {
  return cards.forEach((item) => {
    document.querySelector(".card").innerHTML += `
    <div class="card__wrapper">
    <div class="card__slider">
    <input type="checkbox" class="card__checkbox" name="${item.name}" id="${item.id}"> </input>
    <img src="${item.img}" alt="" class="img img-1 show">
    <img src="img/user-2.jpg" alt="" class="img img-2">
    <img src="img/user-3.jpg" alt="" class="img img-3">
    <img src="img/user-2.jpg" alt="" class="img img-4">
  </div>

  <div class="description">
    <h3><a>${item.name}</a></h3>
    <p class="price">${item.price} ₽</p>
    <p>Дата публикации: ${item.date}</p>
    <p>${item.adress}</p>
    <p>Видимость: ${item.visible}</p>
    <p>${item.dsecription}</p>
    <p>Тип публикации: ${item.public}</p>
  </div>

  <div class="assets">
  <div class="stats-wrapper">
  <div class="stats--feedback"><p class="assets--text">Отклики</p></div>
  <div class="stats--view"><p class="assets--text">211 просмотров</p></div>
  <div class="stats--favorites"><p class="assets--text">В избранном</p></div>
  <div class="stats--recommend"><p class="assets--text">Подходят</p></div>
  <div class="stats--fill">
  <div class="stats--fill-track">
  <div class="stats--fill-track-content"></div>
  </div>
  <p class="stats--fill-value"> 48%</p>
  </div>
  </div>
 
  <div class="board-btns-wrapper">
  <button class="board-btn board-btn--1"></button>
  <button class="board-btn board-btn--2"></button>
  <button class="board-btn board-btn--3"></button>
  <button class="board-btn board-btn--4"></button>
  </div>
  </div>
  

  </div>

    `;
  });
}

displayCard(cards);

// Сортировка по дате / цене
document.getElementById("date_up").addEventListener("click", () => {
  document.querySelector(".card").innerHTML = "";
  cards.sort((a, b) => (a.date > b.date ? 1 : -1));
  return displayCard(cards);
});

document.getElementById("date_down").addEventListener("click", () => {
  document.querySelector(".card").innerHTML = "";
  cards.sort((a, b) => (a.date > b.date ? -1 : 1));
  return displayCard(cards);
});

document.getElementById("price_up").addEventListener("click", () => {
  document.querySelector(".card").innerHTML = "";
  cards.sort((a, b) => (a.price > b.price ? 1 : -1));
  return displayCard(cards);
});
document.getElementById("price_down").addEventListener("click", () => {
  document.querySelector(".card").innerHTML = "";
  cards.sort((a, b) => (a.price > b.price ? -1 : 1));
  return displayCard(cards);
});

////////////////////////////////////
// CHECKBOXES

const cardCheckbox = document.querySelectorAll(".card__checkbox"); // каждый отдельный чекбокс на карточке
const cardCheckAll = document.querySelector(".check-all"); // чекбокс "выделить все"
const archiveButton = document.querySelector(".to-archive"); // кнопка "в архив"

let checkedCardsIds = [];

// Если чекбокс на карточке выбран, скрыть карточку.
// И добавить его ID в массив checkedCardsIds
function isChecked() {
  cardCheckbox.forEach(
    (el) =>
      el.checked &&
      (el.parentElement.parentElement.style.display = "none") &&
      cards.map((card) => card.id !== el.id) &&
      checkedCardsIds.push(el.id) &&
      console.log(checkedCardsIds)
  );
}

archiveButton.addEventListener("click", isChecked);

//////////// CHECK ALL /////////////
// Если чекбокс "выделить все" выбран, выбрать все остальные.
function checkAll() {
  if (cardCheckAll.checked == true) {
    cardCheckbox.forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    cardCheckbox.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
}

cardCheckAll.addEventListener("click", checkAll);

////////////////////////////////////
// SELECTION

let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", () => {
      let text = item.innerText;
      let select = item.closest(".select");
      let currentText = select.querySelector(".select__current");
      currentText.innerText = text;
      select.classList.remove("is-active");
    });
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }
};

select();

///////////////////////////////////////
// Slider
const sliders = Array.from(document.querySelectorAll(".card__wrapper"));

let counter = 1;

sliders.map((slider) => {
  slider.addEventListener("mouseover", () => {
    const goSlide = setInterval(() => {
      slider.querySelector(".img.show").classList.remove("show");
      const img = slider.querySelector(`.img-${counter}`);
      img.classList.add("show");
      counter++;

      if (counter > 4) {
        counter = 1;
      }
    }, 3000);
    slider.addEventListener("mouseout", () => {
      clearInterval(goSlide);
    });
  });
});
