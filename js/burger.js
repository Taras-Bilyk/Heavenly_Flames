var hamburger = document.querySelector(".div_with_spans_in_burger")
var menu = document.querySelector(".naw_menu")

hamburger.onclick = function(){
    hamburger.classList.toggle("burger_open")
    menu.classList.toggle("menu_open")
}
