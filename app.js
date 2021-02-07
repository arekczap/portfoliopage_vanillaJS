let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navigation-wrapper").style.top = "0";
        document.querySelector(".navigation-wrapper").style.backgroundColor = "rgba(84,74,84,.7)";

        if ( window.scrollY === 0 ) {
            document.querySelector(".navigation-wrapper").style.backgroundColor = "transparent";
        }
    } else {
        document.querySelector(".navigation-wrapper").style.top = "-6rem";
    }
    prevScrollpos = currentScrollPos;
}

