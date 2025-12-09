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


function circleskew(){
    window.addEventListener("mousemove", function(e) {
        
    });
};



function circlemouse(){
    window.addEventListener("mousemove",function(e){
        console.log(e);
        document.querySelector("#minicircle").style.transform = `translate(${e.clientX-6}px, ${e.clientY-6}px)`;
    });
};

circlemouse();
firstPageAni();