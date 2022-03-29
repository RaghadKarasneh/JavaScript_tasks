'use strict';

/*TASK1:

 Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."
*/

function tellFortune(job_title, geographic_loc, partner_name,child_num){
 return `You will be a ${job_title} in ${geographic_loc}, and married to ${partner_name} with ${child_num} kids.`
}
//console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));
document.getElementById('task1_result').innerHTML=tellFortune('software engineer', 'Jordan', 'Alice', 3);

//**********************************************************************************************************************************

/*TASK2:

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"
*/

function calculateDogAge(age){
    let  puppy_age=age*7;
    return `Your doggie is ${puppy_age} years old in dog years!`;
}
document.getElementById('task2_result').innerHTML=calculateDogAge(1);

//**********************************************************************************************************************************

/*TASK3:

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
*/

function calculateSupply(age, amount_per_day){
    let tea =(100-age)* amount_per_day*365;
    return `You will need ${tea} cups of tea to last you until the ripe old age of 100`;
}
document.getElementById('task3_result').innerHTML=calculateSupply(30, 3);

//**********************************************************************************************************************************

/*TASK4:

 Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
*/

function greet(name){
    return `Hello ${name}`;
}
document.getElementById('task4_result').innerHTML=greet('Adam');

//**********************************************************************************************************************************

//TASK6:
/*func double1(x {
  return 2 * x ;
}*/
document.getElementById('task6_result_error1').innerHTML="function double1(x) {return 2 * x ;}";

/*functiondouble2 x)
return 2 * x;
}*/
document.getElementById('task6_result_error2').innerHTML="function double2(x) {return 2 * x ;}";
/*
function (x) double3 {
  return 2 * x;
*/
document.getElementById('task6_result_error3').innerHTML="function double3(x) {return 2 * x ;}";

//**********************************************************************************************************************************

/*TASK7:
Write a function called cube that:
accept 1 parameter and calculate the cube of this number
*/
function cube(num){
    return num*num*num;
}
document.getElementById('task7_result').innerHTML=cube(4);

//**********************************************************************************************************************************

/*TASK8:
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
*/

function multiply(num1,num2){
    return num1*num2;
}
document.getElementById('task8_result').innerHTML=multiply(3,4);

//**********************************************************************************************************************************

/*TASK9:
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"
*/

function canIGetADrivingLicense(age){
    let years=0;
    if(age>=20){
        return 'Yes you can';
    }
    else{
        years=20-age;
        return `please come back after ${years} years to get one`;
    }
}
document.getElementById('task9_result').innerHTML=canIGetADrivingLicense(17);

//**********************************************************************************************************************************

/*TASK10:
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.
*/
function sameLength(string1,string2){
    if(string1.length===string2.length){
        return true;
    }
    else{
        return false;
    }
}
document.getElementById('task10_result').innerHTML=sameLength("tree","clue");

//**********************************************************************************************************************************

/*TASK11:
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers
*/
function largerNubmer(num1,num2){
    if(num1>num2){
        return num1;
    }
    else if(num2>num1){
        return num2;
    }
}
document.getElementById('task11_result').innerHTML=largerNubmer(5,6);

//**********************************************************************************************************************************

/*TASK12:
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number
*/
function smallerNubmer(num1,num2,num3){
    let smaller;
    if ((num1<num2) && (num1<num3)){
        smaller=num1;
    }
    else if ((num2<num1) && (num2<num3)){
        smaller=num2;
    }
    else if((num3<num1) && (num3<num2)){
        smaller=num3;
    }
    return smaller;
}
document.getElementById('task12_result').innerHTML=smallerNubmer(5,99,3);

//**********************************************************************************************************************************

/* TASK13:
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
*/
function shorterString(string1,string2,string3,string4,string5){
    let smaller;
    if ((string1.length<=string2.length) && (string1.length<=string3.length) && (string1.length<=string4.length) && (string1.length<=string5.length)){
        smaller=string1;
        return smaller;
    }
    else if ((string2.length<=string1.length) && (string2.length<=string3.length) && (string2.length<=string4.length) && (string2.length<=string5.length)){
        smaller=string2;
        return smaller;
    }
    else if ((string3.length<=string1.length) && (string3.length<=string2.length) && (string3.length<=string4.length) && (string3.length<=string5.length)){
        smaller=string3;
        return smaller;
    }
    else if ((string4.length<=string1.length) && (string4.length<=string2.length) && (string4.length<=string3.length) && (string4.length<=string5.length)){
        smaller=string4;
        return smaller;
    }
    else if ((string5.length<=string1.length) && (string5.length<=string2.length) && (string5.length<=string3.length) && (string5.length<=string4.length)){
        smaller=string3;
        return smaller;
    }
    //I use (<=) to find the FIRST shorter string
}
document.getElementById('task13_result').innerHTML=shorterString("by","tr","car","air","github");

