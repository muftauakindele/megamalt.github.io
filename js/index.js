//FadeIn document
document.body.className = "visible";

/////////////////////////////////////////////////////////
//Toggle Hambuger Menu
$(".menu-toggle").on("click", function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});
/////////////////////////////////////////////////////////
//Palm tree slide in
const sliders = document.querySelectorAll(".slideIn");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -65px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
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

///////////////////////////////////////////
//Year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;
