'use strict';

/*TASK1:
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/
function doubleValues(array){
    let newArray=[];
    array.forEach(i => {
        newArray.push(i*2);
        i++;
    }
    );
    return newArray;
}
document.getElementById('task1_result').innerHTML=doubleValues([5,1,2,3,10]);

//**********************************************************************************************************************************

/*TASK2:
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*/
function onlyEvenValues(array){
    let newArray=[];
    array.forEach(i =>{
        if(i%2==0){
            newArray.push(i);
        }
    });
    return newArray
}
document.getElementById('task2_result').innerHTML=onlyEvenValues([5,1,2,3,10]);

//**********************************************************************************************************************************

/*TASK3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*/
function showFirstAndLast(array){
    let newArray=[];
    array.forEach(i=>{
        newArray.push(i[0]+i[i.length-1]);
  
    });
    return newArray;
}
console.log('Task 3 result is: '+ showFirstAndLast(['colt','matt', 'tim', 'udemy']));
document.getElementById('task3_result').innerHTML=showFirstAndLast(['colt','matt', 'tim', 'udemy']);

//**********************************************************************************************************************************

/*TASK4:
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
to the function with the new key and value added for each object 
*/
function addKeyAndValue(array,key,value){
    array.forEach(i=>{
       i[key]=value;
    });
    return array;
}
console.log('Task 4 result is: ');
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') );
document.getElementById('task4_result').innerHTML=addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') ;

//**********************************************************************************************************************************

/*TASK5:
 Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
 values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count 
*/

function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}
console.log('Task 5 result is: ');
console.log(vowelCount('Elie'));
document.getElementById('task5_result').innerHTML=vowelCount('Elie');