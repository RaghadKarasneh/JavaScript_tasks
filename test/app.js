

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





