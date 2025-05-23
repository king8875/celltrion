// header js
// const aTag = document.querySelectorAll("a");
// aTag.addEventListener('click',function(e){
//     e.preventDefalut();
// })
const header = document.querySelector("#header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
});




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
// const swiper01 = new Swiper(".first-swiper",{
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// })



// 왼쪽 탭 슬라이드 (vertical 방향)
const leftSwiper = new Swiper(".left-tab-swiper", {
    direction: "vertical",
    slidesPerView: 7, // 한 번에 7개 슬라이드
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    slideToClickedSlide: true, // 클릭한 탭으로 이동
   
});

// 오른쪽 콘텐츠 슬라이드
const rightSwiper = new Swiper(".right-content-swiper", {
    slidesPerView: 3, // 3개의 슬라이드를 보여준다
    spaceBetween: 10,

    thumbs: {
        swiper: leftSwiper // 왼쪽 탭 슬라이드와 연결
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    
});



// const leftSwiper = new Swiper(".left-tab-swiper", {
//     direction: "vertical",
//     slidesPerView: 7,
//     spaceBetween: 10,
//     mousewheel: true,
//     // watchSlidesProgress: true,
//     // slideToClickedSlide: true,
//     navigation: {
//         nextEl: ".products_section .swiper-button-next",
//         prevEl: ".products_section .swiper-button-prev",
//     },

// });

// const rightSwiper = new Swiper(".right-content-swiper", {
//     slidesPerView: 3,
//     spaceBetween: 10,
//     centeredSlides: true,

//     thumbs: {
//         swiper: leftSwiper,
//     },
// });


// // 동기화
// leftSwiper.on("slideChange", function () {
//     rightSwiper.slideTo(leftSwiper.activeIndex);
// });

// rightSwiper.on("slideChange", function () {
//     leftSwiper.slideTo(rightSwiper.activeIndex);
// });