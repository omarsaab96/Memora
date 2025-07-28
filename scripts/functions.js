
$(document).ready(function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    initScrollSmoother()
});


function initScrollSmoother() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
    });

    gsap.ticker.add(() => {
        const scrollY = smoother.scrollTop();
        const start = 0;
        const end = 400; // change this to how far you want the animation to last
        const start2 = 100;
        const end2 = 300;

        // clamp between 0 and 1
        const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
        const progress2 = Math.min(Math.max((scrollY - start2) / (end2 - start2), 0), 1);

        // interpolate height from 100vh to 100px
        const minHeight = 80;
        const maxHeight = window.innerHeight;
        const currentHeight = maxHeight - (maxHeight - minHeight) * progress;

        gsap.set(".hero", {
            height: currentHeight
        });

        gsap.set(".logo", {
            scale: 1 - 0.25 * progress2,
            y: -20 * progress2
        });

        gsap.set(".hero-text", {
            opacity: 1 - progress2,
            y: -30 * progress2
        });

        gsap.set(".alignerImg", {
            opacity: 1 - progress2,
            y: -30 * progress2
        });

        gsap.set(".scroll", {
            opacity: 1 - progress2,
        });

        gsap.set(".fakeLeftRadius", {
            opacity: 0 + progress2,
        });

        gsap.set(".fakeRightRadius", {
            opacity: 0 + progress2,
        });

        gsap.set(".herospacer", {
            opacity: 0 + progress2,
        });

        gsap.set(".content", {
            opacity: 0 + progress2,
        });
    });
};