const share = document.querySelector('.share');
const popup = document.querySelector('.share-group')

share.addEventListener('click', function() {
    popup.classList.toggle('show');
    share.classList.toggle('active');
});