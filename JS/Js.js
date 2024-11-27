// show sub-menu
document.getElementById("icon-bars").addEventListener("click", () => {
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("icon-bars");
    menu.classList.toggle("hidden");

    // change icon
    if (menu.classList.contains("hidden")) {
        icon.classList.remove("fa-x");
        icon.classList.add("fa-bars");
    } else {
        icon.classList.add("fa-x");
        icon.classList.remove("fa-bars");
    }
});

// submenu-pages
function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.classList.toggle("hidden");
}
document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const scrollThreshold = 50;

    if (window.scrollY > scrollThreshold) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
