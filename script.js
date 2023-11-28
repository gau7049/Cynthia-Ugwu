let mouse = document.querySelector("#mini-circle");
let anchor = document.querySelectorAll("a");
var timeout;

function firstPageAnime(){
  var t1 = gsap.timeline();

  t1.from("#nav",{
      y: '-10',
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut
  })
  .to(".boundinglem",{
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2
    })
  .from("#hero-footer",{
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut
    })

}

gsap.from(".elem", {
  opacity: 0,
  y: 80,
  scrollTrigger: {
    trigger: ".elem",
    scroller: "body",
    start: "top 60%",
    end: "top 58%",
    scrub: 1
  }
})

firstPageAnime(); // whole concept i need to revise again but it's for animation 


document.querySelector("#nav h4").addEventListener("mouseenter", function(){
  mouse.style.height = "35px";
  mouse.style.width = "35px";
  mouse.style.transition = "all 0.1800s ease-out";
})

document.querySelector("#nav h4").addEventListener("mouseleave", function(){
  mouse.style.height = "10px";
  mouse.style.width = "10px";
  mouse.style.transition = "all 0.1800s ease-out";
})


anchor.forEach((a) => {
  a.addEventListener("mouseenter", function(){
    mouse.style.height = "35px";
    mouse.style.width = "35px";
    mouse.style.transition = "all 0.1800s ease-out";
  })
  a.addEventListener("mouseleave", function(){
    mouse.style.height = "10px";
    mouse.style.width = "10px";
    mouse.style.transition = "all 0.1800s ease-out";
  })
});




function MovemomentCursor() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#mini-circle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
  
  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      mouse.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }

MovemomentCursor();


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
    gsap.to(elem.querySelector("h1"), {
      opacity: 1
    })
    gsap.to(elem.querySelector("p"), {
      opacity: 1
    })
    gsap.to(elem.querySelector("h1"), {
      x: 0
    })
  });
  
  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
    gsap.to(elem.querySelector("p"), {
      opacity: 0.4
    })
    gsap.to(elem.querySelector("h1"), {
      opacity: 0.4
    })
    gsap.to(elem.querySelector("h1"), {
      x: 40,
      ease: Power3
    })
  });
});


let time = document.getElementById("time");
time.style.color = "white";

myTimer();

function myTimer() {
  const d = new Date();
  let pm_ya_am = d.toLocaleTimeString();
  let hour = d.getHours();
  console.log(pm_ya_am)
  if(pm_ya_am.includes("PM") || pm_ya_am.includes("pm")){
    pm_ya_am = "pm";
    if(hour != 12){
        hour = d.getHours() % 12;
    }
  } else {
    pm_ya_am = "am"
  }
    time.innerHTML = hour + ":" + d.getMinutes() + " " + pm_ya_am + " est ";
    setInterval(myTimer, 1000);
}