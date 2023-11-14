const body = document.querySelector('body')
const nav = document.querySelector('header')
const bar = document.querySelector('.bar')
const barList = document.querySelector('.navbar')
const navlink = document.querySelectorAll('.navbar a')
const bg = document.querySelector('.bg')
const hom = document.querySelector('.hom')
const home = document.querySelector('#home')
//navbar
bar.addEventListener('click', () =>
    barList.classList.toggle('show'))
/*
 navlink.forEach((link)=>
 {
    link.addEventListener('click',()=>
    {
        barList.classList.remove('show')
    }) */

function myFunction(x) {
    x.classList.toggle('change');
}
//display items
document.addEventListener("DOMContentLoaded",function()
{
const foods = document.querySelectorAll('.food')
const buttons = document.querySelectorAll('.btns')
const items = document.querySelector('.items')
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter;
        foods.forEach((foo) => {
            if (filter == '') {
                foo.style.display = "none";
            } else {
                const btnfilter = foo.dataset.product;
                if (btnfilter === filter) {
                    foo.style.display="grid"
                    body.style.background = "#05abf3"
                    items.style.transition = "1s";
                    items.style.display="grid"
                    bg.style.display="none";
                    body.style.overflowY="auto";
                } else {
                    foo.style.display = "none";
                }
            }
            hom.addEventListener('click',()=>
{
    home.style.display="grid";
    home.style.position="absolute";
    items.style.display="none"
    body.style.background="rgb(9, 211, 124)"
    
})
        })
    })
})
})

// reservation

const reserv = document.querySelector('.reserv')
const res = document.querySelector('.reservation')
const rescls = document.querySelector('.resclose')
reserv.addEventListener('click',()=>
{
  res.classList.add('add')
  nav.style.display="none";
})

rescls.addEventListener('click',()=>
{
  res.classList.remove('add')
  nav.style.display="block";
})

//contact

const con = document.querySelector('.cont')
const contact = document.querySelector('.contact')
const concls = document.querySelector('.conclose')
con.addEventListener('click',()=>
{
  contact.classList.add('co');
  nav.style.display="none";
})

concls.addEventListener('click',()=>
{
    contact.classList.remove('co');
    nav.style.display="block";
})

//order page


//open and close cart
const btncart = document.querySelector('.ord');
const cart = document.querySelector('.cart');
const close = document.querySelector('.close');

btncart.addEventListener('click', () => {
    cart.classList.add('cart-active')
})

close.addEventListener('click', () => {
    cart.classList.remove('cart-active')
});

//cart display
document.addEventListener('DOMContentLoaded', loadFood)

function loadFood() {
    loadcontent();
}

function loadcontent() {
    let btnRemove = document.querySelectorAll('.remove');
    btnRemove.forEach((btnremove) => {
        btnremove.addEventListener('click', removeItem)
    })

    let qtyElements = document.querySelectorAll('.qty');
    qtyElements.forEach((input) => {
        input.addEventListener('change', changeqty)
    })

    let order = document.querySelectorAll('.order');
    order.forEach((orde) => {
        orde.addEventListener('click', addcart)
    })
    updateTotal();
}

//remove items

function removeItem() {
    if (confirm('Are You Sure To Remove This Item From Cart')) {
        let title = this.parentElement.querySelector('.food-name').innerHTML;
        itemList = itemList.filter((el) => el.title != title);
        this.parentElement.remove();
        loadcontent();
    }
}

//code for change qty of food

function changeqty() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    loadcontent();
}

let itemList = [];

//code for add items to cart
function addcart() {
    let food = this.parentElement;
    let title = food.querySelector('.name').innerHTML;
    let price = food.querySelector('.price').innerHTML;
    let imgSrc = food.querySelector('.img').src;

    let newp = { title, price, imgSrc }

    if (itemList.find((el) => el.title == newp.title)) {
        alert("product already added to the cart")
        return;
    } else {
        itemList.push(newp);
    }
    let newProduct = createCartProduct(title, price, imgSrc);
    let element = document.createElement('div');
    element.innerHTML = newProduct;
    let cartBasket = document.querySelector('.cart-content')
    cartBasket.append(element);
    loadcontent();
}

function createCartProduct(title, price, imgSrc) {
    return `
  <div class="cart-box">
    <img src="${imgSrc}" class="image" alt="">
    <div class="detail-box">
      <div class="food-name">${title}</div>
      <div class="cart-price">
        <div class="food-price">${price}</div>
        <div class="food-amt">${price}</div>
      </div>
      <input type="number" value="1" class="qty">
    </div>
    <div class="remove"><i class="fa-regular fa-trash-can fa-xs" style="color: #dd1313;"></i></div>
  </div>
  `;
}
//total
function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-box')
    const totalValue = document.querySelector('.total-price')
    let total = 0;
    cartItems.forEach(product => {
        let priceElement = product.querySelector('.food-price')
        let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""))
        let qtyprice = product.querySelector('.qty').value;
        total += (price * qtyprice);
        product.querySelector('.food-amt').innerHTML = "Rs." + (price * qtyprice);
    });
    totalValue.innerHTML = "Rs." + total;
    const cartCount = document.querySelector('.no');
    let count = itemList.length;
    cartCount.innerHTML = count;
    const menu = document.querySelector('.display')
    const h2 = document.querySelector('.id')
    if(itemList.length===0)
    {
        menu.style.display="none"
        h2.style.display="block"
    }
    else
    {
        menu.style.display="block";
        h2.style.display="none"
    }
}
const abts = document.querySelector('.abts')
const abt = document.querySelector('.about')
const abtcls = document.querySelector('.abtclose')
abts.addEventListener('click',()=>
{
    abt.classList.add('abt')
    nav.style.display="none"
})
abtcls.addEventListener('click',()=>
{
    abt.classList.remove('abt')
    nav.style.display="block"
})
    const h2 = document.querySelector('.id')
    const place = document.querySelector('.place-order')
    const placeList = document.querySelector('.place')
    const placls = document.querySelector('.placlose')

        place.addEventListener('click', () => {
        placeList.classList.add('addplace')
        nav.style.display="none";    
    })

        placls.addEventListener('click', () => {
        placeList.classList.remove('addplace')
        nav.style.display="block";
        itemList.length = 0;
        const cartContent = document.querySelector('.cart-content');
        cartContent.innerHTML = "The Cart Is empty";
        cartContent.style.position="relative";
        cartContent.style.top="50%";
        cartContent.style.left="20%";
        cartContent.style.fontSize="2em"
        cartContent.style.color="#05abf3";
        updateTotal();
});