

let str='Welcom to our session! We are 3 Aqaba cohort 5';


console.log(str.match(/a/ig));

console.log(str.search(/a/i));
console.log(str.replace(/[^a||e]/ig,'@'));


console.log(str.match(/\d/ig));

console.log(str.search(/\baqa/ig));
///////////////////////////////////////////////

/*Erro Handling */

function numbers(num){
  if(typeof(num)!=='number')
    return 'It is not  number';
  else
    return 'correct';
}

console.log(numbers(5));



/*let errorHandel= new Promise(function(resolve, reject){
  let check=true;
  if(check){
    rescolve('correct')
  }else{
    reject(Error('Failed'))
  }
});

errorHandel.then(function(resolve){
  document.getElementById('result').innerHTML
}).catch(function(reject){
  console.log(reject);
});


*/
/*
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

