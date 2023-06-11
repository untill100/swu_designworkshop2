var cw = window.innerWidth,
    ch = window.innerHeight,
    nWaves = 4,
    waves = [],
    amp = 20,
    speed = 0.4,
    detail = 30,
    waveY = 0;

for (var w=0; w<nWaves; w++) {
    var p = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    waves.push(p);
    $('#m').append(p);
     gsap.set(p, {attr:()=>{ return (w==0) ? {fill:'#fff'} : {fill:'none'}}});
}


gsap.timeline({defaults:{duration:1}, delay:0.9})
    .from('.txt1', {opacity:0, ease:'power2.inOut'}, 0)
    .to(window, {scrollTo:ch/2}, 0);

gsap.ticker.add(drawWave);

function drawWave(t) { 
  if (waveY!=-$(window).scrollTop()) gsap.to(window, {duration:1, waveY:Math.round($(window).scrollTop())});
  
  for (var k=0; k<nWaves; k++) {
    var p = waves[k],
        offset = (1 - k/nWaves) * nWaves/5,
        pts = '';
    
    for(var i=-1; i<(cw+detail); i+=detail) {
      var y = ch-waveY;
      y += Math.sin(i * 0.003 - t/speed + offset) * amp;
      y += Math.sin(i * 0.004 - t/speed + offset) * amp;
      y += Math.sin(i * -0.011 - t/speed + 20+offset) * amp;
      pts += i.toFixed(2)+','+y.toFixed(2)+' ';
    }
    
    gsap.set(p, {attr:{points:'-20,-20 -20,'+ch/2+' '+pts+' '+cw+',-20'}});
  }  
}

$(window).on('resize', ()=>{ cw=window.innerWidth; ch=window.innerHeight; })









const sections = document.querySelectorAll('.section');

let config = {
  rootMargin: '0px',
  threshold: 0
};

let observer = new IntersectionObserver((entries) => {
    // console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    } 

  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const current = document.querySelector('.section.active');
  const next = entry.target;
  const header = next.querySelector(".section--header");

  if (current) {
    current.classList.remove('active');
  }
  if (next) {
    next.classList.add('active');
    document.body.style.setProperty("--color-bg", next.dataset.bgcolor);
  }
}




if (document.body.animate) {
  document.querySelector('#button').addEventListener('click', pop);
}

function pop (e) {

  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = document.querySelector('#button').getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {

      createParticle(x, y);
    }
  } else {
    for (let i = 0; i < 30; i++) {

      createParticle(e.clientX, e.clientY);
    }
  }
}

function createParticle (x, y) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);
  
  // 5에서 25픽셀 사이 랜덤 생성
  const size = Math.floor(Math.random() * 20 + 5);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // 색깔 빨간색
  particle.style.background = `hsl(${Math.random() * 255, 50 , 10 }, 100%, 50%)`;
  
  // 마우스 클릭시 파티클 너비 생성
  const destinationX = x + (Math.random() - 0.5) * 3 * 600;
  const destinationY = y + (Math.random() - 0.5) * 3 * 600;


  const animation = particle.animate([
    {

      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      opacity: 1
    },
    {

      transform: `translate(${destinationX}px, ${destinationY}px)`,
      opacity: 0
    }
  ], {
   
    duration: Math.random() * 1000 + 500,
    easing: 'cubic-bezier(0, .9, .57, 1)',

    delay: Math.random() * 200
  });

  animation.onfinish = () => {
    particle.remove();
  };
}




// myAudio.play();
// const btnPlay = document.getElementById("btnPlay");
// btnPlay.onclick = function () {
//     myAudio.play();
// }