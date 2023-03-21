const btnCreateShop = document.querySelector('.button--create-shop');
const popup = document.querySelector('.popup');

const clickHandlerBtnCreateShop = () => {
    popup.classList.add('popup--show');
};

btnCreateShop.addEventListener('click', clickHandlerBtnCreateShop);