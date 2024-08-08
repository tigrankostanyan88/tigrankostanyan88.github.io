let btns = document.querySelectorAll('button');
const navMenu = document.querySelector('.menu_list');
const cartMenu = document.querySelector('.cart_page');

function handleResize(btn) {
    window.addEventListener('resize', (e) => {
        let newWidth = window.innerWidth;
        if(newWidth > 768) {
            btn.classList.remove('active');
            navMenu.classList.remove('active'); 
        }
    })
}

btns.forEach(btn => {
    handleResize(btn)
    btn.addEventListener('click', () => {
        if (btn.classList.contains('menu_btn')) {
            btn.classList.add('active');
            navMenu.classList.add('active');
            cartMenu.classList.remove('active');
        } else if(btn.classList.contains('close_nav_menu')) {
            btn.classList.remove('active');
            navMenu.classList.remove('active');
            cartMenu.classList.remove('active');
        } else if(btn.classList.contains('cart_btn')) {
            cartMenu.classList.add('active');
        } else if(btn.classList.contains('close_cart_page')) {
            cartMenu.classList.remove('active');
        }
    })
});

// product array
import productArray from './products.json' with { type: 'json' };


// 👌 Add To Cart
let productItems = document.getElementById('product_items');
let basket = JSON.parse(localStorage.getItem("products")) || [];

function generateShop() {
    return (productItems.innerHTML = productArray.map((item) => {
        let { id, name, price, text, picture, quantity } = item;

        let search = basket.find((x) => x.id === id) || [];

        let btnDisabled = '';

        if(quantity === search.qty) {
            btnDisabled = 'disabled'
        }
        return `
           <div class="product_cart">
                <div class="image">
                    <a href="">
                        <img src="${picture}" alt="">
                    </a>
                </div>
                <div class="content">
                    <h3>${name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sequi.</p>
                    <div class="btns_box">
                        <!-- select pack -->
                            <div class="select_btns">
                                <select name="select_pack" id="">
                                    <option value="">Pack of 6</option>
                                    <option value="">Pack of 2</option>
                                    <option value="">Pack of 4</option>
                                </select>
                                <!-- Plus and Minus button -->
                                <div class="plus_minus">
                                    <button class="minus_qty" data-id="${id}">
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                        <input type="text" value="${search.qty ? search.qty : 'OFF' }">
                                     <button class="plus_btn" data-id="${id}">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <p class="price">
                            <span>price</span>$${price}
                            </p>
                    </div>
                    <button ${btnDisabled} class="add_to_cart" data-id="${id}">
                        <span class="icon">
                            <i class="fa-solid fa-plus"></i>
                        </span> Add To Cart
                    </button>
                </div>
            </div>
      `;
      })
    .join(""));
};

function generateCart() {
    let cardItems = document.querySelector('.cart_items');
    if (cardItems) {
        cardItems.innerHTML = basket.map(item => {          
          let product = productArray.find(product => product.id == item.id) || [];

          let totalPrice = item.qty * product.price;
        //   totalPrice.toFixed(2);

            return `
                <div class="cart_item">
                    <div class="image">
                       <a href="/">
                            <img src="${product.picture}" alt="">
                       </a>
                    </div>
                    <div class="content">
                        <h5>${product.name}</h5>
                        <p class="text">${product.text.slice(0, 120)}...</p>
                        <div class="btns">
                            <button class="minus_qty" data-id="${product.id}">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <input type="text" value="${item.qty}">
                            <button class="plus_btn" data-id="${product.id}">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <p class="price"><span>price</span> $${totalPrice.toFixed(2)}</p>
                    </div>
                    <button class="remove_cart" data-id=${product.id}>
                        <i class="fa-solid fa-x"></i> 
                    </button>
                </div>`
        }).join('');
    } else {
        cardItems.innerHTML = '';
    }
}

function addToCart(id) {
    let selectedItem = parseInt(id);
   
    let search = basket.find((x) => x.id === selectedItem);
    let product = productArray.find(item => item.id === selectedItem);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem,
        qty: 1,
      });
    } else {
        if(search.qty < product.quantity) {
          search.qty += 1;
      }
    }
    update();
    localStorage.setItem("products", JSON.stringify(basket));
};

function removeFromCart(id) {
    let getId = parseInt(id);
    basket = basket.filter(item => item.id !== getId);
    update();
    localStorage.setItem('products', JSON.stringify(basket))
}

function minusQty(getId) {
    let id = parseInt(getId);
  
    // find producty localStorage by id
    let findProduct = basket.find(item => item.id === id);
    if(findProduct) {
        if(findProduct.qty === 1) {
            findProduct.qty = 1;
        } else {
            findProduct.qty--
        }
    }
 
    update();
    localStorage.setItem('products', JSON.stringify(basket))
}

function update() {
    document.querySelector('.cart_qty').innerHTML = basket.length;
    generateShop();
    generateCart();
    rezetStorage();
}

function rezetStorage() {
    window.addEventListener('storage', (e) => {
        if (e.key === null) {
            localStorage.removeItem('products');
            basket = [];
            generateCart();
            update();
        }
    })
}

update();

document.addEventListener('click', (e) => {
    let btn = e.target;
    let getId = btn.parentNode.getAttribute('data-id');
    // check element class name
    if(btn.classList.contains('add_to_cart')) {
        let id = btn.getAttribute('data-id')
        generateCart();
        addToCart(id);
    } else if (btn.parentNode.classList.contains('plus_btn')) {
        addToCart(getId);
    } else if(btn.parentNode.classList.contains('minus_qty')) {
        minusQty(getId)
    } else if (btn.parentNode.classList.contains('remove_cart')) {
        removeFromCart(getId);
    }
});

// page scroll
window.addEventListener('scroll', () => {
    let height = window.scrollY
    let el = document.querySelector('.cart_btn');
    if(height > 200) {
        el.style.position = 'fixed';
        el.style.right = '30px';
    } else {
        el.style.position = 'relative';
    }
});