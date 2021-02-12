let hamburgerNavigation = document.querySelector(".navigation-global");
let navigationWrapper =  document.querySelector(".navigation-wrapper");

let scrollDir = 0;
let canScroll = true;
let touchStart = 0;
let touchEnd = 0;


document.addEventListener('wheel', (event) => {
    if (!canScroll) {
        return;
    }

    canScroll = false;

    setTimeout(() => {
        canScroll = true;
    }, 100);

    scrollDir = event.deltaY > 0 ? 1 : -1;
    scrollTopNavigation(scrollDir);
});

document.addEventListener('touchstart', (event) => {
    touchStart = event.changedTouches[0].clientY;
});

document.addEventListener('touchend', (event) => {
    touchEnd = event.changedTouches[0].clientY;
    if (touchStart > touchEnd) {
        scrollTopNavigation(1);
    } else {
        scrollTopNavigation(-1);
    }
});


let scrollTopNavigation = (actualScrollDirection) => {
    if (actualScrollDirection === 1 && hamburgerNavigation.dataset.active === "no") {
        navigationWrapper.style.top = "-6rem";

    } else {
        navigationWrapper.style.top = "0";
        navigationWrapper.style.backgroundColor = "rgba(84,74,84,.7)";

        if ( window.scrollY === 0 ) {
            navigationWrapper.style.backgroundColor = "transparent";
        }
    }

};

let hideNavBar = () => {
    navigationWrapper.style.top = "-6rem";

    if (window.scrollY !== 0) {
        navigationWrapper.style.backgroundColor = "transparent";
    }
}

    let showNavBar = () => {
        navigationWrapper.style.top = "0";
        navigationWrapper.style.backgroundColor = "transparent";
    }

let hideAndShowNav = () => {
     if (hamburgerNavigation.style.top === "-100vh") {
         hamburgerNavigation.style.top = "0"
         document.body.classList.add("transparent-scrollBar");
         hamburgerNavigation.dataset.active = "yes";
     } else {
        hamburgerNavigation.style.top = "-100vh";
        document.body.style.overflowY = "visible";
         document.body.classList.remove("transparent-scrollBar");
        hamburgerNavigation.dataset.active = "no";
    }
}
