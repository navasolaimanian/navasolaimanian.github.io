const btn = document.querySelector('.btn-slide');
const hoversitems = document.querySelectorAll('.nav-item');

btn.addEventListener('click', function () {
    document.querySelector('.side-nav').classList.toggle('slide');
    document.querySelectorAll('.topBar-icon').forEach(i => i.classList.toggle('d-none'))
})
