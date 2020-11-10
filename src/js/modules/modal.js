function modalInit(callBtnsSelector){
    const overlay = document.querySelector('.overlay'),
            close = document.querySelectorAll('.modal__close'),
            callBtns = document.querySelectorAll('.callBtn'),
            callModal = document.getElementById('call-modal'),
            thanksModal = document.getElementById('thanks-modal'),
            btnsSubmit = document.querySelectorAll('#btn-submit'),
            btnOrder = document.querySelector('.promo__button'),
            orderModal = document.getElementById('order-modal'),
            navLinks = document.querySelectorAll('.header__link');

            

    close.forEach(item => {
        item.addEventListener('click', () => {
            closeModal(overlay);
        });
    });

    callBtns.forEach(item => {
        item.addEventListener('click', () => {
            openModal(callModal, overlay);
        });
    });

    btnsSubmit.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setTimeout(() => {
                closeModal(overlay);
                openModal(thanksModal, overlay);
            }, 1000);
        });
    });

    btnOrder.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(orderModal, overlay);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(overlay.style.left != "0"){
                closeModal(overlay);
            }
        });
    });
}

function openModal(modal, overlay){
    overlay.style.left = "0";
    modal.style.left = "50%";
}

function closeModal(overlay){
    document.querySelectorAll('.modal').forEach(item => {
        item.style.left = "-100%";
    }); 
    overlay.style.left = "-100%";
}

export default modalInit;