'use strict';

//TASK1:

console.log('***TASK1 result:');
 //[ 1,7  9  45, ]
console.log('The first array correction is: [1,7,9,45]');
document.getElementById('task1_result_error1').innerHTML='[1,7,9,45]';

 //["Str" "alex","moh"
 console.log('The first array correction is: ["Str" "alex","moh"]');
 document.getElementById('task1_result_error2').innerHTML='["Str" "alex","moh"]';
 //'the’, ‘fox' 'over' lazy, 'dog',  ]
 console.log(`The third array correction is: ['the', 'fox', 'over', 'lazy', 'dog',  ]`);
 document.getElementById('task1_result_error3').innerHTML=`['the', 'fox', 'over', 'lazy', 'dog',  ]`;

//**********************************************************************************************************************************

 /*TASK2:
What is the index of "Banana”, Tomato"
var fruits=["Tomato","Banana","Watermelon"]
 */
console.log('***TASK2 result:');
console.log('The index of "Banana" is: 1');
document.getElementById('task2_result').innerHTML=`1`;

//**********************************************************************************************************************************
/* Task3: 

Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

console.log('Task 3 result: ');
let favoriteFood =['Fish', 'Rice', 'Meat', 'Hummus', 'Tabouleh'];
console.log('My favorite food are: ' +favoriteFood);
document.getElementById('task3_result1').innerHTML=favoriteFood;

let favoriteSports=['Swimming', 'Walking', 'Spinning'];
console.log('My favorite sports are: ' + favoriteSports);
document.getElementById('task3_result2').innerHTML=favoriteSports;

let favoriteMovies= ['The Conjuring', 'Raid Along', 'The Invisible Man', 'The Purge'];
console.log('My favorite movies are: ' + favoriteMovies);
document.getElementById('task3_result3').innerHTML=favoriteMovies;

//**********************************************************************************************************************************
/*Task4: 

Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

console.log('Task 4 result: ');
function firstOfArray(array){
    return array[0];
}

let arr2=['t', 'u', 'g', 'x'];
console.log(firstOfArray(arr2));
document.getElementById('task4_result').innerHTML=firstOfArray(arr2);

//**********************************************************************************************************************************
/*
Task5:

Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
console.log('Task 5 result: ');
function lastOfArray(array){
    return array[array.length-1];
}

let arr4=['t', 'u', 'g', 'x'];
console.log(lastOfArray(arr4));
document.getElementById('task5_result').innerHTML=lastOfArray(arr4);

//**********************************************************************************************************************************
/*Task 6:

Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10] 
*/
console.log('Task 6 result: ');
let arr5=[0, 5, 7, 9];
arr5.shift(); /*The shift() method is used to remove an element/item from the starting point of an array. */
arr5.shift();
arr5.shift();
arr5.unshift(8); /*The unshift() method is used to add an element/item to the starting point of an array. */
arr5.unshift(6);
arr5.unshift(4);
arr5.unshift(3);
arr5.unshift(1);
arr5.push(10);
console.log(arr5);
document.getElementById('task6_result').innerHTML=arr5;

//**********************************************************************************************************************************

/*Task 7:

Using the console try to figure out what the thing that’s (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/
console.log('Task 7 result: ');
let arr6=[0, 5, 7, 9];
arr6.shift();
arr6.shift();
arr6.shift();
arr6.unshift(5);
arr6.push(-7);
arr6.push(3.5);
console.log(arr6);
document.getElementById('task7_result').innerHTML=arr6;

//**********************************************************************************************************************************

/*Task8: 

Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
console.log('Task 8 result: ');
function middleOfArray(array){
    if(array.length %2 == 0){ /*even length  */
    let newArray=[,];
        newArray[0]= array [(array.length/2) -1];
        newArray[1]= array[array.length/2];
        return newArray;
  
    }
    else{  /*odd length  */
        return array [Math.floor(array.length/2)];
    }
}
let arr8= ["t","u","g","x"];
console.log(middleOfArray(arr8));
document.getElementById('task8_result').innerHTML=middleOfArray(arr8);

//**********************************************************************************************************************************

/*Task9:

Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
console.log('Task 9 result: ');

let animals=['cat', 'ele', 'bird'];
animals[0]='zebra';
animals[1]='elephant';
animals.pop();

let nums=[1,2,3,8,9];
nums[0]=5;
nums[1]=-22;
nums[2]=3.5;
nums[3]=44;
nums[4]=98;
nums[5]=44;

console.log('animals array=> '+ animals);
console.log('nums array=> '+nums);
document.getElementById('task9_result1').innerHTML=animals;
document.getElementById('task9_result2').innerHTML=nums;
//**********************************************************************************************************************************
/*
Task10:

Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
console.log('Task 10 result: ');
function indexOfArray(array,index){
    return array[index];
}
let arr9=[1,2,3,8,9];
console.log(indexOfArray(arr9,1));
document.getElementById('task10_result').innerHTML=indexOfArray(arr9,1);

//**********************************************************************************************************************************
/*
Task11:

Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
*/
console.log('Task 11 result: ');
function arrayExceptLast(array){
  let arr=[,]; /*new array to store the array parameter values  */
  for(let i=0; i<array.length-1;i++){
      arr[i]=array[i];
  }
  return arr
}
let nums11= [1,2,3,8,9];
console.log(arrayExceptLast(nums11));
document.getElementById('task11_result').innerHTML=arrayExceptLast(nums11);

