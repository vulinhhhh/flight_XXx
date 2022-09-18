function menu_nav_butt_active() {
    const menu_nav_butt = document.getElementsByClassName("menu-nav-butt");
    let butt_active = 0;
   
    slider_offer_menu_active("", 0)
    for (let loop = 0; loop < menu_nav_butt.length; loop++) {
        menu_nav_butt[loop].addEventListener("click", function () {
            menu_nav_butt[butt_active].classList.toggle("active")
            slider_offer_menu_active("remove", butt_active)
            this.classList.toggle("active")
            slider_offer_menu_active("", loop)
            menu_notchange_active(loop);
            butt_active = loop;
        })
    }
}
function menu_notchange_active(a){
    const menu_s_flight=document.getElementById("menu-s_flight");
    const menu_s_hotel=document.getElementById("menu-s_hotel");
    if (a ==1) {
        menu_s_hotel.setAttribute("style", "display:flex;");
        menu_s_flight.setAttribute("style", "display:none;");
    }
    else {
        menu_s_hotel.setAttribute("style", "display:none;");
        menu_s_flight.setAttribute("style", "display:block;");
    }
}
function slider_offer_menu_active(a, b) {
    const slider_offer_menu = document.getElementsByClassName("slider_offer_menu");

    if (a === "remove" && (b == 0 || b == 1)) {
        slider_offer_menu[b].setAttribute("style", "display:none;")
    }
    else if (b == 2 || b == 3) {

    }
    else {
        slider_offer_menu[b].setAttribute("style", "display:block;")
    }
}

function menu_button_li_active() {
    const menu_button_li = document.getElementsByClassName("m_m_1-menu_button-li");
    let butt_active = 0;
    for (let loop = 0; loop < menu_button_li.length; loop++) {
        menu_button_li[loop].addEventListener("click", function () {
            menu_button_li[butt_active].classList.toggle("active")
            this.classList.toggle("active")
            butt_active = loop;
        })
    }
}
function left_menu_width(){
    let left_menu=document.getElementById("m_m_1");

    let left_menu_button_x=document.getElementById("m_m_1-menu");
    let left_menu_logo=left_menu.childNodes[1].childNodes[1];
    left_menu_button_x.onclick=function(e){
        left_menu.classList.toggle("smail");
        left_menu_logo.classList.toggle("none");
    }
};
menu_nav_butt_active();
menu_button_li_active();
left_menu_width();