    let selectors = {
        hamburgerNavigation : document.querySelector(".navigation-global"),
        navigationWrapper : document.querySelector(".navigation-wrapper"),
        copyEmailToCLickBoard : document.querySelector('.contact-content__email-link'),
        copiedToClickBoardMessage : document.querySelector(".contact-content__email-copied")
    }

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


    document.addEventListener('wheel', (event) => {
        showNavBar();
    });

    document.addEventListener('touchstart', (event) => {
        showNavBar();
    });

    document.addEventListener('touchend', (event) => {
        showNavBar();
    });


    let hideNavBar = () => {
        let {navigationWrapper} = selectors;
        navigationWrapper.style.top = "-6rem";
    }

    let showNavBar = () => {
        let { navigationWrapper } = selectors;
        navigationWrapper.style.top = "0";
    }

    let hideAndShowNav = () => {
        let {hamburgerNavigation} = selectors;

         if (hamburgerNavigation.style.top === "-100vh") {
             document.body.classList.add("transparent-scrollBar");
             hamburgerNavigation.style.top = "0"
             hamburgerNavigation.dataset.active = "yes";

         } else {
            hamburgerNavigation.style.top = "-100vh";
            document.body.classList.remove("transparent-scrollBar");
            document.body.style.overflowY = "visible";
            hamburgerNavigation.dataset.active = "no";
        }
    }

    let copyToClickBoard = () => {
        let {copyEmailToCLickBoard, copiedToClickBoardMessage } = selectors;

        let rangeOfCopiedText = document.createRange();
        rangeOfCopiedText.selectNode(copyEmailToCLickBoard);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(rangeOfCopiedText);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        copiedToClickBoardMessage.style.opacity = "1";

        setTimeout(() => {
            copiedToClickBoardMessage.style.opacity = "0";
        }, 1000);
    }

