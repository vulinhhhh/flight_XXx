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
            butt_active = loop;
        })
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

menu_nav_butt_active();
menu_button_li_active();
