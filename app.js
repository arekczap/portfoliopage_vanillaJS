let hamburgerNavigation = document.querySelector(".navigation-global");
let navigationWrapper =  document.querySelector(".navigation-wrapper");

// let prevScrollPos = window.pageYOffset;



// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollPos > currentScrollPos) {
//         navigationWrapper.style.top = "0";
//         navigationWrapper.style.backgroundColor = "rgba(84,74,84,.7)";
//
//         if ( window.scrollY === 0 ) {
//             navigationWrapper.style.backgroundColor = "transparent";
//         }
//     } else if (prevScrollPos < currentScrollPos) {
//         navigationWrapper.style.top = "-6rem";
//
//     }
//     prevScrollPos = currentScrollPos;
// }
//
let scrollDir = 0;
let canScroll = true;


if ( window.scrollY > 0 ) {
    navigationWrapper.style.top = "-6rem";
}

document.addEventListener('wheel', (event) => {

    if (!canScroll) {
        return;
    }

    canScroll = false;

    setTimeout(() => {
        canScroll = true;
    }, 300);

    scrollDir = event.deltaY > 1 ? 1 : -1;
    scrollTopNavigation(scrollDir)
});


let scrollTopNavigation = (actualScrollDirection) => {
    if (actualScrollDirection === 1) {
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
    if (window.scrollY !== 0) {
        navigationWrapper.style.top = "0";
        console.log("zadzialalo")
    } else {
        navigationWrapper.style.top = "-6rem";
        console.log("zadzialasdasdaso")
    }
}


let hideAndShowNav = () => {

    if (hamburgerNavigation.style.top === "-100vh") {
        hamburgerNavigation.style.top = "0"
    } else {
        hamburgerNavigation.style.top = "-100vh"
    }
}