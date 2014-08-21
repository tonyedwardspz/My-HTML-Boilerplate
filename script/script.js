
$(document).ready(function(){
    $(".burgerMenu").click(function(e){
        $(".navBar").toggle();
    });
    
    headerMargins();   
});


$(window).resize(function(){
    offset = 0;
    headerMargins();
    
    // restore the nav bar if toggled on/off and window is resized
    if(window.innerWidth > 800) {
        $(".navBar").removeAttr("style");
    } 
    
});

// set the header margins for the site name and the nav dynamically
function headerMargins(){
    offset = $("main").offset();
    
    var burgerMenu = $(".burgerMenu");
    burgerMenu.css("right", offset.left);
    
    var siteNameElm = $(".site-name");
    siteNameElm.css("left", offset.left);
    
    var dropDownNav = $(".navBar");
    dropDownNav.css("right", offset.left);
}