let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.cart-box')

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let user = document.querySelector('.user')

document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar')

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    user.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

window.onscroll = () => {
    user.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}


// Navbar scroll yh
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
