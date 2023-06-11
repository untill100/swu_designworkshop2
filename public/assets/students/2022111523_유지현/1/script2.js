
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

const plz = document.getElementById('plz');
const word1 = document.querySelector('.word1');
const word = document.querySelector('.word');

plz.addEventListener('click', () => {
  word1.style.transition = 'transform 15s ease-in-out';
  word.style.transition = 'transform 15s ease-in-out';
  word1.style.transform = 'translateX(-700px)';
  word.style.transform = 'translateX(-650px)';
});


const rka = document.getElementById('rka');
const zkf = document.querySelector('.zkf');
const zkf2 = document.querySelector('.zkf2');
const zkf3 = document.querySelector('.zkf3');

rka.addEventListener('click', function() {
  zkf.style.transform = 'rotate(-20deg) translateY(-20px) translateX(20px)';
  zkf.style.backgroundColor = 'red';
  zkf.style.color = 'white';
  zkf.style.width= '600px';
  zkf.textContent = '긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼';
});

rka.addEventListener('click', function() {
  zkf2.style.transform = 'rotate(40deg) translateX(-300px) translateY(180px)';
  zkf2.style.backgroundColor = '#00ff1a';
  zkf2.style.color = 'white';
  zkf2.style.width= '500px';
  zkf2.textContent = '긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼';
  zkf2.style.fontSize = '14px';
});

rka.addEventListener('click', function() {
  zkf3.style.transform = 'rotate(90deg) translateX(-150px) translateY(230px)';
  zkf3.style.backgroundColor = 'rgb(0, 0, 255)';
  zkf3.style.color = 'white';
  zkf3.style.width= '600px';
  zkf3.textContent = '긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼 긴 칼';
  zkf3.style.fontSize = '14px';
});