//**********************************************************************************************************************************

/* Task12:

Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
*/
console.log('Task 12 result: ');
function addToEnd(array,value){
    array.pop();
    array.push(value);
    return array
}
let nums12= [1,2,3,8,9];
console.log(addToEnd(nums12,55));
document.getElementById('task12_result').innerHTML=addToEnd(nums12,55);

//**********************************************************************************************************************************
// all the exercises below should solved 2 times: 1- for loop 2- while lopp

/*Task13:

Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
*/
console.log('Task 13 result: ');
/*1- With For loop: */
function sumArray(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
}
/*2- With While loop: */
function sumArrayWhile(array){
    let sum=0;
    let i=0;
    while(i<array.length){
        sum=sum+array[i];
        i++;
    }
    return sum;
}
let nums13= [1,2,3,8,9];
console.log('The summation using for loop is= '+sumArray(nums13));
console.log('The summation using while loop is= '+sumArrayWhile(nums13));
document.getElementById('task13_result1').innerHTML=sumArray(nums13);
document.getElementById('task13_result2').innerHTML=sumArrayWhile(nums13);

//**********************************************************************************************************************************
/*
Task14:

Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
*/
console.log('Task 14 result: ');
/*1- With For loop: */
function minInArray(array){
    let min=array[0];
    for(let i=0;i<array.length;i++){
        if(min>array[i]){
            min=array[i];
        }
    }
    return min;
}
/*2- With While loop: */
function minInArrayWhile(array){
    let min=array[0];
    let i=0;
    while(i<array.length){
        if(min>array[i]){
            min=array[i];
        }
        i++
    }
    return min;
}
let nums14= [1,2,3,8,9];
console.log('The minimum value in array using for loop is= '+minInArray(nums14));
console.log('The minimum value in array using while loop is= '+minInArrayWhile(nums14));
document.getElementById('task14_result1').innerHTML=minInArray(nums14);
document.getElementById('task14_result2').innerHTML=minInArrayWhile(nums14);

//**********************************************************************************************************************************

/*Task15:

Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
*/
console.log('Task 15 result: ');
/*1- With For loop: */
function removeFromArray(array,el){
    for (let i=0; i<array.length; i++)
    {
        if (array[i]===el){
            array.splice(i,1);
        }
    }
    return array;
}
/*2- With While loop: */
function removeFromArrayWhile(array,el){
    let i=0;
    while (i<array.length){
        if(array[i]===el){
            array.splice(i,1);
        }
        i++;
    }
    return array;
}
let nums15= [1,2,3,8,9];
let nums15_2= [1,2,3,8,9];
console.log('The elemnt has been removed using for loop is= '+removeFromArray(nums15,8));
console.log('The elemnt has been removed using while loop is= '+removeFromArrayWhile(nums15_2,8));
document.getElementById('task15_result1').innerHTML=removeFromArray(nums15,8);
document.getElementById('task15_result2').innerHTML=removeFromArrayWhile(nums15_2,8);

//**********************************************************************************************************************************

/*Task16:

Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
*/
console.log('Task 16 result: ');
/*1- With For loop: */
function oddArray(array){
    let newArray=[];
    for (let i=0;i<array.length;i++){
        if(array[i]%2!==0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
/*1- With While loop: */
let nums16= [1,2,3,8,9];
function oddArrayWhile(array){
    let newArray=[];
    let i=0;
    while(i<array.length){
        if(array[i]%2!==0){
            newArray.push(array[i]);
        }
        i++;
    }
    return newArray;
}
console.log('The odd elemnt in this array using for loop are= '+oddArray(nums16,8));
console.log('The odd elemnt in this array using while loop are= '+oddArrayWhile(nums16,8));
document.getElementById('task16_result1').innerHTML=oddArray(nums16,8);
document.getElementById('task16_result2').innerHTML=oddArrayWhile(nums16,8);

//**********************************************************************************************************************************

/*Task17:

Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
*/
console.log('Task 17 result: ');
/*1- With For loop: */
function aveArray(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum/(array.length);
}
/*1- With While loop: */
function aveArrayWhile(array){
    let sum=0;
    let i=0;
    while(i<array.length){
        sum=sum+array[i];
        i++;
    }
    return sum/(array.length);
}

let nums17= [1,2,3,8,9,77];
console.log('**The result with for loop is: ');
console.log('The Avareg of this array using for loop is= '+aveArray(nums17));
console.log('**The result with while loop is: ');
console.log('The Avareg of this array using while loop is= '+aveArrayWhile(nums17));
document.getElementById('task17_result1').innerHTML=aveArrayWhile(nums17);
document.getElementById('task17_result2').innerHTML=aveArrayWhile(nums17);

//**********************************************************************************************************************************

/*Task18:

Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
*/
console.log('Task 18 result: ');
/*1- With For loop: */
function shorterInArray(array) {
    let shortLength = Infinity; /*I used the Infinity as the shortest string */
    let shortest = ""; /*To store the longest string */

    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'string' && array[i].length < shortLength) {
                shortest = array[i];
                shortLength = array[i].length; 
            }
        }
    }
    return shortest;
}
/*2- With While loop: */
function shorterInArrayWhile(array){
    let shortLength= Infinity;
    let shortest="";
    let i=0;
    if(array.length>0){
        while ( i < array.length){
            if (typeof array[i] === 'string' && array[i].length < shortLength) {
                shortest = array[i];
                shortLength = array[i].length; 
            }
         i++;
        }
    }
    return shortest;
}
let strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log('The result with for loop is: ');
console.log(shorterInArray(strings));
console.log('The result with while loop is: ');
console.log(shorterInArrayWhile(strings));
document.getElementById('task18_result1').innerHTML=shorterInArray(strings);
document.getElementById('task18_result2').innerHTML=shorterInArrayWhile(strings);

