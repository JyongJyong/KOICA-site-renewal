window.addEventListener("load",function(){
    var header_box = document.getElementById("header_box");
    var on_box = document.querySelector("#gnb ul");

    on_box.addEventListener("mouseenter", function(){
        header_box.classList.add("show");
        header_box.classList.add("height_change");
    });

    on_box.addEventListener("mouseleave", function(){
        header_box.classList.remove("show");
        header_box.classList.remove("height_change");
    });

    // section02 캐릭터 움직이기
    var ch1_move_btn = document.querySelector(".move_btn1");
    var ch1 = document.querySelector(".ch01");
    var ch2_move_btn = document.querySelector(".move_btn2");
    var ch2 = document.querySelector(".ch02");
    var ch3_move_btn = document.querySelector(".move_btn3");
    var ch3 = document.querySelector(".ch03");

    ch1_move_btn.addEventListener("mouseenter",function(){
        console.log("실행");
        ch1.classList.add("move");
    });
    ch1_move_btn.addEventListener("mouseleave",function(){
        ch1.classList.remove("move");
    });

    ch2_move_btn.addEventListener("mouseenter",function(){
        console.log("실행");
        ch2.classList.add("move");
    });
    ch2_move_btn.addEventListener("mouseleave",function(){
        ch2.classList.remove("move");
    });

    ch3_move_btn.addEventListener("mouseenter",function(){
        console.log("실행");
        ch3.classList.add("move");
    });
    ch3_move_btn.addEventListener("mouseleave",function(){
        ch3.classList.remove("move");
    });
});

// 풀페이지 만들기
var header = document.getElementsByTagName("header")[0];
var prevClass = null;
var activeClass = null;

let full_page_swiper = new Swiper("#wrap",{
    wrapperClass: 'container',
    slideClass: 'sec',

    direction: 'vertical',

    mousewheel: true, // 마우스휠의 동작으로 화면전환
    speed: 800, // 화면전환시간

    pagination:{
        el: '.pager',
        bulletActiveClass:'active', // 활성화된 요소에 추가되는 클래스
        clickable: true, // 클릭 시 슬라이드 이동
    },
    
    // class 만들기
    on:{
        afterInit: function(){
            activeClass = "view" + this.activeIndex;
            header.classList.add(activeClass);
            prevClass = activeClass;
        },
        slideChange:function(){ // slideChangeTransitionEnd:function()
            activeClass = "view" + this.activeIndex;
            header.classList.replace(prevClass, activeClass);
            prevClass = activeClass;
        }
    },
});

// Section02
let koica_info_swiper = new Swiper("#koica_swiper", {
    wrapperClass: 'koica_wrap',
    slideClass: 'koica_info_img',

    effect : 'fade', // 페이드 효과 사용
	loop : true, // 무한 반복
    speed:1200,
    spaceBetween : 0,

    observer: true,
    observerParents: true,
    slidesPerView: 1,
    
    autoplay: {
        delay: 3600,
        disableOnInteraction: false,
      },

    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
    },  
});

// Section04
let koica_overseas_swiper = new Swiper("#overseas_contents", {
    wrapperClass: 'container',
    slideClass: 'overseas_info',

    spaceBetween : 120,
    loop: true,
    centeredSlides: true,
    loopedSlides: 3,
    //spaceBetween: 100,
    slidesPerView: 2,  
    resistanceRatio: 0,
    
    direction: 'horizontal',

    observer: true, 
    observeParents: true,

    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    pagination: {
        el: ".section_pager",
        clickable: true,  // 클릭시 slide 이동 여부
        type: "bullets",
    },
});

// Footer
let banner_swiper = new Swiper("#banner",{
    wrapperClass: 'wrap',
    slideClass: 'item',
    
    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
    },
    speed: 4000,
    loop: true,
    
    loopAdditionalSlides: 1,
    slidesPerView: 5,
    centeredSlides: false,
});
