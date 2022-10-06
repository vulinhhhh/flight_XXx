function menu_nav_butt_active() {
    const menu_nav_butt = document.getElementsByClassName("menu-nav-butt");
    let butt_active = 0;
    let flight_nav_butt = 0;
    slider_offer_menu_active("", 0);
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
function menu_s_flight_nav_butt_active() {
    const input_date = Array.from(document.querySelectorAll("input[type=date]"));
    const set = [input_date[0], input_date[1]];

    const menu_s_flight_nav_butt = Array.from(document.getElementsByClassName("menu-s_flight-nav-butt"));
    let butt_active = 0;
    set[1].setAttribute("disabled", "");
    set[1].parentElement.style.cursor = "no-drop";
    set[1].style.cursor = "no-drop";
    menu_s_flight_nav_butt.forEach(function (e, index) {
        e.addEventListener("click", function () {
            menu_s_flight_nav_butt[butt_active].classList.toggle("active");
            e.classList.toggle("active");
            if (index == 0) {
                set[1].setAttribute("disabled", "");
                set[1].parentElement.style.cursor = "no-drop";
                set[1].style.cursor = "no-drop";
            } else {
                set[1].removeAttribute('disabled');
                set[1].parentElement.style.cursor = "pointer";
                set[1].style.cursor = "pointer";
            }
            butt_active = index;
        })
    })
}
function menu_notchange_active(a) {
    const menu_s_flight = document.getElementById("menu-s_flight");
    const menu_s_hotel = document.getElementById("menu-s_hotel");
    //flight
    const menu_s_f_c_1 = menu_s_flight.childNodes[3].childNodes[1].childNodes[3];
    const menu_s_f_c_3 = menu_s_flight.childNodes[3].childNodes[3].childNodes[3];
    const menu_s_f_c_5 = menu_s_flight.childNodes[3].childNodes[5].childNodes[3];
    const menu_s_f_c_7 = menu_s_flight.childNodes[3].childNodes[7].childNodes[3];
    const menu_s_f_c_9 = menu_s_flight.childNodes[3].childNodes[9].childNodes[3];
    //hotel
    const menu_s_hotel_1 = menu_s_hotel.childNodes[1];
    const menu_s_hotel_3 = menu_s_hotel.childNodes[3].childNodes[3];
    const menu_s_hotel_5 = menu_s_hotel.childNodes[5].childNodes[3];
    const menu_s_hotel_7 = menu_s_hotel.childNodes[7].childNodes[3];
    if (a == 1) {
        menu_s_hotel.setAttribute("style", "display:flex;");
        menu_s_flight.setAttribute("style", "display:none;");
        menu_s_f_c_1.childNodes[1].innerHTML = menu_s_f_c_1.childNodes[5].childNodes[1].innerHTML;
        menu_s_f_c_3.childNodes[1].innerHTML = menu_s_f_c_3.childNodes[5].childNodes[1].innerHTML;
        menu_s_f_c_5.childNodes[1].innerHTML = "0 ticket";
        menu_s_f_c_7.value = new Date().toISOString().slice(0, 10);
        menu_s_f_c_9.value = new Date().toISOString().slice(0, 10);
    }
    else {
        menu_s_hotel.setAttribute("style", "display:none;");
        menu_s_flight.setAttribute("style", "display:block;");
        menu_s_hotel_3.value = new Date().toISOString().slice(0, 10);
        menu_s_hotel_5.value = new Date().toISOString().slice(0, 10);
        menu_s_hotel_7.childNodes[1].innerHTML = "0 Class";
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
function left_menu_width() {
    let left_menu = document.getElementById("m_m_1");

    let left_menu_button_x = document.getElementById("m_m_1-menu");
    let left_menu_logo = left_menu.childNodes[1].childNodes[1];
    left_menu_button_x.onclick = function (e) {
        left_menu.classList.toggle("smail");
        left_menu_logo.classList.toggle("none");
    }
};
function butt_location_active() {
    const butt_location = Array.from(document.getElementsByClassName("menu-s_f-m-butt-location"));
    const butt_location_menu = Array.from(document.getElementsByClassName("menu-s_f-m-butt-location-menu"));
    const butt_location_menu_li = Array.from(document.querySelectorAll(".menu-s_f-m-butt-location-menu li"));
    //element click
    window.addEventListener("click", function (e) {
        if (!e.target.matches('.menu-s_f-m-butt-location') && !e.target.matches('.menu-s_f-m-b-l-p') && !e.target.matches('#menu-s_f-m-b-l-i')) {
            butt_location_menu.forEach(function (e) {
                if (e.classList.contains("show")) {
                    e.classList.remove("show");
                    e.parentNode.childNodes[3].classList.toggle("rotate");
                }
            })
        }
    })

    //butt location click
    butt_location.forEach(function (e, index) {
        e.onclick = function () {
            for (let butt = 0; butt < butt_location.length; butt++) {
                if (true) {
                    if (butt_location[butt].childNodes[5].classList.contains("show") && butt != index) {

                        butt_location[butt].childNodes[5].classList.remove("show");
                        butt_location[butt].childNodes[3].classList.remove("rotate");
                    }
                }
            }
            e.childNodes[5].classList.toggle("show");
            e.childNodes[3].classList.toggle("rotate");
        }
    })
    //butt location li click
    butt_location_menu_li.forEach(function (e) {
        e.onclick = function () {
            e.parentElement.parentElement.childNodes[1].innerHTML = e.innerHTML;
        }
    })
}
function date_input_set() {
    const input_date = Array.from(document.querySelectorAll("input[type=date]"));
    let date = new Date();
    let today = date.toISOString().slice(0, 10);
    let setmax = `${date.getFullYear()}-12-31`;
    let setmin = `${date.getFullYear()}-01-01`;


    input_date.forEach(function (e) {
        e.setAttribute("max", setmax);
        e.setAttribute("min", setmin);
        e.value = today;
        e.onchange = function (event) {
        }
        e.onkeydown = function (event) {
            event.preventDefault();
            e.showPicker();
        }
        e.onfocus = function (x) {
            e.showPicker();

        }
    })

}
function ticket_button_click() {
    const ticket_button = Array.from(document.querySelectorAll(".menu-s_f-m-butt-add-butt>button"));
    const p_name = document.querySelector(".menu-s_f-m-butt-add>p");
    ticket_button.forEach(function (e, index) {
        if (index == 0) {
            e.onclick = function (event) {
                let p_name_0 = p_name.innerText.split(" ")[0];
                p_name_0 = parseFloat(p_name_0) + 1;
                p_name.innerHTML = p_name_0 + " ticket";
            }
        } else {
            e.onclick = function (event) {
                let p_name_0 = p_name.innerText.split(" ")[0];
                if (parseFloat(p_name_0) > 0) {
                    p_name_0 = parseFloat(p_name_0) - 1;
                    p_name.innerHTML = p_name_0 + " ticket";
                }
            }
        }
    })

}
function nguoi_button_click() {
    const nguoi_button = Array.from(document.querySelectorAll(".menu-s_hotel-butt-add-butt>button"));
    const p_name = document.querySelector(".menu-s_hotel-butt-add>p");
    nguoi_button.forEach(function (e, index) {
        if (index == 0) {
            e.onclick = function (event) {
                let p_name_0 = p_name.innerText.split(" ")[0];
                p_name_0 = parseFloat(p_name_0) + 1;
                p_name.innerHTML = p_name_0 + " Class";
            }
        } else {
            e.onclick = function (event) {
                let p_name_0 = p_name.innerText.split(" ")[0];
                if (parseFloat(p_name_0) > 0) {
                    p_name_0 = parseFloat(p_name_0) - 1;
                    p_name.innerHTML = p_name_0 + " Class";
                }
            }
        }
    })

}

function city_hotel() {
    const butt_city = document.getElementById("menu-s_h-butt-city");
    const butt_city_menu = Array.from(document.getElementsByClassName("menu-s_f-m-butt-city-menu"));
    const butt_city_menu_li = Array.from(document.querySelectorAll(".menu-s_f-m-butt-city-menu li"));
    console.log(butt_city_menu[0])
    butt_city.onclick = function (event) {
        butt_city_menu[0].classList.toggle("show");
    }

    window.addEventListener("click", function (e) {
        if (!e.target.matches('#menu-s_h-butt-city') && !e.target.matches('.menu-s_h-b-c-p') && !e.target.matches('#menu-s_h-b-c-i')) {
            if(butt_city_menu[0].classList.contains("show")){
                butt_city_menu[0].classList.remove("show")
            }
        }
    })
}
function get_access(){
    const gethome__access=document.querySelector("#gethome_access");
    const gethome_access_shadow=document.querySelector("#gethome_access_shadow");
    const gethome_access_butt=Array.from(document.querySelectorAll(".sign-in-sign-up-butt"));
    const gethome_access_signin=document.querySelector("#sign-in");
    const gethome_access_signup=document.querySelector("#sign-up");
    const sign_in_sign_up_return=Array.from(document.querySelectorAll(".sign-in-sign-up-return"));
    
    gethome_access_butt[0].classList.toggle("show");
    console.log(gethome_access_butt)
    gethome__access.onclick=function(){
        gethome_access_shadow.classList.toggle("show");
    }
    gethome_access_butt.forEach(function(e,index){
        e.onclick=function(event){
            if(index==0){
                if(!e.classList.contains("show")){
                    e.classList.toggle("show");
                    gethome_access_butt[1].classList.toggle("show");
                    gethome_access_signin.style.display="block";
                    gethome_access_signup.style.display="none";
                }
            }else{
                if(!e.classList.contains("show")){
                    e.classList.toggle("show");
                    gethome_access_butt[0].classList.toggle("show");
                    gethome_access_signin.style.display="none";
                    gethome_access_signup.style.display="block";
                }
            }
        }
    })
    sign_in_sign_up_return.forEach(function(e,index){
        e.onclick=function(event){
            if(gethome_access_shadow.classList.contains("show")){
                gethome_access_shadow.classList.remove("show")
            }
            }})
}
menu_nav_butt_active();
menu_button_li_active();
menu_s_flight_nav_butt_active();
left_menu_width();
butt_location_active();
date_input_set();
city_hotel();
ticket_button_click();
nguoi_button_click();
get_access();
