var class1Element = document.querySelector('.class1');
var class11Element = document.querySelector('.class11');

class1Element.addEventListener('click', function() {
    if (class11Element.style.display === 'none') {
        class11Element.style.display = 'block'; // 클래스 1을 클릭하여 클래스 2를 보이게 합니다.
    } else {
        class11Element.style.display = 'none'; // 클래스 1을 다시 클릭하여 클래스 2를 숨깁니다.
        }
});