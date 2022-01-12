const share = document.querySelector('.share');
const popup = document.querySelector('.share-group')

share.addEventListener('click', function() {
    popup.classList.toggle('show');
    popup.classList.toggle('share-group-active');
    popup.previousElementSibling.classList.toggle('share-active');
    popup.parentElement.parentElement.classList.toggle('creator-active');
    popup.parentElement.previousElementSibling.previousElementSibling.classList.toggle('avatar-active');
    popup.parentElement.previousElementSibling.classList.toggle('name-active');
});