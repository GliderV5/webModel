{
const menu = document.querySelector(".menu");
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScroll < window.scrollY) {
        menu.classList.add("menu--hidden");
    }else{
        menu.classList.remove("menu--hidden");
    }

    lastScroll = window.scrollY;
});
}