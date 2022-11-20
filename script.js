"use strict";

const DATA = [
  {
    id: "id001",
    date: 10,
    name: "Сделать что-то",
    price: 50900,
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "Тип здания: одноэтажное",
    visible: "",
    public: "горящее",
    toArchive: false,
  },
  {
    id: "id002",
    date: 30,
    name: "Куплю планшет Samsung",
    price: 10000,
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "",
    visible: "всем зарегистрированным",
    public: "премиум",
    toArchive: false,
  },
  {
    id: "id003",
    date: 17,
    name: "Продам кроссовки",
    price: 5000,
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "",
    visible: "всем зарегистрированным",
    public: "поднятие в топ",
    toArchive: false,
  },
  {
    id: "id004",

    date: 5,
    name: "Художник",
    price: 70000,
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "",
    visible: "открытая",
    public: "бесплатно",
    toArchive: false,
  },
];

////////////////////////////////////
// CARDS DISPLAY

const cards = JSON.parse(JSON.stringify(DATA));
console.log(cards); // Получаем массив

// const sortCards = (cards) => {
//   document.querySelectorAll(".select__item").forEach((el) => {
//     el.addEventListener("click", (event) => {
//       const target = event.target;
//       if (target.id === "date_up") {
//         cards.sort((a, b) => (a.date > b.date ? 1 : -1));
//         console.log(target.id, cards);
//       } else if (target.id === "date_down") {
//         cards.sort((a, b) => (a.date > b.date ? -1 : 1));
//         console.log(target.id, cards);
//       } else if (target.id === "price_up") {
//         cards.sort((a, b) => (a.price > b.price ? 1 : -1));
//         console.log(target.id, cards);
//       } else if (target.id === "price_down") {
//         cards.sort((a, b) => (a.price > b.price ? -1 : 1));
//         console.log(target.id, cards);
//       } else "";
//     });
//   });
//   return cards;
// };
// sortCards(cards);

displayCard(cards);

function displayCard(cards) {
  // document.querySelector(".card").innerHTML = "";
  console.log(cards);

  return cards.forEach((item) => {
    document.querySelector(".card").innerHTML += `
    <div class="card__wrapper">
    <div class="card__slider">
    <input type="checkbox" class="card__checkbox" name="${item.name}" id="${
      item.id
    }"> </input>
    <img src="img/user-1.jpg" alt="" class="img img-1 show">
    <img src="img/user-2.jpg" alt="" class="img img-2">
    <img src="img/user-3.jpg" alt="" class="img img-3">
    <img src="img/user-2.jpg" alt="" class="img img-4">
  </div>

  <div class="description">
    <h3><a>${item.name}</a></h3>
    <p>${item.price}</p>
    <p>${item.date} ноября</p>
    <p>${30 - item.date} дней</p>
    <p>${item.adress}</p>
    <p>${item.dsecription}</p>
    <p>Тип публикации: ${item.public}</p>

  </div>
  </div>
    `;
  });
}

// const sortByDateUp = () => {
//   document.querySelector(".card").innerHTML = "";
//   // const cards = JSON.parse(JSON.stringify(arr));
//   cards.sort((a, b) => (a.date > b.date ? 1 : -1));

//   return displayCard(cards);
// };

// const sortByDateDown = () => {
//   document.querySelector(".card").innerHTML = "";
//   cards.sort((a, b) => (a.date > b.date ? -1 : 1));
//   return displayCard(cards);
// };

// const sortByPriceUp = () => {
//   document.querySelector(".card").innerHTML = "";
//   cards.sort((a, b) => (a.price > b.price ? 1 : -1));
//   return displayCard(cards);
// };

// const sortByPriceDown = () => {
//   document.querySelector(".card").innerHTML = "";
//   cards.sort((a, b) => (a.price > b.price ? -1 : 1));
//   return displayCard(cards);
// };

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

const cardCheckbox = Array.from(document.querySelectorAll(".card__checkbox"));
const cardCheckAll = document.querySelector(".check-all");

// const cardsParant = document.querySelector(".card");
// const cardsChildren = Array.from(cardsParant.children);
// console.log(cardsChildren);
const archiveButton = document.querySelector(".to-archive");

// console.log(cardsParant.length);
// console.log(cardsParant.children[0].children[0].children[0].checked);

let toArchive = [];
const chekedCard = cardCheckbox.map((item) => {
  archiveButton.addEventListener("click", () => {
    item.checked
      ? (item.parentElement.parentElement.style.display = "none") &&
        toArchive.push(item.id) &&
        console.log(toArchive)
      : "";
  });
});

cardCheckAll.addEventListener("click", checkAll);

function checkAll() {
  if (cardCheckAll.checked == true) {
    cardCheckbox.forEach((checkbox) => {
      checkbox.checked = true;
      toArchive.push(checkbox.id);
    });
  } else {
    cardCheckbox.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
}

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
