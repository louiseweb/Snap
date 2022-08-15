const openBtn = document.querySelector('#btn-open');
const closeBtn = document.querySelector('#btn-close');



openBtn.addEventListener('click', function(){
    openBtn.classList.add('d-none');
    closeBtn.classList.remove('d-none');
});

closeBtn.addEventListener('click', function(){
    closeBtn.classList.add('d-none');
    openBtn.classList.remove('d-none');
});