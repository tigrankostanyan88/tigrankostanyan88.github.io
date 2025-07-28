(function accordion() {
    const accordions = document.querySelectorAll('.my-accordion');

    accordions.forEach(item => {
        const button = item.querySelector('button');
        const descr = item.querySelector('.descr');
        const icon = item.querySelector('.icon');

        item.addEventListener('click', () => {
            const isOpen = descr.style.height !== '0px';

            accordions.forEach(acc => {
                acc.querySelector('.descr').style.height = '0px';
                acc.querySelector('button').classList.remove('active');
                acc.querySelector('.icon').innerHTML = '<i class="fa-solid fa-plus"></i>';
            });

            if (!isOpen) {
                descr.style.height = descr.scrollHeight + 'px';
                button.classList.add('active');
                icon.innerHTML = '<i class="fa-solid fa-minus"></i>';
            }
        });
    });
})();