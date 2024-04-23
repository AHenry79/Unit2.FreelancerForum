// Header
const header = document.createElement("h1");
header.innerHTML = "Freelancer Forum";
header.style.textAlign = "center";
header.style.fontSize = "64px";
document.body.appendChild(header);

// Prices
const prices = document.createElement("p");
prices.innerHTML = "The average starting price is $30";
prices.style.textAlign = "center";
prices.style.fontSize = "32px";
document.body.appendChild(prices);

// Available Freelancers section

const available = document.createElement("h2");
available.innerHTML = "Available Freelancers";
available.style.textAlign = "center";
available.style.fontSize = "44px";
document.body.appendChild(available);

// Name, Occupation, Starting price

const box = document.createElement("div");
box.style.display = "flex";
box.style.justifyContent = "space-evenly";
const boxName = document.createElement("h2");
boxName.innerHTML = "Name";
const boxOcc = document.createElement("h2");
boxOcc.innerHTML = "Occupation";
const boxPrice = document.createElement("h2");
boxPrice.innerHTML = "Starting Price";
box.appendChild(boxName);
box.appendChild(boxOcc);
box.appendChild(boxPrice);
document.body.appendChild(box);

// Column lists

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

function getNames() {
  const nam = freelancers.map((i) => {
    return i.name;
  });
  return nam;
}
