function saveFood(){
let d=document.getElementById("details").value;
let loc=document.getElementById("location").value;
let exp=document.getElementById("exp").value;

if(!d || !loc || !exp){
document.getElementById("msg").innerText="Fill all fields";
return;
}

let data={details:d,location:loc,exp:exp};
localStorage.setItem("foodData",JSON.stringify(data));

document.getElementById("msg").innerText="Saved successfully";
}

function loadFood(){
let data=JSON.parse(localStorage.getItem("foodData"));
if(!data) return;

let now=new Date();
let exp=new Date(data.exp);

if(exp<=now){
document.getElementById("foodDisplay").innerText="Food Expired";
localStorage.removeItem("foodData");
return;
}

document.getElementById("foodDisplay").innerHTML=
"Food: "+data.details+"<br>Location: "+data.location+"<br>Expires: "+data.exp;
}

function markComplete(){
localStorage.removeItem("foodData");
document.getElementById("foodDisplay").innerText="Completed";
}