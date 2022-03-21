
/*Asking user to insert values*/
let first_value= prompt('Please enter the first value');
let second_value= prompt('Please enter the second value');

/*Converting Strings to Numbers*/
let x=Number(first_value);
let y=Number(second_value);

document.getElementById('fnum').innerHTML=x;
document.getElementById('snum').innerHTML=y

if(x>y){
    alert('Hello World.');
    console.log('Hello World.');
    document.getElementById('result').innerHTML="Hello World.";
}
else{
    alert('GoodBye.')
    console.log('GoodBye.');
    document.getElementById('result').innerHTML="GoodBye.";
}