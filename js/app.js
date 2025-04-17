function handleNavbar() {
    let nav = document.querySelector('nav');
    let navbar = document.querySelector('.navbar');
    let body = document.querySelector('body');

    function toggleNavbar() {
        body.style.overflow = navbar.classList.contains('active') ? 'hidden' : 'auto';
    }

    document.addEventListener('click', (e) => {
        let button = e.target.closest('.open_menu, .close_menu');

        if (!button) return;

        if (button.classList.contains('open_menu')) {
            navbar.classList.add('active');
            body.style.overflow = 'hidden';
        } else if (button.classList.contains('close_menu')) {
            navbar.classList.remove('active');
            body.style.overflow = 'Auto';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            navbar.style.transition = 'none';
            navbar.classList.remove('active');
            toggleNavbar();
        } else {
            navbar.style.transition = 'all .5s ease-in-out';
        }
    });

    let navLinks = document.querySelectorAll('.nav_link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => navbar.classList.remove('active'));
    });

    document.querySelector('body').addEventListener('click', () => {
        navbar.classList.remove('active');
        toggleNavbar();
    });

    window.addEventListener('scroll', () => {
        // Check the vertical scroll position
        if (window.scrollY > 700) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
}

function inputField() {
    let inputField = document.querySelectorAll('.input_field');

    inputField.forEach(element => {
        const input = element.querySelector('input');
        const span = element.querySelector('span');

        // Add an event listener for user input
        input.addEventListener('input', () => handleInputChange(input, span));
    });

    function handleInputChange(input, span) {
        const hasValue = input.value.trim() !== '';
        hasValue ? span.classList.add('active') : span.classList.remove('active')
    }
}

// user reviews
function userReviews() {
    new Swiper(".swiper-container", {
        slidesPerView: 1, // Number of slides visible
        centeredSlides: true, // Center the active slide
        spaceBetween: 10, // Space between slides
        loop: true, // Enable looping
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
        }
    });
}


document.querySelectorAll('.register_type').forEach(input => {
    let label = input.parentElement;

    input.addEventListener('change', () => {
        document.querySelectorAll('label').forEach(el => {
            el.classList.remove('active');
        });

        if (label) {
            label.classList.add('active');
        }
    });
});


handleNavbar();
inputField();
userReviews();


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const question = faq.querySelector('.faq-question');
    const answer = faq.querySelector('.faq-answer');
    const icon = faq.querySelector('.icon i');

    question.addEventListener('click', () => {
        faqs.forEach(item => {
            const itemAnswer = item.querySelector('.faq-answer');
            const itemQuestion = item.querySelector('.faq-question');
            const itemIcon = item.querySelector('.icon i');

            itemAnswer.style.height = '0';
            itemQuestion.style.marginBottom = '0';

            itemIcon.classList.remove('fa-minus');
            itemIcon.classList.add('fa-plus');
        });

        const height = answer.scrollHeight;
        answer.style.height = height + 'px';
        question.style.marginBottom = '20px';

        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    });
});




function scrollAnimation() {
    // Callback function for the IntersectionObserver
    function callback(entries, observer) {
        entries.forEach(entry => {
            const target = entry.target;


            // As the element enters the viewport, we scale and move it up
            if (entry.intersectionRatio > 0) {
                // Set a translateY value based on intersectionRatio to animate the element from bottom
                target.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-in-out';
                target.style.transform = `translateY(${(1 - entry.intersectionRatio) * 100}px)`; // Move from below
                target.style.opacity = entry.intersectionRatio; // Fade in based on visibility
            } else {
                // Reset properties when out of view
                target.style.transform = 'translateY(100px)';
                target.style.opacity = '0';
            }
        });
    }

    // Define observer options
    const options = {
        threshold: Array.from({
            length: 101
        }, (_, i) => i / 100),
    };

    // Create a new IntersectionObserver instance
    let observer = new IntersectionObserver(callback, options);

    // Observe each '.project' element
    document.querySelectorAll('.scroll_animate').forEach(target => {
        observer.observe(target);
    });
}

scrollAnimation();



const backToTop = document.getElementById('backToTop');
const progress = document.getElementById('progress'); // Ուղղված էր քո կոդում
const navProgress = document.querySelector('.nav_progress'); // Ուղղված էր քո կոդում

if(progress) {
    window.addEventListener('scroll', () => {
      // Back to Top visibility
      if (window.scrollY > 700) backToTop.classList.add('active');
       else backToTop.classList.remove('active');
    
      // Scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
    
      if(Math.round(scrollPercent) > 60) {
        backToTop.style.color = '#fff';
      } else {
        backToTop.style.color = 'var(--primary-color)';
      }
      
    
      progress.style.width = scrollPercent + "%";
      if(navProgress) navProgress.style.width = scrollPercent + "%";
    });
}

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
});
});


if(document.querySelector('#lightgallery')) {
    lightGallery(document.getElementById('lightgallery'), {
        licenseKey: 'your_license_key',
        speed: 500,
    });
}