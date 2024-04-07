"use strict";

/* MINI BD */
const products = [
  {
    id: "france",
    title: "Охота Амура",
    descr: "Холст, масло (50х80)",
    author: "Марсель Руссо",
    price: "14 500",
    img: "img/item-art/03.jpg",
  },
  {
    id: "france",
    title: "Дама с собачкой",
    descr: "Акрил, бумага (50х80) ",
    author: "Анри Селин",
    price: "16 500",
    img: "img/item-art/03(1).jpg",
  },
  {
    id: "france",
    title: "Процедура",
    descr: "Цветная литография (40х60) ",
    author: "Франсуа Дюпон",
    price: "20 000",
    img: "img/item-art/03(2).jpg",
  },
  {
    id: "france",
    title: "Роза",
    descr: "Бумага, акрил (50х80) ",
    author: "Луи Детуш",
    price: "12 000",
    img: "img/item-art/03(3).jpg",
  },
  {
    id: "france",
    title: "Птичья трапеза",
    descr: "Цветная литография (40х60) ",
    author: "Франсуа Дюпон",
    price: "22 500",
    img: "img/item-art/03(4).jpg",
  },
  {
    id: "france",
    title: "Пейзаж с рыбой",
    descr: "Цветная литография (40х60) ",
    author: "Пьер Моранж",
    price: "20 000",
    img: "img/item-art/03(5).jpg",
  },
  {
    id: "germany",
    title: "Над городом",
    descr: "Цветная литография (40х60)",
    author: "Курт Вернер",
    price: "16 000",
    img: "./img/item-art/germany/03.jpg",
  },
  {
    id: "germany",
    title: "Птенцы",
    descr: "Холст, масло (50х80)",
    author: "Макс Рихтер",
    price: "14 500",
    img: "./img/item-art/germany/03(1).jpg",
  },
  {
    id: "germany",
    title: "Среди листьев",
    descr: "Цветная литография (40х60)",
    author: "Мартин Майер",
    price: "20 000",
    img: "./img/item-art/germany/03(2).jpg",
  },
  {
    id: "germany",
    title: "Яркая птица",
    descr: "Цветная литография (40х60)",
    author: "Мартин Майер",
    price: "13 000",
    img: "./img/item-art/germany/03(3).jpg",
  },
  {
    id: "germany",
    title: "Дятлы",
    descr: "Бумага, акрил (50х80)",
    author: "Мартин Майер",
    price: "20 000",
    img: "./img/item-art/germany/03(4).jpg",
  },
  {
    id: "germany",
    title: "Большие воды",
    descr: "Бумага, акрил (50х80)",
    author: "Вальтер Хартманн",
    price: "23 000",
    img: "./img/item-art/germany/03(5).jpg",
  },
  {
    id: "england",
    title: "Дикий зверь",
    descr: "Акварель, бумага (50х80)",
    author: "Пол Смит",
    price: "19 500",
    img: "./img/item-art/england/03.jpg",
  },
  {
    id: "england",
    title: "Джон Уайт",
    descr: "Цветная литография (40х60)",
    author: "Джон Уайт",
    price: "17 500",
    img: "./img/item-art/england/03(1).jpg",
  },
  {
    id: "england",
    title: "Река и горы",
    descr: "Акварель, бумага (50х80)",
    author: "Джим Уотсон",
    price: "20 500",
    img: "./img/item-art/england/03(2).jpg",
  },
  {
    id: "england",
    title: "Белый попугай",
    descr: "Цветная литография (40х60)",
    author: "Юджин Зиллион",
    price: "15 500",
    img: "./img/item-art/england/03(3).jpg",
  },
  {
    id: "england",
    title: "Ночная рыба",
    descr: "Бумага, акрил (50х80)",
    author: "Эрик Гиллман",
    price: "12 500",
    img: "./img/item-art/england/03(4).jpg",
  },
  {
    id: "england",
    title: "Рыжий кот",
    descr: "Цветная литография (40х60)",
    author: "Альфред Барр",
    price: "21 000",
    img: "./img/item-art/england/03(5).jpg",
  },
];

const navFlags = document.querySelectorAll(".btn-prod");
const prod = document.querySelector("#products");
const btnProdActive = document.querySelector(".btn-prod.active");

navFlags.forEach((navFlag) => {
  navFlag.addEventListener("click", () => {
    clearActiveNavFlag();
    navFlag.classList.add("active");
  });
});

function clearActiveNavFlag() {
  navFlags.forEach((navFlag) => {
    navFlag.classList.remove("active");
  });
}

// for (let i = 0; i < btnProdActive.classList.length; i++) {
//   if (btnProdActive.classList[i] == "active") {
//     prods(products, btnProdActive);
//   }
// }
btnProdActive.classList.forEach((i) => {
  if (i == "active") {
    prods(products, btnProdActive);
  }
});
navFlags.forEach((link) => {
  link.addEventListener("click", () => {
    prod.innerHTML = "";
    prods(products, link);
  });
});
function prods(items, links) {
  items.forEach((item) => {
    if (links.id == item.id) {
      const liChild = document.createElement("li");
      liChild.classList.add('class="col-md-1');
      liChild.innerHTML = `
      <div class="protuction-wrap-item">
        <h3 class="protuction-item--title">${item.title}</h3>
        <img
          class="protuction-item--img"
          src="${item.img}"
          alt="" />
        <p class="protuction-item--desrc">${item.descr}</p>
        <p class="protuction-item--author">
          <cite>${item.author}</cite>
        </p>
        <p class="protuction-item--price">${item.price} руб</p>
        <button class="btn">В корзину</button>
      </div>
      `;
      prod.appendChild(liChild);
    }
  });
}

// navFlags.forEach((link) => {
//   link.addEventListener("click", () => {
//     prod.innerHTML = "";
//     products.forEach((item) => {
//       if (link.id == item.id) {
//         const liChild = document.createElement("li");
//         liChild.classList.add('class="col-md-1');
//         liChild.innerHTML = `
//         <div class="protuction-wrap-item">
//           <h3 class="protuction-item--title">${item.title}</h3>
//           <img
//             class="protuction-item--img"
//             src="${item.img}"
//             alt="" />
//           <p class="protuction-item--desrc">${item.descr}</p>
//           <p class="protuction-item--author">
//             <cite>${item.author}</cite>
//           </p>
//           <p class="protuction-item--price">${item.price} руб</p>
//           <button class="btn">В корзину</button>
//         </div>
//         `;
//         prod.appendChild(liChild);
//       }
//     });
//   });
// });

// function createProdElement(product) {
//   if (product.id > 0) {
//     const liChild = document.createElement("li");
//     liChild.classList.add('class="col-md-1');

//     liChild.innerHTML = `

//     <div class="protuction-wrap-item">
//       <h3 class="protuction-item--title">${product.title}</h3>
//       <img
//         class="protuction-item--img"
//         src="${product.img}"
//         alt="" />
//       <p class="protuction-item--desrc">${product.descr}</p>
//       <p class="protuction-item--author">
//         <cite>${product.author}</cite>
//       </p>
//       <p class="protuction-item--price">${product.price} руб</p>
//       <button class="btn">В корзину</button>
//     </div>

//     `;

//     prod.appendChild(liChild);
//   }
// }

// function displayProducts(products) {
//   products.forEach((product) => {
//     createProdElement(product);
//   });
// }

// displayProducts(products);
