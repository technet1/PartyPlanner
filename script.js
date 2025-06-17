function scrollook (){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


document.querySelectorAll('#nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      locoScroll.scrollTo(targetId);
  });
});
document.getElementById('logo-img').addEventListener('click', function(e) {
  e.preventDefault();
  locoScroll.scrollTo('#page1');
});

};

function firstPageAnim(){
  var tl = gsap.timeline();
  tl.from("#nav",{
    y:'-10',
    opacity:0,
    ease: Expo.easeInOut,
    duration: .5
 
  })


 .to(".boundingelem",{
    y:0,
    ease: Expo.easeInOut,
    duration: .5,
    stagger: .1
  })

}
function circleMouseFollower(){
  window.addEventListener("mousemove",function(dets){
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  })
}

circleMouseFollower();
scrollook();
firstPageAnim();