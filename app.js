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
let quantityOfSections = 5;

// Touch data (for mobile)
let touchStart = 0;
let touchEnd = 0;

// array of main views in document
let views = ["top", "about", "skills", "project-one", "project-two", "contact"];

selectors = {
    scroll: document.querySelector(".scroll")
}

const initializationSection = (nameSection) => {
    switch(nameSection) {
        case "top":
            currentSection = 0;
            break;
        case "about":
            currentSection = 1;
            break;
        case "skills":
            currentSection = 2;
            break;
        case "project-one":
            currentSection = 3;
            break;
        case "project-two":
            currentSection = 4;
            break;
        case "contact":
            currentSection = 5;
            break;
    }
}

const scrollVisibility = () => {
    let {scroll} = selectors;

    if ( currentSection === 4 || currentSection === 3 || currentSection === 5) {
        scroll.style.opacity = "0"
        console.log("działa")
    } else {
        scroll.style.opacity = "1"
    }

}

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

    //scroll visibility on project function
    scrollVisibility();

    //scrolling to next section
    if ( scrollDir === 1 && scrollMe) {
        console.log(currentSection);
        gsap.to(window, {
            duration: .7,
            scrollTo: "#" + views[currentSection],
            ease: "sine.inOut"
        });


        //scrolling to previous section
    } else if ( scrollDir === -1 && scrollMe) {
        console.log(currentSection);
        gsap.to(window, {
            duration: .7,
            scrollTo: "#" + views[currentSection],
            ease: "sine.inOut"
        });

        // gsap.to(document.querySelector(".scroll__active-view"), {
        //     duration: 1,
        //     x: -currentSection * 7
        // })
    }
};


document.addEventListener('touchstart', (event) => {
    touchStart =  event.touches[0].clientY;
    console.log("start " + touchStart)
});

document.addEventListener('touchend', (event) => {
    touchEnd = event.changedTouches[0].clientY;

    console.log("end " + touchEnd)
    if (touchStart > touchEnd + 10) {
        performScroll(1);
    } else if ( touchStart + 10 < touchEnd  ) {
        performScroll(-1);
    }
});



// event on mouse wheel up or down
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
    }, 700);

    // Perform the scroll to the next section
    // First, get the next section to scroll to by checking if the scroll position is greater or less than the position of the current position.
    scrollDir = event.deltaY > 1 ? 1 : -1;
    // TODO: odblokowac
    performScroll(scrollDir);

});


