var totalBill = 0;
var h1Element = document.createElement("h1");
document.body.appendChild(h1Element);
h1Element.innerText = "Grocery Store Shopping List";
h1Element.style.margin = "auto";
h1Element.style.textAlign = "center";

var divElement = document.createElement("div");
// divElement.style.backgroundColor = "tan";
// divElement.style.height = "600px";
divElement.style.width = "200px";
document.body.appendChild(divElement);


var GrocList = [
  {
    name: "pizza",
    price:5
  },
  {
    name: "milk",
    price:3
  },
  {
    name: "bread",
    price:2
  },
  {
    name: "cookies",
    price:3
  },
  {
    name: "eggs",
    price:2
  },
  {
    name: "donuts",
    price:3
  },
  {
    name: "ice cream",
    price: 4
  },
  {
    name: "cereal",
    price:10
  },
  {
    name: "bananas",
    price:20
  },
  {
    name: "pears",
    price:12
  }
];


GrocList.forEach(function(item) {
  // console.log(item.name);
  // console.log(item.price);
  var itemName = document.createElement("ol");
  itemName.innerText = item.name;
  divElement.appendChild(itemName);

  var itemPrice = document.createElement("ol");
  itemPrice.innerText = item.price;
  divElement.appendChild(itemPrice);
  itemPrice.style.textAlign = "right"
})


var total = 0
var pay = "Your subtotal is "
var pay2 = "Your total is "
var tax = 1.06
GrocList.forEach(function(cost) {
  total += cost.price
})

var totalElement = document.createElement("p");
totalElement.innerText = pay2 + total * tax + " dollars";
divElement.appendChild(totalElement);

console.log(pay + total + " dollars");
console.log(pay2 + total * tax + " dollars")
