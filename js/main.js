// import VanillaTilt from './vanilla.js';


function navMenu() {

    let elements = {
        mobileMenu: document.querySelector('.mobile_btn'),
        navMenu: document.querySelector('.nav_list'),
        navItem: document.querySelectorAll('.nav_item'),
        img: document.querySelector('.mobile_btn > img'),
        mask: document.querySelector('.mask_menu')
    }

    window.addEventListener('resize', () => {
        if (document.body.offsetWidth > 768) {
            elements.navMenu.style.transition = "none";
        }
    })

    function handleChangeButton() {
        elements.img.src = './imgs/nav/menu.png';
        elements.mobileMenu.style.position = "static";
    }

    elements.mask.addEventListener('click', () => {
        elements.navMenu.classList.remove('active_menu');
        elements.mask.classList.remove('active');
        handleChangeButton();
    })

    elements.navItem.forEach(item => {
        item.addEventListener('click', () => {
            elements.navMenu.classList.remove('active_menu');
            elements.mask.classList.remove('active');
            handleChangeButton();
        })
    });


    elements.mobileMenu.addEventListener('click', () => {
        elements.navMenu.style.transition = "all .3s ease-in-out";
        elements.navMenu.classList.toggle('active_menu');
        elements.mask.classList.add('active');

        if (elements.navMenu.classList.contains("active_menu")) {
            elements.img.src = './imgs/nav/close.png';
            elements.mobileMenu.style.position = "fixed";
        } else {
            handleChangeButton();
            elements.mask.classList.remove('active');
        }
    });
}
navMenu();
