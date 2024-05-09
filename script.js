
function lenis() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}

function wavetextAnim() {
    gsap.to(".svg-container .text__path", {
        attr: { startOffset: "120%" },
        duration: 2.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".svg-container",
            // markers: true,
            start: "10% top",
            end: "top -100%",
            scrub: 4,
            pin: true,
        }
    });

}

lenis();
wavetextAnim();