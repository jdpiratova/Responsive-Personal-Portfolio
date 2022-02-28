const scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
});

window.addEventListener("scroll", () => {
    window.pageXOffset > 100 
        ? (scrollToTop.style.display = "none")
        : (scrollToTop.style.display = "block");
});