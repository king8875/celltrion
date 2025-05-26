// header js
// const aTag = document.querySelectorAll("a");
// aTag.addEventListener('click',function(e){
//     e.preventDefalut();
// })

gsap.registerPlugin(ScrollTrigger);



// header js
const header = document.querySelector("#header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
});





// business_section js
const swiper = new Swiper(".first-swiper.swiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 15,
    effect: "creative",

    navigation: {
        nextEl: '.business_section .swiper-button-next',
        prevEl: '.business_section .swiper-button-prev',
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
        },
        next: {
            shadow: true,
            translate: ["120%", 0, -500],
        },
    },
});



// products_section js 

const leftSwiper = new Swiper(".left-tab-swiper", {
    direction: "vertical",
    slidesPerView: "auto", 
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    slideToClickedSlide: true,
   
});


const rightSwiper = new Swiper(".right-content-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,

    thumbs: {
        swiper: leftSwiper
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});




// magazine-section js


// const cardItem = document.querySelector(".card-item:nth-child(1)");


const test = gsap.timeline();

test.to('.card-item:nth-child(3)',{
    scrollTrigger: {
        trigger:'.magazine_section',
        start:"0% 0%",
        end: "100% 100%",
        scrub:1,
        markers:true,
    },
    y:-300,    
    scale:"0.9"
});

// const cardAni = gsap.timeline(".card-item:nth-child(2)",{
//     scrollTrigger: {
//         trigger: '.magazine_section',
//         start:"0% 0%",
//         end: "100% 100%",
//         scrub:1,
//         markers: true,
//     },
// })
// cardAni.to(cardItem,{
//     y:100
// });


// const sidepj = gsap.timeline({
//     scrollTrigger: {
//         trigger:'.sidepj-sec',
//         start:"0% 0%",
//         end:"100% 100%",
//         scrub:1,
//         onEnter: function(){
//             gsap.to('.bottom-overlay',{autoAlpha:0});
//             document.querySelector('.custom-cursor').classList.add('white');
//         },
//         onLeaveBack: function(){
//             gsap.to('.bottom-overlay',{autoAlpha:1});
//         }
//     },
// });