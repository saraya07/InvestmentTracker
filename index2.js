var showBudget=document.querySelector(".showBudget");
var budget=document.querySelector("#budget");
var select=document.querySelector(".select");
var list=document.querySelector(".expenses");
var description=document.querySelector(".description");
var valuespent=document.querySelector(".value");
var type=document.querySelector("select");
var amtleft=document.querySelector(".amtleft h2");
var budgetvalue;
var amtnow;
var amtt;


budget.addEventListener("change",handleChange);

var lists=document.querySelector(".list");
select.addEventListener("click",handleClick);

function handleClick() {
    let li1=document.createElement("li");
    let li2=document.createElement("li");
    li1.innerHTML=description.value;
    list.appendChild(li1);
    console.log(description.value);
    li2.innerHTML=valuespent.value;
    list.append(li2);
    amtt=parseInt(valuespent.value);
    console.log(type.value);
    if (type.value.trim()==="Expense") {
        amtnow=amtnow-amtt;
        console.log(amtnow);
        
    }

    else if(type.value.trim()==="Savings") {
        amtnow=amtnow+amtt;
        console.log(amtnow);
        
    }

    amtleft.innerHTML=`Amount left to spend= ₹ ${amtnow}`;

    
    description.value="";
    valuespent.value="";
    budget.value="";
    budget.disabled=true;
}

function handleChange() {
    budgetvalue=parseInt(budget.value);
    showBudget.innerHTML=" ₹"+budget.value;
    amtnow=budgetvalue;
    console.log(budgetvalue);
}

