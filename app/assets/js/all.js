$('document').ready(function() {
    // 打開選單
    $('.mobile-link').click(function(event) {
        event.preventDefault();
        $('.m-menu').toggleClass('d-none');
    });
    $(".gl-menu-item").each(function(){ 
        if($(this)[0].href==String(window.location)){ 
            $(this).addClass("menu-active").parent().siblings().find("a").removeClass("menu-active"); 
        } 
    }); 
});