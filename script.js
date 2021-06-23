window.onload = () => {

    // Menu & Nav screen
    var header = document.querySelector('.header');
    var menuIcon = document.querySelector('#menuIcon');
    var closeIcon = document.querySelector('#closeIcon');
    var navScreen = document.getElementById('navScreen');
    var navItems = document.querySelectorAll('nav li a');
    var toggleDarkTheme = document.getElementById('toggleDarkTheme');

    menuIcon.addEventListener('click', () => {
        openNavScreen();
    });
    closeIcon.addEventListener('click', () => {
        closeNavScreen();
    });
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            closeNavScreen();
        });
    });
    document.onclick = (e) => {
        if (e.target !== menuIcon && e.target !== navScreen) {
            closeNavScreen();
        }
    }

    function openNavScreen() {
        navScreen.style.visibility = 'visible';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        header.classList.remove('scroll');
        disableScroll();
        console.log('done');
    }

    function closeNavScreen() {
        navScreen.style.visibility = 'hidden';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
        if (window.scrollY > 0) {
            header.classList.add('scroll');
        }
        enableScroll();
    }

    // prevent scrolling when navscreen is open
    function disableScroll() {
        document.body.style.overflow = 'hidden';
        navScreen.style.overflow = 'scroll';
    }
    function enableScroll() {
        document.body.style.overflow = 'initial';
    }


    // Hire button text change in mobile
    var mobileScreen = window.matchMedia("(max-width: 425px)");
    function changeText(mobileScreen) {
        if (mobileScreen.matches) {
            document.getElementById('hireBtn').innerHTML = 'Hire';
        } else {
            document.getElementById('hireBtn').innerHTML = 'Hire Me';
        }
    }
    changeText(mobileScreen);
    mobileScreen.addListener(changeText);

    // margin bottom for header when scrolling
    window.addEventListener('scroll', () => {
        header.classList.toggle('scroll', window.scrollY > 0);
    })

    // Dark theme
    toggleDarkTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            toggleDarkTheme.innerHTML = 'Light Theme';
        } else {
            toggleDarkTheme.innerHTML = 'Dark Theme';
        }
    });
}



