/* click 시 me 실행 */
const clickCatch = document.querySelector("#catch");
const me = document.querySelector("#me");
const you = document.querySelector("#you");

clickCatch.addEventListener("click", function() {
    me.classList.add("active");
})

window.addEventListener("mousemove", function(e) {
    
    let x = e.clientX;
    let y = e.clientY;

    x = x - me.offsetWidth / 2;
    y = y - me.offsetHeight / 2;

    me.style.left = x + "px";
    me.style.top = y + "px";
});



/* you 움직임 */

var animationRunning = false; 

you.addEventListener("click", function(){
    if (!animationRunning) { 

        you.style.animationPlayState = 'running'; 

        animationRunning = true; 
    } else {
        you.style.animationPlayState = 'paused'; 
        
        animationRunning = false; 
    }
});


var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var velocityX = 3;
var velocityY = 4;

var youElement = document.getElementById("you");

function update() {
    x += velocityX;
    y += velocityY;

    if (x + youElement.offsetWidth / 2 > window.innerWidth || x - youElement.offsetWidth / 2 < 0) {
        velocityX *= -1;
    }
    if (y + youElement.offsetHeight / 2 > window.innerHeight || y - youElement.offsetHeight / 2 < 0) {
        velocityY *= -1;
    }

    youElement.style.top = y + "px";
    youElement.style.left = x + "px";

    requestAnimationFrame(update);
}

update();



// gossip 무작위 생성

const gossipItems = document.querySelectorAll(".item-gossip");

gossipItems.forEach((item) => {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);

    item.style.position = "absolute";
    item.style.top = `${randomY}px`;
    item.style.left = `${randomX}px`;
});

setInterval(() => {
    gossipItems.forEach((item) => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    const randomDeg = Math.floor(Math.random() * 90);

    item.style.transform = `rotate(${randomDeg}deg)`;
    item.style.top = `${randomY}px`;
    item.style.left = `${randomX}px`;
    });
}, 5000);


// 닿았을 때

const pg1 = document.querySelector("#pg1");
const witch = document.querySelector("#witch");
const aaa = document.querySelector("#aaa");
const massage = document.querySelector("#massage");
const pg3 = document.querySelector("#pg3");

you.addEventListener("click", function() {
    pg1.classList.add("witchCatch");
    witch.classList.add("witchCatch");
    pg3.classList.add("witchCatch");
    aaa.classList.add("witchCatch");

    setTimeout(function() {
        window.location.href = "index 3.html";
      }, 2000);
});





const home = document.querySelector("#home");
const pg2 = document.querySelector("#pg2");

document.getElementById("home").addEventListener("click", function() {
    document.getElementById("pg2").style.transform = "translateX(5300px)";
    document.getElementById("pg3").style.transform = "translateX(5300px)";
});

