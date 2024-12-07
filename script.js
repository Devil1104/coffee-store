let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    console.log("Menu clicked!");
};
menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}