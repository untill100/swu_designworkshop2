const text401 = document.querySelector(".text401 span")
const text402 = document.querySelector(".text402")

text401.addEventListener("click",function(){

    let isText401Click=false;

    if(isText401Click===false){
        text402.classList.add("a")
        isText401Click=true
    } else if(isText401Click===true){
        text402.classList.remove("a")
        isText401Click=false
    }

});