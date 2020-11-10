function hamburger(){
    const hamburger = document.querySelector('.hamburger'),
            overlay = document.querySelector('.overlay'),
            menu = document.querySelector('.header__menu'),
            closeButton = document.querySelector('.header__menu-close'),
            navLinks = document.querySelectorAll('.header__link');


    hamburger.addEventListener('click', () => {
        // if(menu.classList.contains('header__menu-hide')){
        //     menu.classList.remove('header__menu-hide');
        // }
        // menu.classList.remove('header__menu');
        overlay.style.left = "0";
        menu.style.left = "0";
        menu.classList.add('header__menu-mobile');
    });

    closeButton.addEventListener('click', () => {
        menu.style.left = "-200%";
        menu.classList.remove('header__menu-mobile');
        overlay.style.left = "-200%";
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(menu.classList.contains('header__menu-mobile')){
                overlay.style.left = "-200%";
                menu.style.left = "-200%"
                menu.classList.remove('header__menu-mobile');
            }
        });
    });
}

export default hamburger;