let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
})

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src') //for different videos
        document.querySelector('#video-slider').src = src
    })
})

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {                       //.pos file
        delay: 2500,                  //.pos file
        disableOnInteraction: false,  //.pos file
    },                                //.pos file
    breakpoints: {                    //.pos file
        640: {                        //.pos file
            slidesPerView: 1,         //.pos file
        },                            //.pos file
        768: {                        //.pos file
            slidesPerView: 2,         //.pos file
        },                            //.pos file
        1024: {                       //.pos file
            slidesPerView: 3,         //.pos file
        },                            //.pos file
    },                                //.pos file
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {                       //.pos file
        delay: 2500,                  //.pos file
        disableOnInteraction: false,  //.pos file
    },                                //.pos file
    breakpoints: {                    //.pos file
        450: {                        //.pos file
          slidesPerView: 2,         //.pos file
        },                            //.pos file
        768: {                        //.pos file
          slidesPerView: 3,         //.pos file
        },                            //.pos file
        991: {                       //.pos file
          slidesPerView: 4,         //.pos file
        },                            //.pos file
        1200: {                       //.pos file
          slidesPerView: 5,         //.pos file
        },                            //.pos file
    },                                //.pos file
});