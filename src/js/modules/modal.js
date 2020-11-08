function modalInit(callBtnsSelector){
    const overlay = document.querySelector('.overlay'),
            close = document.querySelectorAll('.modal__close'),
            callBtns = document.querySelectorAll('.callBtn'),
            callModal = document.getElementById('call-modal');

            

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