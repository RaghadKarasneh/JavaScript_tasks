
let store =localStorage.setItem('color','red');
//console.log(store);
let x=localStorage.getItem('color');
console.log(x);

let obj={
    name:'ali',
    age:50
}

let js=JSON.stringify(obj);
store=localStorage.setItem(obj,js);
let y =window.localStorage.getItem(obj);
console.log(y);
