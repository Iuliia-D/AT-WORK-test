"use strict";

const DATA = [
  {
    id: "id001",
    type: "task",
    date: 10,
    name: "Сделать что-то",
    price: 50900,
    days: "20 дней",
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "Тип здания: одноэтапное",
    visible: "",
    public: "горящее",
    toArchive: false,
  },
  {
    id: "id002",
    type: "buy",
    date: 30,
    name: "Куплю планшет Samsung",
    price: 10000,
    days: "20 дней",
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "",
    visible: "всем зарегистрированным",
    public: "премиум",
    toArchive: false,
  },
  {
    id: "id003",
    type: "sale",
    date: 17,
    name: "Продам кроссовки",
    price: 5000,
    days: "20 дней",
    adress: "Санкт-Петербург, ст. м. Маяковская",
    dsecription: "",
    visible: "всем зарегистрированным",
    public: "поднятие в топ",
    toArchive: false,
  },
  {
    id: "id004",
    type: "service",
    date: 5,
    name: "Художник",
    price: 70000,
    days: "20 дней",
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

// const displayCard = cards => {
//   // document.querySelector('.card').innerHTML = '';

//   return cards.forEach(item => {
//     document.querySelector('.card').innerHTML += `
//     <div class="card__wrapper">
//     <div class="card__slider">
//     <input type="checkbox" class="card__checkbox" name="${item.name}" id="${item.id}">
//     <div class="container">
//     <img src="img/user-1.jpg" alt="" class="img img-1 show">
//     <img src="img/user-2.jpg" alt="" class="img img-2">
//     <img src="img/user-3.jpg" alt="" class="img img-3">
//     <img src="img/user-2.jpg" alt="" class="img img-4">
// </div>
//     </input>

//   </div>

//   <div class="description">
//     <h3><a>${item.name}</a></h3>
//     <p>${item.price}</p>
//     <p>${item.date} число</p>
//     <p>${item.days}</p>
//     <p>${item.adress}</p>
//     <p>${item.dsecription}</p>
//     <p>Тип публикации: ${item.dsecription}</p>

//   </div>
//   </div>
//     `;
//   });
// };
// displayCard(cards);

const displayCard = (cards) => {
  // document.querySelector('.card').innerHTML = '';

  return cards.forEach((item) => {
    document.querySelector(".card").innerHTML += `
    <div class="card__wrapper">
    <div class="card__slider">
    <input type="checkbox" class="card__checkbox" name="${item.name}" id="${item.id}"> </input>
    <img src="img/user-1.jpg" alt="" class="img img-1 show">
    <img src="img/user-2.jpg" alt="" class="img img-2">
    <img src="img/user-3.jpg" alt="" class="img img-3">
    <img src="img/user-2.jpg" alt="" class="img img-4">
  </div>

  <div class="description">
    <h3><a>${item.name}</a></h3>
    <p>${item.price}</p>
    <p>${item.date} число</p>
    <p>${item.days}</p>
    <p>${item.adress}</p>
    <p>${item.dsecription}</p>
    <p>Тип публикации: ${item.dsecription}</p>

  </div>
  </div>
    `;
  });
};
displayCard(cards);

// const sortByDateUp = () => {
//   document.querySelector('.card').innerHTML = '';
//   // const cards = JSON.parse(JSON.stringify(arr));
//   cards.sort((a, b) => (a.date > b.date ? 1 : -1));

//   return displayCard(cards);
// };

const sortByDateDown = () => {
  document.querySelector(".card").innerHTML = "";
  // const cards = JSON.parse(JSON.stringify(arr));
  cards.sort((a, b) => (a.date > b.date ? -1 : 1));

  return displayCard(cards);
};

const sortByPriceUp = () => {
  document.querySelector(".card").innerHTML = "";
  // const cards = JSON.parse(JSON.stringify(arr));
  cards.sort((a, b) => (a.price > b.price ? 1 : -1));

  return displayCard(cards);
};

const sortByPriceDown = () => {
  document.querySelector(".card").innerHTML = "";
  // const cards = JSON.parse(JSON.stringify(arr));
  cards.sort((a, b) => (a.price > b.price ? -1 : 1));

  return displayCard(cards);
};

// document.getElementById('date_up').addEventListener('click', () => {
//   sortByDateUp(cards);
// });
document.getElementById("date_up").addEventListener("click", () => {
  document.querySelector(".card").innerHTML = "";
  cards.sort((a, b) => (a.date > b.date ? 1 : -1));
  return displayCard(cards);
});

document.getElementById("date_down").addEventListener("click", () => {
  sortByDateDown(cards);
  console.log(cards);
});

document.getElementById("price_up").addEventListener("click", () => {
  sortByPriceUp(cards);
});
document.getElementById("price_down").addEventListener("click", () => {
  sortByPriceDown(cards);
});

////////////////////////////////////
// CHECKBOXES

const cardCheckbox = Array.from(document.querySelectorAll(".card__checkbox"));
const cardCheckAll = document.querySelector(".check-all");

const cardsParant = document.querySelector(".card");
const archiveButton = document.querySelector(".to-archive");

console.log(cardsParant.children[1].children[0].children[0].id);

let toArchive = [];
const chekedCard = cardCheckbox.map((item) => {
  archiveButton.addEventListener("click", () => {
    item.checked
      ? (item.parentElement.parentElement.style.display = "none") &&
        toArchive.push(item.id)
      : "";
    console.log(toArchive);
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
console.log(toArchive);

////////////////////////////////////
// SELECTION

let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  // selectItem.forEach(item => {
  //   item.addEventListener('click', selectChoose);
  // });
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

  // function selectChoose() {
  //   let text = this.innerText,
  //     select = this.closest('.select'),
  //     currentText = select.querySelector('.select__current');
  //   currentText.innerText = text;
  //   select.classList.remove('is-active');
  // }
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
