function work(itemsVisible, itemsHidden, moreSelector, backSelector, hideClass){
    const visible = document.querySelectorAll(itemsVisible),
            hidden = document.querySelectorAll(itemsHidden),
            moreLinks = document.querySelectorAll(moreSelector),
            backLinks = document.querySelectorAll(backSelector);
        
        moreLinks.forEach((item, i) => {
            item.addEventListener('click', () => {
               visible[i].classList.add(hideClass);
               hidden[i].classList.remove(hideClass);
            });
        })

        backLinks.forEach((item, i) => {
            item.addEventListener('click', () => {
                visible[i].classList.remove(hideClass)
                hidden[i].classList.add(hideClass);
            });
        });
}

export default work;