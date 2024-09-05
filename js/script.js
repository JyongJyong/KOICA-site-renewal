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
});

// 풀페이지 만들기
var header = document.getElementsByTagName("header")[0];
var prevClass = null;
var activeClass = null;

/*
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
*/

let full_page_swiper = new Swiper("#banner",{
    wrapperClass: 'wrap',
    slideClass: 'item',

    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 5,
    centeredSlides: false,
});
