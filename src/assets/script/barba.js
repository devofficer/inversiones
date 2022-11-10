barba.init();

function appearContentY(element) {
    const posDelta = -100;
    const duration = 0.5;

    gsap.fromTo(element, { x: 0, y: posDelta, autoAlpha: 0 }, {
      duration: duration, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
}

function appearContentX(element, reverse, durDelta) {
    const flag = reverse ? -1 : 1;
    const posDelta = (500 + durDelta * 300) * flag;
    const duration = 2 + 0.5 * durDelta;

    gsap.fromTo(element, { x: posDelta, y: 0, autoAlpha: 0 }, {
      duration: duration, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
}
  
function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}
  
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".section-img-container").forEach(function(element, index) {
        ScrollTrigger.create({
            trigger: element,
            onEnter: function() { appearContentX(element, true, index) }, 
            // onEnterBack: function() {},
            // onLeave: function() { hide(elem) }
        });
    });

    gsap.utils.toArray(".section-content > *").forEach(function(element, index) {
        ScrollTrigger.create({
            trigger: element,
            onEnter: function() { appearContentX(element, false, index) }, 
            // onEnterBack: function() {},
            // onLeave: function() { hide(elem) }
        });
    });

    gsap.utils.toArray(".section-img-container-reverse").forEach(function(element, index) {
        ScrollTrigger.create({
            trigger: element,
            onEnter: function() { appearContentX(element, false, index) }, 
            // onEnterBack: function() {},
            // onLeave: function() { hide(elem) }
        });
    });

    gsap.utils.toArray(".section-content-reverse > *").forEach(function(element, index) {
        ScrollTrigger.create({
            trigger: element,
            onEnter: function() { appearContentX(element, true, index) }, 
            // onEnterBack: function() {},
            // onLeave: function() { hide(elem) }
        });
    });

    gsap.utils.toArray("nav").forEach(function(element, index) {
        ScrollTrigger.create({
            trigger: element,
            onEnter: function() { appearContentY(element) }, 
            // onEnterBack: function() {},
            // onLeave: function() { hide(elem) }
        });
    });
});