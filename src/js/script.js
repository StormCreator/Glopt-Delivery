import work from './modules/work';
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', function() {
    
    work('.price__item-visible', '.price__item-hidden', '.price__item-more', '.price__item-back', 'hide');
    slider();

});




