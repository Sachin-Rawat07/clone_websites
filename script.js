function init(){    
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
    
}

init()

var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
main.addEventListener("mousemove",function(dets){
        // console.log(hey);
        crsr.style.left=dets.x+"px"
        crsr.style.top=dets.y+"px"
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller: ".main",
    // markers:true,
    start:"top 27%",
    end:"top 0",
    scrub:3

}
})

tl.to(".page1 h1",{
    x:-100,
    

},"anim")
tl.to(".page1 h2",{
  x:100,
  

},"anim")

tl.to(".page1 video",{
  width:"90%"

},"anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller: ".main",
    // markers:true,
    start:"top -115%",
    end:"top -120",
    scrub:3

}
})

tl2.to(".main",{
  backgroundColor:"#fff"

})

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".page4",  // wrong class triggered (.page1 h1)
    scroller: ".main ", // .main -> corrected
    // markers:true,
    start:"top 30%",
    end:"top  80%",
    scrub:3

}
})

tl3.to(".main",{
  backgroundColor:"#0F0D0D" 
})

tl3.to(".page3-part2 h1",{    
  color:"#FFF" 
})
//edited by dev Ayush (reason - while the background of page 4 trns black the last h1 is also black so its not readable while page 4 bg is turning black so i made its color turns white as page 4 turns black)


