const Return = document.getElementById("return");
const Feed = document.querySelector("#feed");
const Smell = document.querySelector("#smell");
const Man = document.querySelector("#man");
const Helper = document.querySelector("#helper");
const Final = document.querySelector("#final");
const Page = document.querySelector("#hippage1")





//button//
Return.addEventListener("click", function() {
    
    window.location.href = "index2.html";
  });

//active//

  
//drag//
  let isMouseDown = false; 

  
  
  Feed.addEventListener("mousedown", function() {  
      isMouseDown = true; 
  });
  
  window.addEventListener("mousemove", function(e) {   
    // const x= Feed.style.left;
    // const y = Feed.style.top;

      if( isMouseDown === true ) { 
          const x = e.clientX -Feed.offsetWidth / 2 ;
          const y = e.clientY -Feed.offsetHeight / 2;
          Feed.style.left = x + "px";
          Feed.style.top = y + "px";

          const man = document.querySelector("#man");

          const condition = x >= man.offsetLeft
          const condition2 = y >= man.offsetTop

          if ( condition && condition2) {
            Smell.classList.add('active');
            Man.classList.add('active');
            Feed.classList.add('active');
            Helper.classList.add('active');
            Final.classList.add('active');
            Page.classList.add('active');









          } else {
            
          }
          
      }
    
  });
  
  window.addEventListener("mouseup", function() {      
      isMouseDown = false;
  });




// let offsetX = 0;
// let offsetY = 0;

// Feed.addEventListener('mousedown', dragStart);
// Feed.addEventListener('mousemove', drag);
// Feed.addEventListener('mouseup', dragEnd);

// function dragStart(e) {
//   offsetX = e.clientX - Feed.offsetLeft;
//   offsetY = e.clientY - Feed.offsetTop;

//   if (offsetX === 500 + px , offsetY === 500 + px) {
//     Smell.classList.add('active');
//   } else {
//     Smell.classList.remove('active');
//   }
// }

// function drag(e) {
//   if (e.buttons !== 1) return; // 마우스 왼쪽 버튼이 눌리지 않은 경우 중지
  
//   Feed.style.left = e.clientX - offsetX + 'px';
//   Feed.style.top = e.clientY - offsetY + 'px';


// }

// function dragEnd() {
//   offsetX = 0;
//   offsetY = 0;
// }









