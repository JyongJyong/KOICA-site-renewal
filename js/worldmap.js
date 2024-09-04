window.onload = function(){
    var guatemala = document.getElementById("guatemala");
    var guatemala_info = document.getElementById("quatemala_info");

    guatemala.addEventListener("mouseover", infoShow);
    guatemala.addEventListener("mouseout", infoClose);

    function infoShow(){
        guatemala_info.classList.add("show");
        console.log("실행");
    }

    function infoClose(){
        guatemala_info.classList.remove("show");
        console.log("실행1");
    }    
}