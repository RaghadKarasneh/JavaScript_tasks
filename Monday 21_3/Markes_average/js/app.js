'use strict';

function avgerage(array){
    let avg=0;
    let sum=0;
    let grade='';
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    avg=sum/array.length;

    if(avg<60){
        grade='F';
    }
    else if ((avg>60)&&(avg<70)){
        grade='D';
    }
    else if ((avg>70)&&(avg<80)){
        grade='C';
    }
    else if ((avg>80)&&(avg<90)){
        grade='B';
    }
    else if ((avg>90)&&(avg<100)){
        grade='A';
    }
    return `The avearge is ${avg} and the grade is ${grade}.`;
}
document.getElementById('result').innerHTML=avgerage([80,77,88,95,68]);