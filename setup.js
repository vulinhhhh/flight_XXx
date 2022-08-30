function menu_nav_butt_active(){
    const menu_nav_butt=document.getElementsByClassName("menu-nav-butt");
    let butt_active=0;
   for(let loop=0;loop<menu_nav_butt.length;loop++){
    menu_nav_butt[loop].addEventListener("click",function(){
        menu_nav_butt[butt_active].classList.toggle("active")
        this.classList.toggle("active")
        butt_active=loop;
    })
   }
}

menu_nav_butt_active();