//**********************************************************************************************************************************

/*Task19:

Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
*/
console.log('Task 19 result: ');
/*1- With for loop: */
function repeatChar(str,char){
    str.split();
    let sum=0;
    for(let i=0; i<str.length;++i){
       if(str[i]===char){
           sum=sum+1;
       } 
    }
    return sum;
};
/*2- With While loop: */
function repeatCharWhile(str,char){
    str.split();
    let sum=0;
    let i=0;
    while(i<str.length){
        if (str[i]===char){
            sum= sum+1;
        }
        i++;
    }
    return sum;
}
let stringName="alex mercer madrasa rashed2 emad hala";
console.log('The result with for loop is: ');
console.log(repeatChar(stringName,'a'));
console.log('The result with while loop is: ');
console.log(repeatCharWhile(stringName,'a'));
document.getElementById('task19_result1').innerHTML=repeatChar(stringName,'a');
document.getElementById('task19_result2').innerHTML=repeatCharWhile(stringName,'a');

//**********************************************************************************************************************************

/*Task20:
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(array){
    let newArray=[];
    for(let i=0; i<array.length;i++){
    if(array[i].length%2 !=0){
        newArray.push(array[i]);
    }
  }
  return newArray;
}
function evenIndexOddLengthWhile(array){
    let newArray=[];
    let i=0;
    while(i<array.length){
        if(array[i].length%2 !=0){
            newArray.push(array[i]);
        }
        i++
    }
    return newArray;
}
let  nameStrings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log('The result with for loop is: ');
console.log(evenIndexOddLength(nameStrings));
console.log('The result with while loop is: ');
console.log(evenIndexOddLengthWhile(nameStrings));
document.getElementById('task20_result1').innerHTML=evenIndexOddLength(nameStrings);
document.getElementById('task20_result2').innerHTML=evenIndexOddLengthWhile(nameStrings);

//**********************************************************************************************************************************

/*TASK21: Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]*/

function powerElementIndex(array) {
    let newArray=[];
    let newIndex;
    for(let i=0;i<array.length;i++){
        newIndex=Math.pow(array[i],i);
        newArray.push(newIndex);
    }
    return newArray;
}
function powerElementIndexWhile(array){
    let newArray=[];
    let newIndex;
    let i=0;
    while(i<array.length){
        newIndex=Math.pow(array[i],i);
        newArray.push(newIndex);
        i++;
    }
    return newArray;
}
let nums21=[44, 5, 4, 3, 2, 10];
console.log('The result with for loop is: ');
console.log(powerElementIndex(nums21));
console.log('The result with while loop is: ');
console.log(powerElementIndexWhile(nums21));
document.getElementById('task21_result1').innerHTML=powerElementIndex(nums21);
document.getElementById('task21_result2').innerHTML=powerElementIndexWhile(nums21);

//**********************************************************************************************************************************

/*TASK22:
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
*/
function evenNumberEvenIndex(array){
    let newArray=[];
    for (let i=0; i<array.length;i++){
        if((i%2==0)&&(array[i]%2==0)){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
function evenNumberEvenIndexWhile(array){
    let newArray=[];
    let i=0;
    while (i<array.length){
        if((i%2==0)&&(array[i]%2==0)){
            newArray.push(array[i]);
        }
        i++;
    }
    return newArray;
}
let nums22= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log('The result with for loop is: ');
console.log(evenNumberEvenIndex(nums22));
console.log('The result with while loop is: ');
console.log(evenNumberEvenIndexWhile(nums22));

document.getElementById('task22_result1').innerHTML=evenNumberEvenIndex(nums22);
document.getElementById('task22_result2').innerHTML=evenNumberEvenIndexWhile(nums22);

//**********************************************************************************************************************************