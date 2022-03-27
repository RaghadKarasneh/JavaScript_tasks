/*
There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

Sample array:
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output:
[4, 5, 8, 10, 12, 13] */


function Arrays_sum(array1,array2){
        let newArray=[];
        let indexCount=0;
    
        while(indexCount<array1.length && indexCount<array2.length){ // to sum arrays index values
            newArray.push(array1[indexCount]+array2[indexCount]);
            indexCount ++;
        }
        if (indexCount === array1.length){ //to check that I add all array2 index values 
            for (let i=indexCount; i<array2.length;i++){
           
                newArray.push(array2[i]);
            }
        }
        if (indexCount === array2.length){ //to check that I add all array1 index values 
            for (let i=indexCount; i<array1.length;i++){
           
                newArray.push(array1[i]);
            }
        }
        
        return newArray}
console.log(Arrays_sum([1,0,2,3,4,5,6,7],[3,5,6,7,8,13]));
























// function Arrays_sum(array1,array2){
//     let newArray=[];
//     let indexCount=0;

//     if(array1.length === 0) // to check that array1 is not empty
//     return 'array1 is empty';
//     if(array2.length ===0)
//     return 'array2 is empty'; // to check that array2 is not empty

//     while(indexCount<array1.length && indexCount<array2.length){ // to sum arrays index values
//         newArray.push(array1[indexCount]+array2[indexCount]);
//         indexCount ++;
//     }
//     if (indexCount === array1.length){ //to check that I add all array2 index values 
//         for (let i=indexCount; i<array2.length;i++){
       
//             newArray.push(array2[i]);
//         }
//     }
    
//     return newArray
// }
// console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));
// document.write(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]))