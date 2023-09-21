// Write code related to dashboard page here
let data=JSON.parse(localStorage.getItem("task-list"))||[];
let tbody=document.querySelector("tbody");
let filter=document.querySelector("filter");
let count=document.getElementById("task-count");
let data1=JSON.parse(localStorage.getItem("done-list"))||[];

function showdata(){
   tbody.innerHTML="";
data.forEach(function(ex){
        let tr=document.createElement("tr");
        let name=document.createElement("td");
        name.innerHTML=ex.name;
        let desc=document.createElement("td");
        desc.innerHTML=ex.desc;
        let start=document.createElement("td");
        start.innerHTML=ex.start;
        // let end=document.createElement("td");
        // end.innerHTML=ex.end;
        let priority=document.createElement("td");
        priority.innerHTML=ex.priority;
        let bt1=document.createElement("td");
        let button=document.createElement("button");
        button.innerHTML="Add";
        button.addEventListener("click",function(){
                    data1.push(ex);
                    localStorage.setItem("done-list",JSON.stringify(data1));
                    
        })
        bt1.append(button);
        let del=document.createElement("div");
        del.innerHTML="❌";
        del.setAttribute("id","delete");
        del.addEventListener("click",function(){
          let a=data.filter(user=>user.name!=ex.name);
          localStorage.setItem("task-list",JSON.stringify(a));
          window.location.reload();
        })
        let bt2=document.createElement("td");
        bt2.append(del);
        tr.append(name,desc,start,priority,bt1,bt2);
        tbody.append(tr);       
});
}
showdata();
count.innerHTML=data.length;
