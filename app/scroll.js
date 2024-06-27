const header = document.getElementById("header");

window.addEventListener("scroll", function(){
    const scrollPos = window.scrollY;
    if(scrollPos > 100){
        header.classList.add("header_scroll");
    } else {
        header.classList.remove("header_scroll");
    }
})