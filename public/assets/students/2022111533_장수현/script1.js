var class1Element = document.querySelector('.class1');
var class2Element = document.querySelector('.class2');

class1Element.addEventListener('click', function() {
    if (class2Element.style.display === 'none') {
        class2Element.style.display = 'block'; // 클래스 1을 클릭하여 클래스 를 보이게 합니다.
    } else {
        class2Element.style.display = 'none'; // 클래스 1을 다시 클릭하여 클래스 2를 숨깁니다.
    }
});

setInterval(() => {
    const p = document.createElement("p");
    p.innerText = "그이다";

    
    class1Element.appendChild(p);
}, 1000);