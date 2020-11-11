function price () {
    const btnsMore = document.querySelectorAll('.price__item-more'),
            btnsBack = document.querySelectorAll('.price__item-back');

    // btnMore.addEventListener('click', () => {
    //     btnMore.parentElement.style.left = "-100%";
    //     btnBack.parentElement.style.left = "0";
    // });

    // btnBack.addEventListener('click', () => {
    //     btnBack.parentElement.style.left = "-100%";
    //     btnMore.parentElement.style.left = "0";
    // });

    btnsMore.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.parentElement.style.left = "-100%";
            btnsBack[index].parentElement.style.left = "0";
        }); 
    });

    btnsBack.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.parentElement.style.left = "-100%";
            btnsMore[index].parentElement.style.left = "0";
        });
    });
}

export default price;