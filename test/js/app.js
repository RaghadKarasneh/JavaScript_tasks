console.log('hi');



function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("POST", "ajax_info.txt", true);
    xhttp.send(string);
  }
  




















// let array=['a','b','c']
// let array2=[];
// let item=array.map(function (i,index,array) {
//     array2.push(i+'c');
//     return array2;
// }
// )
// console.log(array2);




























/*let store =localStorage.setItem('color','red');
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
*/