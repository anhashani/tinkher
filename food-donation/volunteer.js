function saveVolunteer(){
let n=document.getElementById("vname").value;
let l=document.getElementById("vloc").value;
let t=document.getElementById("vtime").value;

let volunteers=JSON.parse(localStorage.getItem("volunteers"))||[];
volunteers.push({n,l,t});

localStorage.setItem("volunteers",JSON.stringify(volunteers));
loadVolunteers();
}

function loadVolunteers(){
let volunteers=JSON.parse(localStorage.getItem("volunteers"))||[];
let list=document.getElementById("volunteerList");
list.innerHTML="";

volunteers.forEach(v=>{
let div=document.createElement("div");
div.className="option-box";
div.innerHTML="Name: "+v.n+"<br>Location: "+v.l+"<br>Time: "+v.t;
list.appendChild(div);
});
}
 