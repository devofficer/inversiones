barba.init();

function appearContent(element) {
    gsap.fromTo(element, { scaleX: 0.9, scaleY: 0.9, autoAlpha: 0 }, {
      duration: 2, 
      scaleX: 1,
      scaleY: 1,
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
}

function appearFooter(element) {
  gsap.fromTo(element, { y: 200, autoAlpha: 0.4 }, {
    duration: 2, 
    y: 0,
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".section-img-container").forEach(function(element, index) {
      ScrollTrigger.create({
          trigger: element,
          onEnter: function() { appearContent(element, true, index) }, 
          onEnterBack: function() { appearContent(element)},
          // onLeave: function() { hide(elem) }
      });
  });

  gsap.utils.toArray(".sub-item").forEach(function(element, index) {
    ScrollTrigger.create({
        trigger: element,
        onEnter: function() { appearContent(element) }, 
        onEnterBack: function() { appearContent(element) },
        // onLeave: function() { hideContent(element) }
    });
  });

  gsap.utils.toArray("section").forEach(function(element, index) {
    ScrollTrigger.create({
        trigger: element,
        onEnter: function() { appearContent(element) }, 
        onEnterBack: function() { appearContent(element)},
        // onLeave: function() { hideContent(element) }
    });
  });

  gsap.utils.toArray(".footer").forEach(function(element, index) {
    ScrollTrigger.create({
        trigger: element,
        onEnter: function() { appearFooter(element) }, 
        onEnterBack: function() { appearFooter(element)},
        // onLeave: function() { hideContent(element) }
    });
  });
});