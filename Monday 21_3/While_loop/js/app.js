'use strict';

/*TASK1:
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
*/
function subtract(num){
    let sub=0;
    while(num){
       
            sub=num-(num-1);
            console.log(sub);

            num--;
        }
    
    return sub;
}
document.getElementById('task1_result').innerHTML=subtract(5);

/*TASK2:
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
*/
function factorial(num){
    let mutiple=1;
    while(num>0){
        mutiple=num*mutiple;
        num--;
    }
    return mutiple;
}
document.getElementById('task2_result').innerHTML=factorial(4);

/*TASK3:
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
*/
function repeatStr(string,number){
    let mutiple=1;
    let lastString='';
    while (number>0){
        lastString=lastString+string;
        lastString=lastString+ ' '
        number--;
    }
    return lastString
}
document.getElementById('task3_result').innerHTML=repeatStr("to",3);

/*TASK4:
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number 
*/
function sum2(num1,num2){
    let sum=0;
    // First case when num1>num2
    while(num1>num2){
        sum=sum+num1;
        num1--;
    }
    while(num2>=num1){
        sum=sum+num2;
        num2--;
    }
    // Second case when num2>=num1
 return sum;
}
document.getElementById('task4_result').innerHTML=sum2(3, 6);

/*TASK5:
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
*/
function repeatStr2(string,string_num){
        let lastString='';
        let num=string_num.length;
        while (num){
            lastString=lastString+' '+string;
            num--;
        }
        return lastString
    }
document.getElementById('task5_result').innerHTML=repeatStr2("to",'cccc');

/*TASK6:
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number) 
*/
function multiOf(num1,num2,num3){
    let result;
    while(num3){
        result=Math.pow(num2,num3);
        console.log(result);
        result=result*num1;
        break;
    }
    return result;
}
document.getElementById('task6_result').innerHTML=multiOf(4,10,3);

/*TASK7:
 Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
*/
function muti2(num1,num2){
    let mutiple=1;
    while(num2>=num1){
        mutiple=mutiple*num1;
        num1++;
    }
 return mutiple;
}
document.getElementById('task7_result').innerHTML=muti2(3, 6);

/*TASK8:
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
*/
function numberBetweenUs(num1,num2){
     let array=[];
     while(num1!==num2-1){
       array.push(num1+1);
       num1++;
     }
     return `"${array.join(', ')}"`;
 } 
document.getElementById('task8_result').innerHTML=numberBetweenUs(2,8);

/*TASK9:
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
*/
function countDown(num){
    let array=[];
    while(num>0){
        array.push(num);
        num--;
    }
    if(num==0){
        array.push('done');
    }
    return `"${array.join(', ')}"`;
}
document.getElementById('task9_result').innerHTML=countDown(7);

/*TASK10:
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
*/
function multiplication2(num1,num2){
    let sum=0;
    while(num2){
       sum=sum+num1;
        num2--;
    }
    return sum;
}
document.getElementById('task10_result').innerHTML=multiplication2(5,4);

/*TASK11:
Write a function called mod2
that takes two parameters
and return the module of them
*/
function mod2(num1,num2){
    let result;
    while(num2){
        result=num1%num2;
        break;
    }
    return result;
}
document.getElementById('task11_result').innerHTML=mod2(7,4);

/*TASK12:
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
*/
function repeatChar(string1,string2){
    let newString1=string1.toLowerCase();
    let string1Length=string1.length;
    let i=0;
    let sum=0;
    while(string1Length>0){
        if(newString1[i]==string2){
            sum=sum+1;
        }
        i++;
        string1Length--;
    }
    return sum;
}
document.getElementById('task12_result').innerHTML=repeatChar("schOol","o");