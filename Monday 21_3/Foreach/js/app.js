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