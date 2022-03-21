/*Asking user to insert values*/
let first_num= prompt('Please enter the first value');
let second_num= prompt('Please enter the second value');
let third_num= prompt('Please enter the third value');

/*Converting Strings to Numbers*/
let x= Number(first_num);
let y= Number(second_num);
let z= Number(third_num);

/*Adding Numbers to html page*/
document.getElementById('fnum').innerHTML=x;
document.getElementById('snum').innerHTML=y;
document.getElementById('tnum').innerHTML=z;

/*First Condition: Numbers divided by 3 */

if ((x%3==0) || (y%3==0) || (z%3==0)){
    console.log('fizz');
    document.getElementById('result1').innerHTML="fizz";
}else{
    console.log('No number of the inserted numbers is divisible by 3');
    document.getElementById('result1').innerHTML="No number of the inserted numbers is divisible by 3";
}

/*Second Condition: Numbers divided by 5 */

if((x%5==0) || (y%5==0) || (z%5==0)){
    console.log('buzz');
    document.getElementById('result2').innerHTML="buzz";
}else{
    console.log('No number of the inserted numbers is divisible by 5');
    document.getElementById('result2').innerHTML="No number of the inserted numbers is divisible by 5";
}

/* Third Condition: Numbers divided by 3 an5 together */
if( ((x%3==0) && (x%5==0)) || ((y%3==0) && (y%5==0)) || ((z%3==0) && (z%5==0))){
    console.log('fizz buzz');
    document.getElementById('result3').innerHTML= "fizz buzz";
}else{
        console.log('No number of the inserted numbers is divisible by 3 and 5 in the same time');
        document.getElementById('result3').innerHTML="No number of the inserted numbers is divisible by 3 and 5 in the same time";
}