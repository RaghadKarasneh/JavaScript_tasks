'use strict';

/* Task3: 

Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

console.log('Task 3 result: ');
let favoriteFood =['Fish', 'Rice', 'Meat', 'Hummus', 'Tabouleh'];
console.log('My favorite food are: ' +favoriteFood);

let favoriteSports=['Swimming', 'Walking', 'Spinning'];
console.log('My favorite sports are: ' + favoriteSports);

let favoriteMovies= ['The Conjuring', 'Raid Along', 'The Invisible Man', 'The Purge' ];
console.log('My favorite movies are: ' + favoriteMovies);

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
let arr=[1,4,5];
let arr2=['t', 'u', 'g', 'x'];
console.log(firstOfArray(arr));
console.log(firstOfArray(arr2));

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
let arr3=[1,4,5];
let arr4=['t', 'u', 'g', 'x'];
console.log(lastOfArray(arr3));
console.log(lastOfArray(arr4));

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
let arr7= [1,4,5];
let arr8= ["t","u","g","x"];
console.log(middleOfArray(arr7));
console.log(middleOfArray(arr8));

/*
Task9:

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
console.log( arrayExceptLast(nums11));

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

// all the exercises below should solved 2 times: 1- for loop 2- while lopp

/*
Task13:

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
//console.log('The summation using while loop is= '+sumArrayWhile(nums13));

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
//console.log('The minimum value in array using while loop is= '+minInArrayWhile(nums14));

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
    }
    return array;
}
let nums15= [1,2,3,8,9];
console.log('The elemnt has been removed using for loop is= '+removeFromArray(nums15,8));
//console.log('The elemnt has been removed using while loop is= '+removeFromArrayWhile(nums15,8));

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
    }
    return newArray;
}
console.log('The odd elemnt in this array using for loop are= '+oddArray(nums16,8));
//console.log('The odd elemnt in this array using while loop are= '+oddArrayWhile(nums16,8));

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
    }
    return sum/(array.length);
}

let nums17= [1,2,3,8,9,77];
console.log('The Avareg of this array using for loop is= '+aveArray(nums17));
//console.log('The Avareg of this array using while loop is= '+aveArrayWhile(nums17));

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
function shortInArrayWhile(array){
    let shortLength= Infinity;
    let shortest="";
    let i=0;
    if(array.length>0){
        while ( i < array.length){
            if (typeof array[i]==='string' && array[i].length <shortLength){
            shortest=array[i];
            shortLength= array[i].length;
            }
         i++;
        }
    }
    
}
let strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log('The shortest string in this array using for loop is: '+shorterInArray(strings));
//console.log('The shortest string in this array using for loop is: '+shorterInArrayWhile(strings));

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
console.log(repeatChar(stringName,'a'));
//console.log(repeatChar(stringNameWhile,'a'));

/*
Task20:
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(array){
    let newArray=[];
    for(let i=0; i<array.length;i++){
    if(typeof(array)==='string' && i%2==0 && array[i].length%2 !=0){
        newArray=array[i];
    }
  }
  return newArray;
}
let  nameStrings= ["alex","mercer","madrasa","rashed2","emad","hala"]
console.log(evenIndexOddLength(nameStrings));