// //lenis 스크롤 스무스
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 900);
});
gsap.ticker.lagSmoothing(0);


// header js
// const aTag = document.querySelectorAll("a");
// aTag.addEventListener('click',function(e){
//     e.preventDefalut();
// })


// common js


// const moreBtn = document.querySelector(".btn_more");

// moreBtn.addEventListener("mouseenter",function(){
//     document.querySelector(".btn_more .more_ic::before").classList.add('active');
// });

// const moreBtn = document.querySelector(".btn_more");

// moreBtn.addEventListener("mouseenter", function() {
//   moreBtn.classList.add("active");
// });
// moreBtn.addEventListener("mouseleave", function() {
//   moreBtn.classList.remove("active");
// });

const moreBtns = document.querySelectorAll(".btn_more");

moreBtns.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
        btn.classList.add("active");
    });

    btn.addEventListener("mouseleave", function () {
        btn.classList.remove("active");
    });
});

// header js
const header = document.querySelector("#header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
});

// gsap.to("#header", {
//     opacity: 1,
//     y: 0,
//     duration: 0.6,
//     scrollTrigger: {
//         trigger: "#header",
//         start: "top 80%", // 시작 시점
//         end: "top 50%",   // 끝 시점
//         toggleActions: "play reverse play reverse", // 아래 → 위 → 아래 → 위
//         markers: true, // 디버깅용 마커
//     }
// });


// visual section

const visual = document.querySelector('.visual_inner');



const visualAni = gsap.timeline({
    scrollTrigger: {
        trigger: ".visual_section",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
});
visualAni.to(visual, {
    width: "100vw"
});








// business_section js
const swiper = new Swiper(".first-swiper.swiper", {
    grabCursor: true,
    // slidesPerView: "auto",
    slidesPerView: 1.1,
    // effect: "creative",
    spaceBetween: 20,

    navigation: {
        nextEl: '.business_section .swiper-button-next',
        prevEl: '.business_section .swiper-button-prev',
    },
    // creativeEffect: {
    //     prev: {
    //         shadow: true,
    //         translate: ["-120%", 0, -100],
    //     },
    //     next: {
    //         shadow: true,
    //         translate: ["120%", 0, -100],
    //     },
    // },
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


const cardItem01 = document.querySelector(".card-list .card-item:nth-child(1)");
const cardItem02 = document.querySelector(".card-list .card-item:nth-child(2)");
const cardItem03 = document.querySelector(".card-list .card-item:nth-child(3)");


const cardAni = gsap.timeline({
    scrollTrigger: {
        trigger: ".magazine_section",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
});
cardAni.set(cardItem02, { yPercent: 140 })
cardAni.set(cardItem01, { yPercent: 140 })
cardAni.to(cardItem03, {
    yPercent: -5,
    scale: 0.9
});
cardAni.to(cardItem02, {
    yPercent: 0,
    scale: 0.9,
    filter: "brightness(0.9)"

});
cardAni.to(cardItem01, {
    yPercent: 5,
    scale: 0.9
});


//prove gsap
const tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".prove-sec02",
        start: "0% 70%",
        end: "100% 80%",
        scrub: 0,
    }
});
tl6.from('.prove-sec02 .prove-text', { x: 0 })
tl6.from('.prove-sec02 .pr-block', { '--x': 1 }, "<")
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




// news_section js

// const newsSwiper = new Swiper('.news_section .swiper', {
//     slidesPerView: "auto",
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".news_section .swiper-button-next",
//         prevEl: ".news_section .swiper-button-prev"
//     },
//     slideToClickedSlide: true,
// });




document.querySelectorAll('.tab--btn').forEach(function (tab) {
    tab.addEventListener('click', function () {
        // 모든 탭에서 active 클래스 제거
        document.querySelectorAll('.tab--btn').forEach(function (item) {
            item.classList.remove('active');
        });
        document.querySelectorAll('.news_section .swiper').forEach(function (swiper) {
            swiper.classList.remove('active');
        });
        document.querySelectorAll('.news_section .tab--btn::after').forEach(function (swiper) {
            swiper.classList.remove('active');
        });

        // 클릭한 탭에 active 클래스 추가
        this.classList.add('active');

        // data-tab 속성으로 연결된 콘텐츠 활성화
        const target = this.getAttribute('data-tab');
        const targetPanel = document.getElementById(target);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});




// footer js
const select = document.querySelector('.select_sub--list');

document.querySelector(".familySite .select_inner .select_tit").addEventListener("click", function () {
    select.classList.toggle('active');
});



const mm = gsap.matchMedia();


mm.add("(min-width: 1400px", function(){
    const newsSwiper = new Swiper('.news_section .swiper', {
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".news_section .swiper-button-next",
            prevEl: ".news_section .swiper-button-prev"
        },
        slideToClickedSlide: true,
    });

})


mm.add("(max-width: 1399px)", function(){
 
    const newsSwiper = new Swiper('.news_section .swiper', {
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".news_section .swiper-button-next",
            prevEl: ".news_section .swiper-button-prev"
        },
        slideToClickedSlide: true,
    });

});