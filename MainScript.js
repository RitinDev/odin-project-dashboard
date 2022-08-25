let shareButtons = document.querySelectorAll('div.buttons > i');

shareButtons.forEach(button => button.addEventListener('click', () => {
    let cardSelected = button.parentElement.parentElement;
    let linkContainer = cardSelected.querySelector('a');
    let link = linkContainer.href;
    navigator.clipboard.writeText(link);
    button.style.color = '#3395FF';
    setTimeout(() => {
        button.style.color = null;
    }, 500);
}))

let colorChangerText = document.querySelector('#color-changer');
colorChangerText.addEventListener('click', () => {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('light');

    let topContentBox = document.querySelector('.top-intro');
    topContentBox.classList.toggle('light');

    let topRightBox = document.querySelector('.top-side-content');
    topRightBox.classList.toggle('light');

    let bottomRightBox = document.querySelector('.bottom-side-content');
    bottomRightBox.classList.toggle('light');

    let footer = document.querySelector('.footer');
    footer.classList.toggle('light');
})