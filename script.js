window.onload = () => {

    var menuIcon = document.querySelector('#menuIcon');
    var closeIcon = document.querySelector('#closeIcon');
    var navScreen = document.getElementById('navScreen');
    var navItems = document.querySelectorAll('nav li a');

    menuIcon.addEventListener('click', openNavScreen);
    closeIcon.addEventListener('click', closeNavScreen);
    navItems.forEach(item => {
        item.addEventListener('click', closeNavScreen);
    }) 

    // if (closeIcon) {   
    //     closeIcon.addEventListener('click', closeNavScreen);
    // }
    
    function openNavScreen() {
        navScreen.style.visibility = 'visible';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        console.log('done');
    }
    
    function closeNavScreen() {
        navScreen.style.visibility = 'hidden';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    }
}
