(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    // const backdrop: document.querySelector("[data-backdrop]");

    mobileMenuRef.classList.add("is-hidden");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-hidden", expanded);
    });
    
    // refs.backdrop.addEventListener("click", logBackdropClick);

    const closeMenuBtnRef = document.querySelector(".close-menu-btn");
    closeMenuBtnRef.addEventListener("click", () => {
        menuBtnRef.classList.remove("is-open");
        menuBtnRef.setAttribute("aria-expanded", "false");
        mobileMenuRef.classList.add("is-hidden");
    });

    // function logBackdropClick() {
    //     console.log("Click to Backdrop");
    // }
})();