$("#btn-menu").click(function(){
    if($("#menu").css("display") === "none"){
        menuFadeIn();
        listviewFadeOut($("#playlist"));
        listviewFadeOut($("#about"))
        listviewFadeOut($("#contact"))
    }else{
        menuFadeOut();
        listviewFadeIn($("#playlist"), "block");
    }
});
$(".btn-about").click(function(){
    menuFadeOut();
    listviewFadeIn($("#about"), "flex");
});
$(".btn-list").click(function(){
    menuFadeOut();
    listviewFadeIn($("#playlist"), "block");
})
$(".btn-contact").click(function(){
    menuFadeOut()
    listviewFadeIn($("#contact"), "flex");
});
function menuFadeIn(){
    $("#menu").css("display","flex");
    $(".btn-list").addClass("btn-list-in");
    $(".btn-contact").addClass("btn-contact-in");
    $(".btn-about").addClass("btn-about-in");
    $(".btn-twitter").addClass("btn-twitter-in");
    setTimeout(function(){
        $(".btn-list").removeClass("btn-list-in");
        $(".btn-contact").removeClass("btn-contact-in");
        $(".btn-about").removeClass("btn-about-in");
        $(".btn-twitter").removeClass("btn-twitter-in");
    }, 300);
}
function menuFadeOut(){
    setTimeout(function(){
        $(".btn-list").addClass("btn-list-out");
        $(".btn-contact").addClass("btn-contact-out");
        $(".btn-about").addClass("btn-about-out");
        $(".btn-twitter").addClass("btn-twitter-out");
    },100);
    setTimeout(function(){
        $("#menu").css("display","none");
        $(".btn-list").removeClass("btn-list-out");
        $(".btn-contact").removeClass("btn-contact-out");
        $(".btn-about").removeClass("btn-about-out");
        $(".btn-twitter").removeClass("btn-twitter-out");
    }, 300);
}
function listviewFadeIn(obj, displayOpt){
    setTimeout(function(){
        obj.css("display", displayOpt);
        obj.addClass("playlist-in");
    }, 300);
    setTimeout(function(){
        obj.removeClass("playlist-in");
    },500);
}
function listviewFadeOut(obj){
    obj.addClass("playlist-out");
    setTimeout(function(){
        obj.css("display", "none");
        obj.removeClass("playlist-out");
    },50);
}
