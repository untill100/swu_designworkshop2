
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }


document.getElementById('hot').addEventListener('mouseover', function() {
  document.getElementById('target').style.color = 'rgb(255, 0, 0)';
});

document.getElementById('cold').addEventListener('mouseover', function() {
  document.getElementById('target').style.color = 'rgb(0, 0, 255)';
});


// document.getElementById('highlight').addEventListener('mouseover', function() {
//   document.getElementById('fade').style.marginLeft = '-100%';
// });



let count = 0; 
let currentPlanetSize = 600; 

const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");

const planet = document.querySelector("#planet");


circle1.addEventListener("click", function() {
   checkCount1();
   shrinkCircle();
});

circle2.addEventListener("click", function() {
   checkCount2();
   shrinkCircle();
});


function checkCount1() { 
   if( count < 6 ) { 
      count = count + 1;
   } else {  
      window.location.href = "me.html";
   }
}


function checkCount2() { 
   if( count < 6 ) {
      count = count + 1;
   } else {
      window.location.href = "you.html";
   }
}



function shrinkCircle() { 
   currentPlanetSize = currentPlanetSize / 2; 
   
   planet.style.width = currentPlanetSize / 2 + "px";
   planet.style.height = currentPlanetSize / 2 + "px";
}



const with1 = document.querySelector('.with1');



document.getElementById('ice').addEventListener('mouseover', function() {
   document.getElementById('ice').style.color = 'rgb(255, 255, 255)';
});


ice.addEventListener('click',function() {
   with1.style.transition = 'letter-spacing 5s ease-in-out';
   with1.style.letterSpacing = '0';
 });