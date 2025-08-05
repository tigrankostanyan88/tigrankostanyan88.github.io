const inputphone = document.querySelectorAll(".phone");
inputphone.forEach(input => {


  input.addEventListener('input', function () {
      this.value = this.value.replace(/\D/g, '');
  });



  window.intlTelInput(input, {
      separateDialCode: true,
      initialCountry: "ae",
      dropdownContainer: document.body,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
    backdrop: 'static',
    keyboard: false
  });
  myModal.show();
});



const features = [{
        title: "Value Your Money",
        text: "Our business set up services are rated the highest in the market and we have secured that by providing our clients with a much needed peace of mind throughout the whole process and beyond. So, whether you only want a visa, assistance in business set up, or are looking for long-term business support, our prices are every bit the value for money."
    },
    {
        title: "Customer Centric",
        text: "We provide the same care & attention with consistent focus on delivering high quality of service to all our clients. Whether you are a small startup or a big brand you can be sure that we will serve you to the best our capabilities."
    },
    {
        title: "Transparency",
        text: "All our fees are clearly laid out with no hidden costs. In the company incorporation business, there are several costs that are not made known to clients beforehand. We take time to explain every step and the prices to avoid any unpleasant situation. We will elucidate our best proposition to you alongside any other offer that you may have to make a true like for like comparison."
    },
    {
        title: "International",
        text: "We have serviced clients from all across the world, our staff of more than 200 people speaks 22 languages and are experts in supporting a range of business needs long after its incorporation. Thousands of customer reviews bear testimony to our unmatched services."
    },
    {
        title: "Pioneers",
        text: "Our mainland coworking package is unique in the market, offering true scalability as your business grows. The package not only covers the trade license and sponsor/service agent but also assist in documentation services, providing coworking facility in Downtown, networking platforms and much more."
    },
    {
        title: "Ease of Setup",
        text: "Under the turbulent times we hold your safety and wellbeing as our priority and have made the registration process easier and safer. Almost all documents for your business setup can be submitted remotely or online with our assistance, making the process fast and efficient. We will pick up and drop documents to your home free of cost."
    },
    {
        title: "Strong Community",
        text: "Creative Zone is one big family of 200 people and we take care of our clients as our own. All dependent visas sponsored by you as an investor will be free of PRO fees."
    },
    {
        title: "Experience",
        text: "Our business setup advisors offer proficient business setup advice suited best for the nature of your business. We have experience setting up over 200 different business activities without any issues for our clients."
    },
    {
        title: "Walk the Walk",
        text: "Our business is not Radio Shows or regular media platforms. Our business is your business. Our attention to detail, experience and customer focus set us apart."
    },
    {
        title: "Global Expertise",
        text: "Our business is not Radio Shows or regular media platforms. Our business is your business. Our attention to detail, experience and customer focus set us apart."
    },
    {
        title: "Customer-Centric",
        text: "Our commitment is to provide top-notch services, catering to small startups and corporations' specific business needs. We serve you to the best of our abilities."
    },
    {
        title: "Simplified Processes",
        text: "We have streamlined the registration process. You can submit your business setup documents remotely or online. As an added convenience, we offer free document pick-up and delivery to your home."
    },
    {
        title: "Transparent Approach",
        text: "Our fees are transparent, without hidden costs. We explain each step and price to prevent surprises. We provide our best proposal and compare it fairly with other offers."
    }
  ];
  
  const specialists = [
    {
      name: "Haley Belch",
      role: "Business Setup Advisor",
      img: "/src/images/specialists/haley.jpg"
    },
    {
      name: " Fuqan Ali",
      role: "Business Setup Advisor",
      img: "/src/images/specialists/fuqan.jpg"
    },
    {
      name: "Peter Xu",
      role: "Business Setup Advisor",
      img: "/src/images/specialists/peter.jpg"
    },
    {
    name: "Sarah Latifa",
    role: "Business Setup Advisor",
    img: "/src/images/specialists/sarah.jpg"
  },
  {
    name: "James O Neil",
    role: "Business Setup Advisor",
    img: "/src/images/specialists/james.jpg"
  }
];



function renderOurValues() {
    const container = document.getElementById("our-values-row");
    features.forEach((feature, index) => {
        let number = index + 1;
       
        const card = document.createElement("div");
        card.className = "col-md-12 mx-auto";
        card.innerHTML = `
          <div class="card h-100">
            <div class="card-body d-flex gap-3 align-items-center">
              <div class="number fw-bold text-orange">${number}</div>
              <div class="content">
                <h5 class="card-title text-orange mb-1">${feature.title}</h5>
                <p class="card-text text-dark">${feature.text}</p>
              </div>
            </div>
          </div>
        `;
        container.appendChild(card);
    });
}


function renderSpecialists() {
    const container = document.getElementById("specialist-slides");

  specialists.forEach(s => {
    const slide = document.createElement("div");
    console.log(s.img);
    
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="card">
        <img src="${s.img}" alt="${s.name}" />
        <div class="card-body">
          <h3 class="fs-5 fw-bold text-red text-center">${s.name}</h3>
          <p class="profession text-center">${s.role}</p>
        </div>
      </div>
    `;
    container.appendChild(slide);
  });

  // Init Swiper
  const swiper = new Swiper(".specialists-slider", {
    loop: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    // spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    }
  });
}


renderOurValues();
renderSpecialists();

