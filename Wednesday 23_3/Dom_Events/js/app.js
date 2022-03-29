
'use strict';

/* TASK1: Change inner text*/
function changeContent(x){
    x.innerHTML='Can I help you?".';
}
function backContent(){
    let x= document.getElementById('container_task1').innerHTML='Hello World!';
    return x;
}

/* TASK2: Change inner text*/
let task2= document.getElementById('container_task2');
task2.style.backgroundColor = "blue";
let divBackgroundColors= ['red', 'green', 'blue'];
let i = 0; // The is the colors array index

 function color(){
     task2.style.backgroundColor=divBackgroundColors[i];      
     i = (i + 1) % divBackgroundColors.length; //incremant the index to change to next color in the next click
     console.log((i + 1) % divBackgroundColors.length);
 }

 /*Task3:  */
let task3=document.getElementById('country');
function changeFlag(){
     if (task3.value=== 'Norway'){
         document.getElementById('flag').src='https://th.bing.com/th/id/R.a24c7430ce582a78db3ca345c6b8114a?rik=fuM7357lyQtUAg&riu=http%3a%2f%2fwww.theflagman.co.uk%2fwp-content%2fuploads%2f2017%2f03%2fflag-of-Norway.jpg&ehk=p1CiZZUAz3jzNW%2fll8ROghxbz%2bqKtnaf2tJV5uwAyBU%3d&risl=&pid=ImgRaw&r=0';
         document.getElementById('flag').alt='Norway'
     }
     else if (task3.value==='America'){
        document.getElementById('flag').src='https://th.bing.com/th/id/OIP.DP3Vo8PEReh_qJwHkl95mwHaEC?pid=ImgDet&rs=1';
        document.getElementById('flag').alt='America'
     }
     else if(task3.value==='Spain'){
         document.getElementById('flag').src='https://th.bing.com/th/id/OIP.Y-wvFU0O_d-FYXjEZPPecAHaEK?pid=ImgDet&rs=1';
         document.getElementById('flag').alt='Spain'
     }
     else if(task3.value==='England'){
         document.getElementById('flag').src='https://preview.redd.it/7fhyzd05y58y.png?auto=webp&s=ef156ae1323bce8fbe9bccae566d368f55f0e37a';
         document.getElementById('flag').alt='England';
     }
 };

 /*Task4:  */
let selectFontFamily= document.getElementById('font-family');
let selectFontSize= document.getElementById('font-size');
let changeItalic= document.getElementById('italic');
let changeBold= document.getElementById('bold');
let changeUnderline= document.getElementById('underline');
let changeTextarea= document.getElementById('textArea');
/*
Change Font Family
*/
function changeFontFamily(){
    if(selectFontFamily.value=='Arial'){
        changeTextarea.style.fontFamily='Arial';
    }
    else if(selectFontFamily.value=='Verdana'){
        changeTextarea.style.fontFamily='Verdana';
    }
    else if(selectFontFamily.value=='Times New Roman'){
        changeTextarea.style.fontFamily='Times New Roman';
    }
}
/*
Change Font Size
*/
function changeFontSize(){
    if(selectFontSize.value=='12pt'){
        changeTextarea.style.fontSize='12pt';
    }
    else if(selectFontSize.value=='14pt'){
        changeTextarea.style.fontSize='14pt';
    }
    else if(selectFontSize.value=='16pt'){
        changeTextarea.style.fontSize='16pt';
    }
}
/*
Change to OR from Italic
*/
function changeItalicfun(){
    changeTextarea.style.fontStyle='italic';
    let italicChecked = document.getElementById("italic").checked;
    changeTextarea.style.fontStyle = (italicChecked ? "italic" : "normal");
}
function changeBoldfun(){
    changeTextarea.style.fontWeight='bold';
    let boldChecked = document.getElementById("bold").checked;
    changeTextarea.style.fontWeight = (boldChecked ? "bold" : "normal");
}
function changeUnderlinefun(){
    changeTextarea.style.textDecoration='underline';
    let undelineChecked = document.getElementById("underline").checked;
    changeTextarea.style.textDecorationLine=(undelineChecked ? "underline" : "none");
}
/*Task 5: */
let btn =document.getElementById("task5Submit");
 
   function checkPassword() {
       let p1 = document.getElementById("password1");
       let p2 = document.getElementById("password2");
       let msg1 = document.getElementById("pass1_check");
       let msg2 = document.getElementById("pass2_check");
      
       if(p1.value.length >= 6){
           msg1.innerHTML = "Correct Password length";
       }
       else{
           msg1.innerHTML="*Password must be at least 6 characters long";
       }

       if (p1.value == p2.value) {
           msg2.innerHTML= "The two passwords match";
           btn.style.visibility="visible";
       }
       else if(p1.value != p2.value && p1.value.length <6){
           msg2.innerHTML="*The two passwords must match";
       }

}

/*Task 6: */

function showFunction1() {
    document.getElementById("p1_text").style.display="block";
    document.getElementById("p1_show").style.display="none";
    document.getElementById('main-div').style.height="324px";
   
}
function hideFunction1() {
    document.getElementById("p1_text").style.display="none";
    document.getElementById("p1_show").style.display="inline-block";
    document.getElementById('main-div').style.height="10px";
}
function showFunction2() {
    document.getElementById("p2_text").style.display="block";
    document.getElementById("p2_show").style.display="none";
    document.getElementById('main-div').style.height="324px";

}
function hideFunction2() {
    document.getElementById("p2_text").style.display="none";
    document.getElementById("p2_show").style.dispkay="inline-blocj";
    document.getElementById('main-div').style.height="100px";
}
function showFunction3() {
    document.getElementById("p3_text").style.display="block";
    document.getElementById("p3_show").style.display="none";
    document.getElementById('main-div').style.height="324px";
    
}
function hideFunction3() {
    document.getElementById("p3_text").style.display="none";
    document.getElementById("p3_show").style.display="inline-block";
    document.getElementById('main-div').style.height="100px";
}