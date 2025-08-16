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

(function redaMore() {
    let readMore = document.querySelectorAll('.read_more');
    readMore.forEach(element => {
        let btn = element.querySelector('.read_more_btn');
        let height = element.getAttribute('data-id');

        let textElement = element.querySelector('.text');
        let originalHeight = textElement.scrollHeight;

        textElement.style.height = `${height}px`;

        if (originalHeight < height) {
            btn.style.display = "none";
            textElement.style.maskImage = 'none';
        } else {
            btn.style.display = 'block';
            textElement.style.height = originalHeight;
        }

        btn.addEventListener('click', () => {
            if (textElement.style.height === `${height}px`) {
                textElement.style.height = originalHeight + "px";
                btn.innerHTML = 'Показать меньше';
                textElement.style.maskImage = 'none';
            } else {
                textElement.style.maskImage = 'linear-gradient(black, transparent)';
                textElement.style.height = `${height}px`;
                btn.innerHTML = 'Показать больше';
            }
        });
    });
})();