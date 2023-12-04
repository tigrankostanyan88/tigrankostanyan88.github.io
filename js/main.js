function navMenu() {

    let elements = {
        mobileMenu: document.querySelector('.mobile_btn'),
        navMenu: document.querySelector('.nav_list'),
        navItem: document.querySelectorAll('.nav_item'),
        img: document.querySelector('.mobile_btn > img')
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

    elements.navItem.forEach(item => {
        item.addEventListener('click', () => {
            elements.navMenu.classList.remove('active_menu');
            handleChangeButton();
        })
    });


    elements.mobileMenu.addEventListener('click', () => {
        elements.navMenu.style.transition = "all .3s ease-in-out";
        elements.navMenu.classList.toggle('active_menu');

        if (elements.navMenu.classList.contains("active_menu")) {
            elements.img.src = './imgs/nav/close.png';
            elements.mobileMenu.style.position = "fixed";
        } else {
            handleChangeButton();
        }
    });
}
navMenu();