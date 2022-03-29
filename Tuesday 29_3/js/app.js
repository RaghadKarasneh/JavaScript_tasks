'use strict';
let newArray;
let ulParent=document.getElementById('testLi');


async function getData(){
   let response= await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.387c44093108cb229d491116cdb062a5&q=amman&format=json')
   console.log(response);
   let data=await response.json(); //transfer all the data that came from url (fetch) to json
   console.log(data);
   
  data.map((i,index)=>
   {
       let liChild = document.createElement("li");
       liChild.style.fontWeight= "bold";
       let x = i.display_name.split(",",2)

        console.log(i);
       liChild.innerHTML =  `<span style="">disaply name</span>: ${x }
       <br>
       <br>
       lat: ${i.lat}
       <br>
       <br>
       lon: ${i.lon}
       <br>
       <br>`
       ;
       ulParent.appendChild(liChild);
})
}


getData();
