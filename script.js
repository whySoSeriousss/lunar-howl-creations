
gsap.registerPlugin(ScrollTrigger);

// Claw animation
gsap.from(".hero__claw", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  ease: "power2.in"
});

gsap.from(".hero__title", {opacity: 0, y: -50, duration: 1});
gsap.from(".hero__subtitle", {opacity: 0, y: 50, duration: 1, delay: 0.5});
gsap.from(".hero__button", {opacity: 0, scale: 0.8, duration: 1, delay: 1});

gsap.utils.toArray("#services .transform").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%"
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: i * 0.2
  });
});

gsap.from("#about img", {
  scrollTrigger: {trigger: "#about", start: "top 80%"},
  x: -100,
  opacity: 0,
  duration: 1
});

gsap.from("#about div", {
  scrollTrigger: {trigger: "#about", start: "top 80%"},
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.3
});


// About page animations
gsap.from(".about-section__title", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".moon-phase", {
  scrollTrigger: {
    trigger: ".moon-phases",
    start: "top 80%"
  },
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects__gallery",
    start: "top 80%"
  },
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});

gsap.from(".team-member", {
  scrollTrigger: {
    trigger: ".team__grid",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});

gsap.from("#admin .admin__card", {
  scrollTrigger: {
    trigger: "#admin",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});
