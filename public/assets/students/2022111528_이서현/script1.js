const magic=document.querySelector(".magic");
const text102=document.querySelector(".text102");

window.addEventListener("mousemove",function(e){
    let x=e.clientX;
    let y=e.clientY;

    x=x-magic.offsetWidth/2
    y=y-magic.offsetHeight/2

    magic.style.top=y+"px"
    magic.style.left=x+"px"
})

window.addEventListener("mousemove",function(e){
    let x=e.clientX;
    let y=e.clientY;

    x=x-text102.offsetWidth/2
    y=y-text102.offsetHeight/2

    text102.style.top=y-130+"px"
    text102.style.left=x+"px"
})