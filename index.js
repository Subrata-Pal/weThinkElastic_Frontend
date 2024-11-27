gsap.to(".scroll h1", {
    transform: "translateY(-80%)",
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".scroll",
        scroller: "body",
        start: "top 0%",
        end: "bottom -100%",
        pin: true,
        scrub: 2,
    }
})

let tl = gsap.timeline();
let lastScrollY = window.scrollY;
tl.to(".navbar",{
    y: "-15vh",
    duration: 0.4,
    ease: "power2.inOut",
})
tl.pause();
window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        tl.play();
        
    } else if (currentScrollY < lastScrollY) {
        tl.reverse();
    }

    lastScrollY = currentScrollY; // Update the last scroll position
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".think",
        scroller: "body",
        start: "top 50%",
        end: "bottom 0%",
    }
});

tl2.from(".think div", {
    opacity: 0,
    y: 100,
    duration: 0.7,
    ease: "power2.inOut",
})

gsap.from(".hello span", {
    opacity: 0,
    x: -500,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.inOut",
})

gsap.from(".video video", {
    scale:0,
    duration: 1,
    scrollTrigger: {
        trigger: ".video",
        scroller: "body",
        start: "top 100%",
        end: "top 0%",
        scrub: 2,
    }
})

window.addEventListener("mousemove", (e) => {
    const dot = document.querySelector(".dot");
    
    gsap.to(dot, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        ease: "power2.inOut",
    })
})


    function animation()
    {
        document.querySelector(".list1").addEventListener("mouseenter", () => {
            console.log("Mouse Enter")
            gsap.to(".dot", {
                scale: 3,
                backgroundColor: "black",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list1", {
                scale: 0.97,
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            
        })
        
        document.querySelector(".list1").addEventListener("mouseleave", () => {
            gsap.to(".dot", {
                scale: 1,
                backgroundColor: "#E7CFB1",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list1", {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut",
            });
        })
    
        document.querySelector(".list2").addEventListener("mouseenter", () => {
            gsap.to(".dot", {
                scale: 3,
                backgroundColor: "black",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list2", {
                scale: 0.97,
                duration: 0.3,
                ease: "power2.inOut",
            });
        })
        
        document.querySelector(".list2").addEventListener("mouseleave", () => {
            gsap.to(".dot", {
                scale: 1,
                backgroundColor: "#E7CFB1",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list2", {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut",
            });
        })
    
        document.querySelector(".list3").addEventListener("mouseenter", () => {
            gsap.to(".dot", {
                scale: 3,
                backgroundColor: "black",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list3", {
                scale: 0.97,
                duration: 0.3,
                ease: "power2.inOut",
            });
        })
        
        document.querySelector(".list3").addEventListener("mouseleave", () => {
            gsap.to(".dot", {
                scale: 1,
                backgroundColor: "#E7CFB1",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list3", {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut",
            });
        })
    
        document.querySelector(".list4").addEventListener("mouseenter", () => {
            gsap.to(".dot", {
                scale: 3,
                backgroundColor: "black",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list4", {
                scale: 0.97,
                duration: 0.3,
                ease: "power2.inOut",
            });
        })
        
        document.querySelector(".list4").addEventListener("mouseleave", () => {
            gsap.to(".dot", {
                scale: 1,
                backgroundColor: "#E7CFB1",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list4", {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut",
            });
        })



        document.querySelector(".list5").addEventListener("mouseenter", () => {
            gsap.to(".dot", {
                scale: 3,
                backgroundColor: "black",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list5", {
                scale: 0.94,
                duration: 0.4,
                ease: "power2.inOut",
            });
        })
        
        document.querySelector(".list5").addEventListener("mouseleave", () => {
            gsap.to(".dot", {
                scale: 1,
                backgroundColor: "#E7CFB1",
                duration: 0.3,
                ease: "power2.inOut",
            });
    
            gsap.to(".list5", {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut",
            });
        })
    
    }

    animation();


    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".expertise",
            scroller: "body",
            start: "top 0%",
            end: "top -100%",
            scrub: 2,
        pin: true,
        }
    })

    tl3.to(".expertise div", {
        x: "-65%",
        ease: "power2.inOut",
    })
