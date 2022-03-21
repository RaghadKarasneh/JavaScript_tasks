
/*Asking user to insert values*/
let day_name=prompt('Please Enter the number of the day and notic that Sunday is = 1, Monday = 2,...etc.')

/*Converting Strings to Numbers*/
let day_num= Number(day_name);

/* The days Cases */
switch (day_num) {
    case 1:{
        alert('You insert Sunday');
        console.log('You insert Sunday');
        document.getElementById('day_name_p').innerHTML= "Sunday";
        break;
    }
    case 2:{
        alert('You insert Monday');
        console.log('You insert Monday');
        document.getElementById('day_name_p').innerHTML= "Monday";
        break;
    }
    case 3:{
        alert('You insert Tuesday');
        console.log('You insert Tuesday');
        document.getElementById('day_name_p').innerHTML= "Tuesday";
        break;
    }
    case 4:{
        alert('You insert Wednesday');
        console.log('You insert Wednesday');
        document.getElementById('day_name_p').innerHTML= "Wednesday";
        break;
    }
    case 5:{
        alert('You insert Thursday');
        console.log('You insert Thursday');
        document.getElementById('day_name_p').innerHTML= "Thursday";
        break;
    }
    case 6:{
        alert('You insert Friday');
        console.log('You insert Friday');
        document.getElementById('day_name_p').innerHTML= "Friday";
        break;
    }
    case 7:{
        alert('You insert Saturday');
        console.log('You insert Saturday');
        document.getElementById('day_name_p').innerHTML="Saturday"
        break;
    }
    default:
        alert('Invalid Number');
        console.log('Invalid Number');
        document.getElementById('day_name_p').innerHTML="Invalid Number";
        break;
}
