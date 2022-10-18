"use strict";

//modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener("click", openModal);
  btnClose.addEventListener("click", closeModel);
  overlay.addEventListener("click", closeModel);

  //keypress

  document.addEventListener("keydown", function (e) {
    console.log(e.key);

    //press on escape and if class does not contain hidden, close the container
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModel();
    }
  });
}

//array destructuring

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },

  fri: {
    open: 11,
    close: 23,
  },

  sat: {
    open: 0,
    close: 24,
  },
};

const retaurant = {
  name: "mamoo",
  location: "Quatres Bornes",
  categories: ["Italian", "pizzeria", "vegetarian", "organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //access object into object
  openingHours,

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "20:00",
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//optional chaining (returns underfined if a property does not exist)
console.log(retaurant.openingHours.mon?.open);

//object literrals

retaurant.orderDelivery({
  time: "22:30",
  address: "stanley rose-hill",
  mainIndex: 2,
  starterIndex: 2,
});

retaurant.orderDelivery({
  address: "Rose-hill",
  startIndex: 1,
});

//spread operator
const newMenu = [...retaurant.mainMenu, "pasta"];
console.log(newMenu);

//join 2 arrays
const mainMenuCopy = [...retaurant.starterMenu, ...retaurant.mainMenu];

console.log(mainMenuCopy);

//looping array es6 for-of-loop

for (const item of mainMenuCopy) console.log(item);

//entries method display each item in an array with their index.
for (const item of mainMenuCopy.entries()) {
  console.log(item);
}

console.log(retaurant.order(2, 0));

//array destructuring

let [main, secondary] = retaurant.categories;

[main, secondary] = [secondary, main];

console.log(main, secondary);

const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

console.log(i, j, k);

//set default values:

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//object destructuring

//assign variables
let a = 111;
let b = 280;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};

//destructure objects (access property of objects)
({ a, b } = obj);
console.log(a, b);

//const { name, openingHours, categories } = retaurant;
//console.log(name, openingHours, categories);

//destructure nested objects
const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

//spread operator (concatenate multiple array values) (right hand side)

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);

//iterables are arrays strings maps and sets but not objects.

//spread using string

const str = "shi";

const letters = [...str, " ", "s."];
console.log(letters);

//REST (pack element in an array) (left hand side)
const [c, d, ...others] = [1, 2, 3, 4, 5];
//select first 2 values and others stay in the array
console.log(c, d, others);

//nullish coalesing operator (access the falsy values for or operator)
retaurant.numGuests = 0;
const guest = retaurant.numGuests ? retaurant.numGuests : 10;
console.log(guest);

const guessCorrect = retaurant.numGuests ?? 10;
console.log(guessCorrect);

console.log(retaurant);

//looping in objects

const properties = Object.keys(openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

//property values
const values = Object.values(openingHours);

console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

const orderSet = new Set([
  "pasta",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
  "linguini",
]);

console.log(orderSet); //set remove duplicates values in array (no index in sets)

console.log(orderSet.size);

console.log(orderSet.has("pizza"));

console.log(orderSet.add("bread"));

console.log(new Set("Jonas"));

console.log(orderSet.delete("bread"));

console.log(orderSet);

//orderSet.clear() delete all elements in set

//loop in the set

for (const order of orderSet) {
  console.log(order);
}

//maps data structure to map value to keys and add elements using set
const rest = new Map();
rest.set("name", "cozy burger");
rest.set(1, "Italy");
console.log(rest.set(2, "portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "vegetarian", "organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "we are closed");

console.log(rest.get("name"));

console.log(rest.get(true));

console.log(rest.get("12"));

const question = new Map([
  ["question", "What is the best programming?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
]);

console.log(question);

//convert object to map
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

//loop in map
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

//convert map to array

console.log([...question]);

console.log([...question.keys()]);

console.log([...question.values()]);

const airline = "Tap Air Portugal";

console.log(airline.length);
