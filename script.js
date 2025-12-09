const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAni(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })

    tl.to(".boundingelemup",{
        y: 0,
        duration: 1,
        stagger: .1,
        delay:-.8,
        ease: "power4.out"
    })

    tl.to(".boundingelemdown",{
        y: 0,
        duration: 1,
        stagger: .2,
        delay:-.4,
        ease: "power4.out"
    })

    tl.from("#hero-footer",{
        opacity: 0,
        duration: 1.2,
        delay:-1,
        ease: "power4.out"
    });
    
};


var timeout;

function circleskew(){
    // default scale value
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(e) {
        clearTimeout(timeout);
        
        xscale = gsap.utils.clamp(.8,1.2, e.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, e.clientY - yprev);
    
        xprev = e.clientX;
        yprev = e.clientY; 

        circlemouse(xscale,yscale)

        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${e.clientX-6}px, ${e.clientY-6}px) scale(${1},${1})`;
        },100)
    });
};

circleskew();

function circlemouse(xscale,yscale){
    window.addEventListener("mousemove",function(e){
        // console.log(e);
        document.querySelector("#minicircle").style.transform = `translate(${e.clientX-6}px, ${e.clientY-6}px) scale(${xscale},${yscale})`;
    });
};

circlemouse();
firstPageAni();