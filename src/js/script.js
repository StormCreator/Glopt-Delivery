import work from './modules/work';
import slider from './modules/slider';
import hamburger from './modules/hamburger';
import modalInit from './modules/modal';
import scrolling from './modules/scrolling';
import price from './modules/price-item';


window.addEventListener('DOMContentLoaded', function() {
    
    work('.price__item-visible', '.price__item-hidden', '.price__item-more', '.price__item-back', 'hide');
    slider();
    hamburger();
    modalInit();
    scrolling();
    price();
});




