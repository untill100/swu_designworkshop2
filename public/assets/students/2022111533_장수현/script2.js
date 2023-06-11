var class7Element = document.querySelector('.class7');
var class71Element = document.querySelector('.class71');

class7Element.addEventListener('click', function() {
    if (class71Element.style.display === 'none') {
        class71Element.style.display = 'block'; // 클래스 1을 클릭하여 클래스 2를 보이게 합니다.
    } else {
        class71Element.style.display = 'none'; // 클래스 1을 다시 클릭하여 클래스 2를 숨깁니다.
        }
});

var class9Element = document.querySelector('.class9');
var textElement = document.querySelector('#text');

class9Element.addEventListener('click', function() {
    if (textElement.style.display === 'none') {
        textElement.style.display = 'block';
    } else {
        textElement.style.display = 'none';
    }
});





const text = document.querySelector("#text");

text.addEventListener("click", function() {
    const new_p = document.createElement("p"); // 새로운 <p></p> 요소를 createElement를 통해 만들기!
    new_p.innerText = text.innerText // 기존 텍스트의 문자열을, 새로운 <p>요소에 담아줌.

    const app = document.querySelector("#app");
    app.appendChild(new_p); // app에 appendChild로, 새로 만든 <p>요소를 담아줌.
});
