'use strict';

/*TASK1:
Make an array of numbers that are doubles of the first array
*/

let newArray1;
function doubleNumbers(array) {
    newArray1 =array.map(function(i,index){
        return i*2;
    });
}
doubleNumbers([2, 5, 100]);
document.getElementById('task1_result').innerHTML=newArray1;
console.log('Task1 result is: '+newArray1);

//*********************************************************************************************************/

/*TASK2:
Take an array of numbers and make them strings
*/
let newArray2;
function stringItUp(array){
newArray2=array.map(function(i,index){
    return i.toString();
})
}
stringItUp([2, 5, 100]);
document.getElementById('task2_result').innerHTML=newArray2;
console.log('Task2 result is: '+newArray2);

//*********************************************************************************************************/

/*
TASK3:
Capitalize each of an array of names
*/
let newArray3;
function capitalizeNames(array){
    newArray3=array.map(function(i,index){
        return i.toUpperCase();
    })
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);
document.getElementById('task3_result').innerHTML=newArray3;
console.log('Task3 result is: '+newArray3);

//*********************************************************************************************************/

/*TASK4:
Make an array of strings of the names
*/
let newArray4;
function namesOnly(array){
    newArray4=array.map(function(i,index){
        return i.name;
    })
}

let obj_task4= namesOnly([
        {
          name: "Angelina Jolie",
          age: 80
        },
        {
          name: "Eric Jones",
          age: 2
        },
        {
          name: "Paris Hilton",
          age: 5
        },
        {
          name: "Kayne West",
           age: 16
        },
        {
          name: "Bob Ziroll",
           age: 100
        }
    ]);
document.getElementById('task4_result').innerHTML=newArray4;
console.log('Task4 result is: '+newArray4);

//*********************************************************************************************************/

/*TASK5:
Make an array of strings of the names saying whether or not they can go to The Matrix
*/
let newArray5;
function makeStrings(array){
    newArray5=array.map(function(i,index){
        let string='';
        if(i.age<18){
            string=' is under age!!';
        }
        else{
            string=' can go to The Matrix';
        }
        return i.name + string;
    })
}
let obj_task5= makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
        },
        {
           name: "Eric Jones",
           age: 2
        },
        {
           name: "Paris Hilton",
           age: 5
        },
        {
           name: "Kayne West",
           age: 16
        },
        {
           name: "Bob Ziroll",
           age: 100
        }
     ]); 
document.getElementById('task5_result').innerHTML=newArray5;
console.log('Task5 result is: '+newArray5);

//*********************************************************************************************************/

/*TASK6:
Make an array of the names in h1s, and the ages in h2s
*/
let newArray6;
function readyToPutInTheDOM(array){
    newArray6=array.map(function(i,index){
        return `<h1> ${i.name}</h1><h2>${i.age}</h2>`
    })
}
let obj_task6= readyToPutInTheDOM([
    {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
    }
]);
document.getElementById('task6_result').innerHTML=newArray6;
console.log('Task6 result is: '+newArray6);

//*********************************************************************************************************/

/*TASK7:
 Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/
let newArray7;
function doubleValues(array) {
    newArray7 =array.map(function(i,index){
        return i*2;
    });
}
doubleValues([1,-2,-3]);
document.getElementById('task7_result').innerHTML=newArray7;
console.log('Task7 result is: '+newArray7);

//*********************************************************************************************************/

/*TASK8:
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
*/
let newArray8;
function valTimesIndex(array){
    newArray8=array.map(function(i,index){
        return i*index;
    })
}
valTimesIndex([1,-2,-3]);
document.getElementById('task8_result').innerHTML=newArray8;
console.log('Task8 result is: '+newArray8);

//*********************************************************************************************************/
/*TASK9:
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
of that key in each object.
*/
let newArray9;
function extractKey(array,key){
    newArray9=array.map(i => i[key]);
    return newArray9
}
let obj_task9=extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') ;
document.getElementById('task9_result').innerHTML=newArray9;
console.log('Task9 result is: '+newArray9);

//*********************************************************************************************************/

/*TASK10:
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
*/
let newArray10;
function extractFullName(array){
    newArray10=array.map(function(i,index){
        return i.first +' '+ i.last;
    })
}
let obj_task10=extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]);
document.getElementById('task10_result').innerHTML=newArray10;
console.log('Task10 result is: '+newArray10);