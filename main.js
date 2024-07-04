const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        })
    });
}

/* start scroll up btn */
const scrollUpBtn = document.querySelector('.scrollUpBtn');
const scrollToTop = () => {
    scrollUpBtn.classList.add('hidden');
    window.scrollTo(0,0);
  }

// Change navbar when scroll
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
        scrollUpBtn.classList.remove('hidden');
    } else {
        navbar.classList.remove('nav-active');
        scrollUpBtn.classList.add('hidden');
    }
};