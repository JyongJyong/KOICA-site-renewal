window.addEventListener("load",function(){
    var header_box = document.getElementById("header_box");
    var on_box = document.querySelector("#gnb ul");

    on_box.addEventListener("mouseenter", function(){
        header_box.classList.add("show");
    });

    on_box.addEventListener("mouseleave", function(){
        header_box.classList.remove("show");
    });
});