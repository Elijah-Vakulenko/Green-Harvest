(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const backdropRef = document.querySelector(".backdrop");

    mobileMenuRef.classList.add("is-hidden");

    function openMenu() {
        menuBtnRef.classList.add("is-open");
        menuBtnRef.setAttribute("aria-expanded", "true");
        mobileMenuRef.classList.remove("is-hidden");
        backdropRef.classList.add("is-open");
    }

    function closeMenu() {
        menuBtnRef.classList.remove("is-open");
        menuBtnRef.setAttribute("aria-expanded", "false");
        mobileMenuRef.classList.add("is-hidden");
        backdropRef.classList.remove("is-open");
    }

    menuBtnRef.addEventListener("click", () => {
        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        if (expanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    const closeMenuBtnRef = document.querySelector(".close-menu-btn");
    closeMenuBtnRef.addEventListener("click", () => {
        closeMenu();
    });

    const backdropClickHandler = (event) => {
        if (event.target === backdropRef) {
            closeMenu();
        }
    };

    backdropRef.addEventListener("click", backdropClickHandler);
})();
