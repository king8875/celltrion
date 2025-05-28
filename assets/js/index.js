// //lenis 스크롤 스무스
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);


//header gsap
let lastScrollY = window.scrollY;
const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        gsap.to(header, { y: '-100%', duration: 0.5 });
        header.classList.add("active");
    }

    else {
        gsap.to(header, { y: '0%', duration: 0.5 });
        // header.classList.remove("active")
    }
    lastScrollY = currentScrollY;
});


// 헤더 서브 매뉴 애니메이션
const gnbItem = $('.gnb_item');
const gnbList = $('.sub-gnb_list');

gnbItem.on("mouseenter", function () {
    gnbItem.css("color","#ccc");
    $(this).css("color","#000");
    $(this).addClass('active');
    $(this).find('.sub-gnb_list').addClass('active');
});
gnbItem.on("mouseleave", function () {
    gnbItem.css("color","#000");
    $(this).removeClass('active');
    $(this).find(gnbList).removeClass('active');
});



// 더보기 버튼 애니메이션
const moreBtns = document.querySelectorAll(".btn_more");

moreBtns.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () { btn.classList.add("active"); });
    btn.addEventListener("mouseleave", function () { btn.classList.remove("active"); });
});



// visual section
const visual = document.querySelector('.visual_section .visual_inner');

const visualAni = gsap.timeline({
    scrollTrigger: {
        trigger: ".visual_section",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
});
visualAni.to(visual, { width: "99vw" });



// business_section js
const swiper = new Swiper(".first-swiper.swiper", {
    grabCursor: true,
    slidesPerView: 1.1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.business_section .swiper-button-next',
        prevEl: '.business_section .swiper-button-prev',
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
cardAni.set(cardItem02, { yPercent: 140, scale:1.2 })
cardAni.set(cardItem01, { yPercent: 140, scale:1.2 })
cardAni.to(cardItem03, {
    yPercent: -5,
    scale: 0.9
});
cardAni.to(cardItem02, {
    yPercent: 0,
    scale: 0.9,
    // filter: "brightness(0.9)"
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



// tab 기능
document.querySelectorAll('.tab--btn').forEach(function (tab) {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.tab--btn').forEach(function (item) {
            item.classList.remove('active');
        });
        document.querySelectorAll('.news_section .swiper').forEach(function (swiper) {
            swiper.classList.remove('active');
        });
        document.querySelectorAll('.news_section .tab--btn::after').forEach(function (swiper) {
            swiper.classList.remove('active');
        });

        this.classList.add('active');

        const target = this.getAttribute('data-tab');
        const targetPanel = document.getElementById(target);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});



// about section tab list js





// swiper_section js
const aboutSwiper = new Swiper(".swiper_section .swiper", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: '.business_section .swiper-button-next',
        prevEl: '.business_section .swiper-button-prev',
    },
    pagination: {
        el: '.swiper_section .swiper-pagination',
    },
});

// footer js
const select = document.querySelector('.select_sub--list');

document.querySelector(".familySite .select_inner .select_tit").addEventListener("click", function () {
    select.classList.toggle('active');
});

document.querySelector(".iconGoToTop").addEventListener("click", function () {
    gsap.to(window, {
        scrollTo: 0,
        duration: 1.5,
        ease: "power2.out"
    });
});

ScrollTrigger.create({
    trigger: ".footer",
    start: "0% 60%",
    end: "100% 60%",
    onEnter: () => {
        document.querySelector(".footerTopBtn").classList.add("active");
    },
    onLeaveBack: () => {
        document.querySelector(".footerTopBtn").classList.remove("active");
    },
})
// history point progress bar 애니메이션
const progressBar = gsap.timeline();
const pointerEl = gsap.timeline();

progressBar.from(".history_bar_on", { height: 0, ease: "none" });
pointerEl.from(".pointer", { top: 0, ease: "none" });

// ScrollTrigger 연결
ScrollTrigger.create({
    animation: progressBar,
    trigger: ".history_bar",
    start: "top 300",
    end: "bottom center",
    scrub: 0.3,
});

ScrollTrigger.create({
    animation: pointerEl,
    trigger: ".history_bar",
    start: "top 300",
    end: "bottom center",
    scrub: 0.3,
});



// history year 애니메이션
document.querySelectorAll('.year_ctn').forEach((el) => {
    const yearTitle = el.querySelector('.year_tit');
    const yearImg = el.querySelector('.year_img');
    const yearTxt = el.querySelector('.year_txt');

    ScrollTrigger.create({
        trigger: el,
        start: "0% 50%",
        end: "100% 50%",
        onEnter: () => {
            yearTitle?.classList.add('active');
            yearImg?.classList.add('active');
            yearTxt?.classList.add('active');
        },
        onLeaveBack: () => {
            yearTitle?.classList.remove('active');
            yearImg?.classList.remove('active');
            yearTxt?.classList.remove('active');
        }
    });
});




const mm = gsap.matchMedia();

mm.add("(min-width: 1400px", function () {
    const newsSwiper = new Swiper('.news_section .swiper', {
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".news_section .swiper-button-next",
            prevEl: ".news_section .swiper-button-prev"
        },
        slideToClickedSlide: true,
    });
    const cell = document.querySelector(".visual_section .cell-visual");
    const cell01 = document.querySelector(".business_section .cell-visual");

    const cellAni = gsap.timeline({
        scrollTrigger: {
            trigger: ".visual_section",
            start: "0% 50%",
            end: "100% 50%",
            scrub: 1,
            onEnterBack: function () {
                gsap.to(cell, { autoAlpha: 1 });
            },
            onLeave: function () {
                gsap.to(cell, { autoAlpha: 0 });
            }
        },
    });
    // cellAni.set(cell,{opacity:1});
    cellAni.to(cell, { yPercent: 100 });

    const cellAni01 = gsap.timeline({
        scrollTrigger: {
            trigger: ".business_section",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 1,

            onEnterBack: function () {
                gsap.to(cell01, { filter: "none" });
                gsap.to(cell01, { autoAlpha: 1 });
            },

            onLeave: function () {
                gsap.to(cell01, { filter: "blur(50px)" });
                gsap.to(cell01, { autoAlpha: 0 });
            }
        },
    });
    cellAni01.to(cell01, { display: "block" });
    cellAni01.to(cell01, { yPercent: 100 });
    cellAni01.to(cell01, { scale: 1.1 }, "<");
    cellAni01.to(cell01, { xPercent: 50 }, "<");
    cellAni01.to(cell01, { scale: 0.8 });
    cellAni01.to(cell01, { xPercent: 100 }, "<");
})


mm.add("(max-width: 1399px)", function () {

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