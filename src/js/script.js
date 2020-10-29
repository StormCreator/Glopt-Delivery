import menu from './modules/menu';
import skills from './modules/skills';

window.addEventListener('DOMContentLoaded', function() {
    
    menu('.hamburger', '.menu', '.menu__close', 'active');
    skills('.stack__skill-precent', '.stack__skill-divider');
});




