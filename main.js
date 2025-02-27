const menuEmail =document.querySelector('.navbar-email');
const menuHamIcon =document.querySelector('.menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const desktopMenu =document.querySelector('.desktop-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu =document.querySelector('.mobile-menu');
const shoppingCartcontainer = document.querySelector('#shoppingCartcontainer');
const producDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isshoppingCartcontainerClosed = shoppingCartcontainer.classList.contains('inactive');
    
    if(!isshoppingCartcontainerClosed){
        shoppingCartcontainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    producDetailContainer.classList.add('inactive');
    const isshoppingCartcontainerClosed = shoppingCartcontainer.classList.contains('inactive');

    if(!isshoppingCartcontainerClosed){
        shoppingCartcontainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    //const isshoppingCartcontainerClosed = shoppingCartcontainer.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = producDetailContainer.classList.contains('inactive');
    
    //const isshoppingCartcontainerClosed = shoppingCartcontainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        producDetailContainer.classList.add('inactive');
    }

    shoppingCartcontainer.classList.toggle('inactive');
}

function openProductDetailAside(){
  producDetailContainer.classList.remove('inactive');
  shoppingCartcontainer.classList.add('inactive');
}

function closeProductDetailAside(){
  producDetailContainer.classList.add('inactive');

}
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'compu',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg =  document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');   
    
    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = 'S' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

    //product = {name, price, image}
  }
}

renderProducts(productList);