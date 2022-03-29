'use strict';

//TASK1:
let mySelf={
    firstName:'Raghad',
    lastName:'ALKarasneh',
    age:'26',
    dob:'17/10/1995',
    favoriteFood:['Dwali','Taboleh','Beans'],
    favoriteMovies:['The Conjuring','The purge','The Invisible Man','Nun','It']
}
console.log('Task1 result:')
console.log( mySelf);
document.getElementById('task1_result').innerHTML=(`my name is ${mySelf.firstName} ${mySelf.lastName}, My date of birth is  ${mySelf.dob}, my favorite foods are ${mySelf.favoriteFood}, and my favourite Movies are ${mySelf.favoriteMovies}. `);

/// persons array
let persons=[
    {name: {first:'John', last:'Hob'}, age:35},
    {name: { first: 'Alex', last: 'Mercer' }, age:25 },
    {name: { first: 'Alice', last: 'Zaheer' }, age:24},
    {name: { first: 'Zues', last: 'Odin' }, age:55 },
    {name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
//TASK2:
function firstName(array){
    let firstNameArray=[];
    for (let i=0; i<array.length;i++){
        firstNameArray[i]=array[i].name.first;
   }
   return firstNameArray;
}
console.log('Task2 result is: '+firstName(persons));
document.getElementById('task2_result').innerHTML=firstName(persons);
//TASK3:
function averageAge(array){
    let avg=0
    for(let i=0; i<array.length;i++){
        avg=avg+array[i].age;
    }
    return avg/array.length;
}
console.log('Task3 result is: '+averageAge(persons));
document.getElementById('task3_result').innerHTML=averageAge(persons);

//TASK4:
function olderPerson(array){
    
    let firstFullName='';
    let lastFullName='';
    let older=50; //To compare
    for(let i=0;i<array.length;i++)
    {    
    if(older< array[i].age)
    {
        older=array[i].age;
        firstFullName=array[i].name.first;
        lastFullName=array[i].name.last;
    }
  } 
   //console.log(older);
    return firstFullName + ' ' + lastFullName;
}

console.log('Task4 result is: '+olderPerson(persons));
document.getElementById('task4_result').innerHTML=olderPerson(persons);

//TASK5:
function longestName(array){
    let fullName=10; //To compare with the length of the person full name
    let firstFullName='';
    let lastFullName='';
    for(let i=0;i<array.length;i++){
        if (fullName< (array[i].name.first.length + array[i].name.last.length)){
            fullName=array[i].name.first.length+array[i].name.last.length;
            firstFullName=array[i].name.first;
            lastFullName=array[i].name.last;
        }
    }
    return firstFullName + ' ' + lastFullName;
}

console.log('Task5 result is: '+longestName(persons));
document.getElementById('task5_result').innerHTML=longestName(persons);

//TASK6 is the same of TASK5

//TASK7:
/*Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat */

function repeatWord(string){
    let subString=string.toLowerCase().split(' '); // To count Uppercase and Lowercase
    let obj={}; //To store the result
    let count;
    for(let i=0; i<string.length; i++){
       let objIndex=obj[subString[i]];
       if(objIndex){
           count=objIndex;
       }
       else{
        count =0;
       }
        
       obj[subString[i]] =count +1
       }
       return obj;
}
console.log('Task7 result:')
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));
document.getElementById('task7_result').innerHTML=repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO");

//TASK8:
function repeatChar(string){
    let subSting=string.toLowerCase(); // To count Uppercase and Lowercase
    var obj={}
    for(let i = 0, length = subSting.length; i < length; i++) {
        var objIndex = subSting.charAt(i)
        obj[objIndex] = (isNaN(obj[objIndex]) ? 1 : obj[objIndex] + 1); //Another way to write if statment
    } 
    return obj;
}
console.log('Task8 result:')
console.log(repeatChar("mamababatetacedo"));
document.getElementById('task8_result').innerHTML= repeatChar("mamababatetacedo");

//TASK9:
function selectFromObject(object,array){
    let obj={};
    for(let i=0;i<array.length;i++){
        if(Object.keys(object,array)==array[i]){
            console.log(object);
             object[array[i]]=object[array[i]];
        }
    }
    return object
}
console.log('Task9 result:')
console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));
document.getElementById('task9_result').innerHTML=selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']);

//TASK10:
function objectToArray(object){
    let keys=Object.keys(object);
    let values=Object.values(object);
    let array=keys.concat(values);
    return array;
}
console.log('Task10 result:')
console.log(objectToArray({firstName:"Moh",age:24}));
document.getElementById('task10_result').innerHTML=objectToArray({firstName:"Moh",age:24});

//TASK11:
function arrayToObject (array){
    let obj={};
    for (let i=0; i<array.length;i+=2)
    {   
      obj[array[i]]=array[i+1];
    }
    return obj
}
console.log('Task11 result:')
console.log(arrayToObject(["firstName","Moh","age",24]));
document.getElementById('task11_result').innerHTML=arrayToObject(["firstName","Moh","age",24]);

//TASK12:
function onlyNuumber(object){
    
    let newObj={};
    for (let i=0;i<Object.keys(object).length;i++)
    {
        if(typeof(Object.values(object)[i])=='number'){
            newObj[Object.keys(object)[i]]=Object.values(object)[i];
        }
    }
    return newObj
}
console.log('Task12 result is: ',onlyNuumber({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.getElementById('task12_result').innerHTML=onlyNuumber({firstName:"Moh",age:24,movies:[1,5,"string"]});

//TASK13:
function onlyString(object){
    let newObj={};
    for (let i=0;i<Object.keys(object).length;i++){
        if (typeof(Object.values(object)[i])=='string'){
            newObj[Object.keys(object)[i]]=Object.values(object)[i];
        }
    }
    return newObj
}
console.log('Task13 result is: ',onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.getElementById('task13_result').innerHTML=onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]});

//TASK14:
function onlyArray(object){
    let newObj={};
    for (let i=0;i<Object.keys(object).length;i++)
    { if(Array.isArray(Object.values(object)[i])){
        newObj[Object.keys(object)[i]]=Object.values(object)[i];
    }
      
    }

    return newObj
}
console.log('Task14 result is: ',onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.getElementById('task14_result').innerHTML= onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]});

//TASK15:
function keysArray(object){
    let keys=Object.keys(object);
    return keys
}
console.log('Task15 result is: ',keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.getElementById('task15_result').innerHTML=keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]});