document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    $("#loader").fadeOut("slow");
    document.body.classList.remove("hide-scroll");
  }, 1000);

  const openShopping = document.querySelector(".shopping");
  const closeShopping = document.querySelector(".closeShopping");
  const list = document.querySelector(".list");
  const listCard = document.querySelector(".listCard");
  const total = document.querySelector(".total");
  const body = document.querySelector("body");
  const main = document.querySelector("containerMain");
  const quantity = document.querySelector(".quantity");
  const logoRecomend = document.querySelector(".logoReco");
  const mainGround = document.querySelector(".containerMain");
  const backgrounds = document.querySelector(".background");

  openShopping.addEventListener("click", () => {
    body.classList.add("active");
    openShopping.classList.add("hidden");
    logoRecomend.classList.add("moveL");
    mainGround.classList.add("moveG");
    backgrounds.classList.add("backG");
  });

  closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
    openShopping.classList.remove("hidden");
    logoRecomend.classList.remove("moveL");
    mainGround.classList.remove("moveG");
    backgrounds.classList.remove("backG");
  });

  let products = [
    {
      id: 1,
      name: "PRODUCT 1",
      image: "1.png",
      price: 2000,
    },
    {
      id: 2,
      name: "PRODUCT 2",
      image: "2.png",
      price: 2200,
    },
    {
      id: 3,
      name: "PRODUCT 3",
      image: "3.png",
      price: 1800,
    },
    {
      id: 4,
      name: "PRODUCT 4",
      image: "4.png",
      price: 1600,
    },
    {
      id: 5,
      name: "PRODUCT 5",
      image: "5.png",
      price: 2800,
    },
    {
      id: 6,
      name: "PRODUCT 6",
      image: "6.png",
      price: 4000,
    },
  ];

  let listCards = [];

  const initApp = () => {
    products.forEach((value, key) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
            <img src="https://naveax-shop.vercel.app/images/img${
              value.image
            }" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
        `;
      list.appendChild(newDiv);
    });
  };

  const addToCard = (key) => {
    if (listCards[key] == null) {
      listCards[key] = JSON.parse(JSON.stringify(products[key]));
      listCards[key].quantity = 1;
    } else {
      listCards[key].quantity += 1;
    }

    reloadCard();
  };

  const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
      if (value != null) {
        totalPrice += value.price * value.quantity;
        count += value.quantity;

        let newDiv = document.createElement("li");
        newDiv.innerHTML = `
                <div class="img-container"> <img src="https://naveax-shop.vercel.app/images/img${
                  value.image
                }" alt="${value.name}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${(
                  value.price * value.quantity
                ).toLocaleString()}</div>
                <div>
                    <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${key}, ${
          value.quantity - 1
        })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${key}, ${
          value.quantity + 1
        })">+</button>
                </div>
            `;
        listCard.appendChild(newDiv);
      }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
  };

  const changeQuantity = (key, quantity) => {
    if (quantity <= 0) {
      delete listCards[key];
    } else {
      listCards[key].quantity = quantity;
    }

    reloadCard();
  };

  initApp();
});
