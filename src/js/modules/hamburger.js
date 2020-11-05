function hamburger(){
    const hamburger = document.querySelector('.hamburger'),
            overlay = document.querySelector('.overlay'),
            menu = document.querySelector('.header__menu'),
            closeButton = document.querySelector('.header__menu-close');

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
        menu.style.left = "-100%";
        menu.classList.remove('header__menu-mobile');
        overlay.style.left = "-100%";
    });
}

export default hamburger;