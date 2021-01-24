window.onbeforeunload = function(e) {
    document.cookie = window.scrollY;
};

if ( document.cookie !== "0") {
    let scrollInterval = setInterval(function(){
        if ( document.readyState === "complete") {
            window.scrollTo(0, -document.cookie);
            clearInterval(scrollInterval)
        };
    }, 10);

}




// For tracking the section currently displayed
let currentSection = 0;
let canScroll = true;
let scrollDir = 0;
let quantityOfSections = document.body.children.length -5;

// Touch data (for mobile)
let touchStart = 0;
let touchEnd = 0;

document.addEventListener('touchstart', (event) => {
        touchStart = event.changedTouches[0].clientY;
});

document.addEventListener('touchend', (event) => {
        touchEnd = event.changedTouches[0].clientY;
            if (touchStart > touchEnd) {
                performScroll(1);
            } else {
                performScroll(-1);
            }
});

document.addEventListener('wheel', (event) => {

    // Check if we can scroll yet, or if we're in the middle of a scroll
    // If so, prevent all scrolling
    if (!canScroll) {
        return;
    }

    // Not in a scroll, so set a timeout for when scrolling can happen next
    canScroll = false;

    setTimeout(() => {
        canScroll = true;
    }, 500);

    // Perform the scroll to the next section
    // First, get the next section to scroll to by checking if the scroll position is greater or less than the position of the current position.
    scrollDir = event.deltaY > 1 ? 1 : -1;
    performScroll(scrollDir);

});

const performScroll = (scrollDir) => {

    // can scroll on the end and start page
    let scrollMe = true;

    // current view of the section
    currentSection += scrollDir;

    //when count of current section > all count of sections
    if ( currentSection > quantityOfSections ) {
        currentSection = quantityOfSections;
        scrollMe = false;
    }

    if (0 > currentSection) {
        currentSection = 0;
        scrollMe = false
    }

    //scrolling to next section
    if ( scrollDir === 1 && scrollMe) {
        gsap.to(window, {duration: 0, scrollTo: "#view-" + currentSection});

        //scrolling to previous section
    } else if ( scrollDir === -1 && scrollMe) {
        gsap.to(window, {duration: 0, scrollTo: "#view-" + currentSection});
    }
};