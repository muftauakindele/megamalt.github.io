//FadeIn document
document.body.className = "visible";

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-9rem";
  }
  prevScrollpos = currentScrollPos;
};
//////////////////////////////////////////////////////////
// Accordion Animation
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
/////////////////////////////////////////////////////////
//Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //Link scroll function
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
/////////////////////////////////////////////////////////
//Palm Tree Animation
// $(document).on("ready", function () {
//   $(window).on("scroll", function () {
//     $(".palm-tree").each(function (i) {
//       let bottom_of_object = $(this).offset().top + $(this).outerHeight();
//       let bottom_of_window = $(window).scrollTop() + $(window).height();
//       if (bottom_of_window > bottom_of_object) {
//         $(this).addClass(".fromRight");
//       }
//       if (bottom_of_window < bottom_of_object) {
//         $(this).removeClass(".fromRight");
//       }
//     });
//   });
// });

// const checkpoint = 300;

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= checkpoint) {
//     opacity = 1 - currentScroll / checkpoint;
//   } else {
//     opacity = 0;
//   }
//   document.querySelector(".fromRight").style.opacity = opacity;
// });

//Faders
// const faders = document.querySelectorAll(".fadeIn");
// const sliders = document.querySelectorAll(".slideIn");

// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -65px 0px",
// };

// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach((fader) => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach((slider) => {
//   appearOnScroll.observe(slider);
// });
