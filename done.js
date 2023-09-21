let data1=JSON.parse(localStorage.getItem("done-list"))||[];

let tbody=document.querySelector("tbody");
let filter=document.querySelector("filter");
let count=document.getElementById("task-count");

function showdata(){
   tbody.innerHTML="";
data1.forEach(function(ex){
        let tr=document.createElement("tr");
        let name=document.createElement("td");
        name.innerHTML=ex.name;
        let desc=document.createElement("td");
        desc.innerHTML=ex.desc;
        let start=document.createElement("td");
        start.innerHTML=ex.start;
        let priority=document.createElement("td");
        priority.innerHTML=ex.priority;
        
        tr.append(name,desc,start,priority);
        tbody.append(tr);       
});
}
showdata();

