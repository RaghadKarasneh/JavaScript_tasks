'use strict';
let formOrder= document.getElementById("orderForm");
let ulItem=document.getElementById("order");
let banana=[];///1

function Coffee(cusName,cupSize,milkType,isHot,drinkType,price){
    this.cusName=cusName;
    this.cupSize=cupSize;
    this.milkType=milkType;
    this.isHot=isHot;
    this.drinkType=drinkType;
    let price= Math.ceil(Math.random()* (15-3)+3);

    
    banana.push(this);
    renderOrder();
}

formOrder.addEventListener("submit",handleSubmit);
 function handleSubmit(event){
    event.preventDefault();
    // console.log(event.target);
    let cusName=event.target.cusName.value;
    // console.log(cusName);
    
    let cupSize=event.target.cupSize.value;
    // console.log(cupSize);

    let milkType=event.target.milkType.value;
    // console.log(milkType);

    let isHot=event.target.isHot.checked;
    // console.log(isHot);
    
    let drinkType=event.target.drinkType.value;
    // console.log(drinkType);

  new Coffee(cusName,cupSize,milkType,isHot,drinkType,price);

 }

 handleSubmit();//2

 function renderOrder(){
     
     let hot;

     for (let i = 0; i < banana.length; i++) {
        let liElement=document.createElement("li");
        let parElement=document.createElement("p");
        ulItem.appendChild(liElement);
        liElement.appendChild(parElement);
        if(banana[i].isHot === true){
            hot="hot"
        }else{
            hot="cold";
        } let js=JSON.stringify(banana);
        store=localStorage.setItem(banana,js);
        let y =window.localStorage.getItem(banana);
        console.log(y);
        parElement.textContent=`this customer ${banana[i].cusName} he order the following ${banana[i].cupSize} with ${banana[i].milkType} and he prefare is ${hot} in ${banana[i].drinkType} the price is ${banana[i].price} `;
     }
    
    //  return this.cusName+"has ordered "+this.drinkType
 }