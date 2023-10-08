const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.from(".nav-bar", {
			y: "-10",
			opacity: 0,
			duration: 1.5,
			ease: Expo.easeInOut,
    })
    tl.to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    tl.from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
    
function circleMouseFollower() {
    window.addEventListener("mousemove", (details) => {
        document.querySelector(
            "#minicircle"
        ).style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
        // console.log(details.clientX, details.clientY);
       
    });
}

// second page par text k upar image wala feature

function textOverImage() {
document.querySelectorAll(".elem").forEach((element)=>{
    var rotate = 0;
    var diffrot = 0;

    element.addEventListener("mouseleave", (details) => {
        gsap.to(element.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });

    element.addEventListener("mousemove", (details) => {
        var diff = details.clientY - element.getBoundingClientRect().top;
        diffrot = details.clientX - rotate;
        rotate = details.clientX;
        console.log(diff);
        gsap.to(element.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5)
        });
    });
})    
}


textOverImage();
circleMouseFollower();
firstPageAnimation();
