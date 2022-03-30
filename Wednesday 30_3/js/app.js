'use strict';

let firstName=document.getElementById('fname');
let firstNameError=document.getElementById('fname-error');
let lastName=document.getElementById('lname');
let lastNameError=document.getElementById('sname-error');
let regFormx=document.getElementById('regs_form');
let info=[];

/*Regestration Constructor */
function regForm(fname,lname,femail,semail){

this.fname=fname;
this.lname=lname;
this.femail=femail;
this.semail=semail;
this.fullName=userName(this.fname,this.lname);
this.correctEmail=correctEmail(femail,semail);
console.log(this.fullName);
info.push(this);
renderInfo();

}
/*To return the full name */
function userName(fname,lname){
    let x;
    let regex = /[a-zA-Z\s]+$/;
    if ((regex.test(fname)) && (regex.test(lname))){
        
        console.log('correct');
        x = fname + ' '+ lname;
        return x;
    }
    else{
        return 'Incorrect name';
       
    }
}
/*To check from the date */
function date_to_age(date)
{
        var today = new Date();
        var d = new Date(date);

        var year = today.getFullYear() - d.getFullYear();
        var month = today.getMonth() - d.getMonth();
        var day = today.getDate() - d.getDate();
        var carry = 0;

        if (year < 0)
            return 0;
        if (month <= 0 && day <= 0)
           { carry -= 1;

        var age = parseInt(year);
        age += carry;

        return Math.abs(age);}
        else console.log(err.message);

}

/*To check from the email */
function correctEmail(femail,semail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(femail))
    {
      return (true)
    }0
      alert("You have entered an invalid email address!")
      return (false)
      /*function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
 */
  }
  
regFormx.addEventListener('submit', handelSubmit);
function handelSubmit(e){
    e.preventDefault();
    let fname=e.target.fname.value;
    let lname=e.target.lname.value;
    let femail=e.target.femail.value;
    let semail=e.target.semail.value;
    new regForm(fname,lname,femail,semail); //Calling the constructor
}
handelSubmit();
function renderInfo(){
    info.map(function(i,index){
        console.log('hi');
        firstNameError.innerHTML= info[index].fullName;
    })
    
    
}

