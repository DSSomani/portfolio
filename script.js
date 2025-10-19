gsap.registerPlugin(SplitText, ScrollTrigger);

console.clear();

gsap.set(".split", { opacity: 1 });
var menu = document.getElementById('manu-icon');
let navbar = document.querySelector('.navItems');


menu.onclick = function() {
  menu.classList.toggle('fa-xmark');
  
  navbar.classList.toggle('open');
};

document.fonts.ready.then(() => {
  let containers = gsap.utils.toArray(".column");

  containers.forEach((container) => {
    let text = container.querySelector(".split");
    let animation;

    SplitText.create(text, {
      type: "lines, words",
      mask: "lines",
      linesClass: "line",
      // autoSplit: true,
      onSplit: (instance) => {
        console.log("split")
        return gsap.from(instance.lines, {
          yPercent: 120,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            markers: true,
            scrub: true,
            start: "clamp(top center)",
            end: "clamp(bottom center)"
          }
        });
      }
    });
  });
});
