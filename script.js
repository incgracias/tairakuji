const header = document.getElementById("siteHeader");
const menuButton = document.querySelector(".menu-button");
const nav = document.getElementById("globalNav");

const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.classList.toggle("is-open");
    nav.classList.toggle("is-open", isOpen);
    header.classList.toggle("is-menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuButton.classList.remove("is-open");
        nav.classList.remove("is-open");
        header.classList.remove("is-menu-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "メニューを開く");
    });
});
