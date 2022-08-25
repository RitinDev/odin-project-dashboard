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