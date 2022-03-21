
/*Asking user to insert the values */
let operation=prompt('Plesae Enter one of the following operation: +, -, *, /');
let first_num_string= prompt('please enter the first number');
let second_num_string= prompt('please enter the second number');

/*Converting the strings to numbers*/
let first_num_number= Number(first_num_string);
let second_num_number= Number(second_num_string);

/*Adding Numbers to html page */
document.getElementById('html_operation').innerHTML=operation;
document.getElementById('fnum').innerHTML=first_num_number;
document.getElementById('snum').innerHTML=second_num_number;

/* The operation Cases */
switch (operation) {
    case "+":{
        let result=first_num_number + second_num_number;
        console.log(result);
        alert(result);
        document.getElementById('result').innerHTML= result;
        break;
    }
    case "-":{
        let result=first_num_number - second_num_number;
        console.log(result);
        alert(result);
        document.getElementById('result').innerHTML=result;
        break;
    }
    case "*":{
        let result= (first_num_number * second_num_number);
        console.log(result);
        alert(result);
        document.getElementById('result').innerHTML= result;
        break;
    }
    case "/":{
        let result=first_num_number / second_num_number;
        console.log(result);
        alert(result);
        document.getElementById('result').innerHTML= result;
        break;
    }
    default:
        break;
}