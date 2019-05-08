const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideOver = document.getElementById('sideOver');

openMenu.addEventListener('click', openOver);
closeMenu.addEventListener('click', closeOver);

function openOver(){
    sideOver.style.width = '100%';
}

function closeOver(){
    sideOver.style.width = '0%';
}