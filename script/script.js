
headerMargins();


$(document).ready(function(){
    $(".burgerMenu").click(function(e){
        $(".navBar").toggle();
    });
    
});


$(window).resize(function(){
    offset = 0;
    headerMargins();
    
});

// Burger menu right margin
// get the offset of the 'main' element and apply to the burger menu
function headerMargins(){
    offset = $("main").offset();
    
    var burgerMenu = $(".burgerMenu");
    burgerMenu.css("right", offset.left);
    
    var siteNameElm = $(".site-name");
    siteNameElm.css("left", offset.left);
}