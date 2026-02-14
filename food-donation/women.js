// 1. Save business details
function saveBusiness() {

let name = document.getElementById("name").value;
let category = document.getElementById("category").value;
let food = document.getElementById("foodDetails").value;
let price = document.getElementById("price").value;
let contact = document.getElementById("contact").value;

if(!name || !category || !food || !price){
alert("Please fill all fields");
return;
}

let business = {
id: Date.now(),
name,
category,
food,
price,
contact
};

let list = JSON.parse(localStorage.getItem("businessList")) || [];
list.push(business);

localStorage.setItem("businessList", JSON.stringify(list));

loadBusiness();   // refresh panel
}


// 2. Load and display items
function loadBusiness(){

let list = JSON.parse(localStorage.getItem("businessList")) || [];
let box = document.getElementById("businessList");

box.innerHTML = "";

list.forEach((item) => {

let div = document.createElement("div");
div.className="form-box";

div.innerHTML = `
<b>${item.name}</b><br>
Category: ${item.category}<br>
Food: ${item.food}<br>
Price: ₹${item.price}<br>
Contact: ${item.contact}<br><br>
<button onclick="buyItem(${item.id})">Buy</button>
<hr>
`;

box.appendChild(div);

});
}


// 3. Buy function
function buyItem(id){

let list = JSON.parse(localStorage.getItem("businessList")) || [];
let orders = JSON.parse(localStorage.getItem("ordersList")) || [];

let selectedItem = list.find(item => item.id === id);

if(selectedItem){

orders.push(selectedItem);
localStorage.setItem("ordersList", JSON.stringify(orders));

list = list.filter(item => item.id !== id);
localStorage.setItem("businessList", JSON.stringify(list));

alert("Order placed!");
loadBusiness();
}
}