//**********************************************************************************************************************************

/*Task14:
Write a function called longerString
that accept four string as an arguments,
and return the first longer string
*/
function longerString(string1, string2, string3, string4){
    let longest;
    if ((string1.length>=string2.length) && (string1.length>=string3.length) && (string1.length>=string4.length)){
        longest=string1;
        return longest;
    }
    else if ((string2.length>=string1.length) && (string2.length>=string3.length) && (string2.length>=string4.length)){
        longest=string2;
        return longest;
    }
    else if ((string3.length>=string1.length) && (string3.length>=string2.length) && (string3.length>=string4.length)){
        longest=string3;
        return longest;
    }
    else if ((string4.length>=string1.length) && (string4.length>=string2.length) && (string4.length>=string3.length)){
        longest=string4;
        return longest;
    }
}
document.getElementById('task14_result').innerHTML=longerString("air","school","car","github");

//**********************************************************************************************************************************

/*TASK15:
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
*/
function isEven(num){
    if (num%2==0){
        return true;
    }
    else{
        return false;
    }
}
document.getElementById('task15_result').innerHTML=isEven(6);

//**********************************************************************************************************************************

/*TASK16:
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
*/
function isOdd(num){
    if(num%2!=0){
        return true;
    }
    else{
        return false;}
}
document.getElementById('task16_result').innerHTML=isOdd(3);

//**********************************************************************************************************************************

/*TASK17:
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
*/
function positive(num){
    if (num>=0){
        return num
    }
    else if(num<0){
        return num * -1;
    }
}
document.getElementById('task17_result').innerHTML=positive(-5);

//**********************************************************************************************************************************

/*TASK18:
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
*/
function fullName(first_name,last_name){
    return first_name + ' ' + last_name;
}
document.getElementById('task18_result').innerHTML=fullName("Adam","McCallen");

//**********************************************************************************************************************************

/*TASK19:
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
*/
function average(num1,num2,num3,num4,num5){
    let avg=(num1+num2+num3+num4+num5)/5;
    return avg;
}
document.getElementById('task19_result').innerHTML=average(5,7,9,3,5);

//**********************************************************************************************************************************

/*TASK20:
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
*/
function randomNumber(){
    return Math.random();
}
document.getElementById('task20_result').innerHTML=randomNumber();

//**********************************************************************************************************************************

/*TASK21:
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
*/
function randomBetweenNumbers(num1,num2){
    return Math.floor(Math.random()* (num2-num1)+num1)
}
document.getElementById('task21_result').innerHTML=randomBetweenNumbers(3,100);

//**********************************************************************************************************************************

/*TASK22:
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
*/
function scoreInUniversty(num){
    let score;
    if((num>=95) && (num<=100)){
        score='A';
        return score;
    }
    else if((num>=85)&&(num<=94)){
        score='B';
        return score;
    }
    else if((num>=70)&&(num<=84)){
        score='C';
        return score;
    }
    else if((num>=50)&&(num<=69)){
        score='D';
        return score;
    }
    else if((num>=0)&&(num<=49)){
        score='F';
        return score;
    }
}
document.getElementById('task22_result').innerHTML=scoreInUniversty(3);

//**********************************************************************************************************************************

/*TASK23:
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
*/
let count =0;
function counter(){
    return count++;
}
document.getElementById('task23_result_1').innerHTML=counter();
document.getElementById('task23_result_2').innerHTML=counter();
document.getElementById('task23_result_3').innerHTML=counter();
document.getElementById('task23_result_4').innerHTML=counter();

//**********************************************************************************************************************************

/*TASK24:
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
*/
function resetCounter(){
    let countVal=count;
    count=0;
    return `${countVal} and the counter reset now`;
}
document.getElementById('task24_result_1').innerHTML=resetCounter();
/*To check from the counter value */
document.getElementById('task24_result_2').innerHTML=counter();
document.getElementById('task24_result_3').innerHTML=counter();
document.getElementById('task24_result_4').innerHTML=counter();
