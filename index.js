// Write code related to Home page here 

let form=document.querySelector("form");
let nameinp=document.getElementById("name");
let descinp=document.getElementById("desc");
let startinp=document.getElementById("start");
// let endinp=document.getElementById("end");
let priorityinp=document.getElementById("priority");
let but=document.querySelector("button");
let data=JSON.parse(localStorage.getItem("task-list"))||[];

but.addEventListener("click",function(e){
e.preventDefault();

let obj={
    name:nameinp.value,
    desc:descinp.value,
    start:startinp.value,
    priority:priorityinp.value,
}
data.push(obj);
localStorage.setItem("task-list",JSON.stringify(data));
});