
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
}
function changeBoldfun(){
    changeTextarea.style.fontWeight='bold';
}
function changeUnderlinefun(){
    changeTextarea.style.textDecoration='underline';
}
/*Task 5: */
let pass1=document.getElementById('passwordInput');
let pass2=document.getElementById('passwordInput2');
function performInput(){
    if (pass1.length<6){
        document.getElementById('error1').innerHTML='*Password must be at least 6 characters long';
        return false;
    }
    if(pass1.innerHTML != pass2.innerHTML){
        document.getElementById('error2').innerHTML=`*The two password don't match`;
        return false;
    }
}

/*Task 6: */

function showFunction1() {
    document.getElementById("p1_text").style.visibility="visible";
    document.getElementById("p1_show").style.visibility="hidden";
    document.getElementById('main-heading').style.height="500px";
   
}
function hideFunction1() {
    document.getElementById("p1_text").style.visibility="hidden";
    document.getElementById("p1_show").style.visibility="visible";
    document.getElementById('main-heading').style.height="100px";
}
function showFunction2() {
    document.getElementById("p2_text").style.visibility="visible";
    document.getElementById("p2_show").style.visibility="hidden";
    document.getElementById('main-heading').style.height="500px";

}
function hideFunction2() {
    document.getElementById("p2_text").style.visibility="hidden";
    document.getElementById("p2_show").style.visibility="visible";
    document.getElementById('main-heading').style.height="100px";
}
function showFunction3() {
    document.getElementById("p3_text").style.visibility="visible";
    document.getElementById("p3_show").style.visibility="hidden";
    document.getElementById('main-heading').style.height="500px";
    
}
function hideFunction3() {
    document.getElementById("p3_text").style.visibility="hidden";
    document.getElementById("p3_show").style.visibility="visible";
    document.getElementById('main-heading').style.height="100px";
}