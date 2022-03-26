'use strict';

let star='*';
document.write(star);
for (let i=0; i<4;i++){
    document.write('<br/>');
    console.log(star);
    star=star+' '+'*';
    document.write(star);
}
