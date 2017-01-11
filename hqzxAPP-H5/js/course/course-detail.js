$(function () {
    slideHuaDong(true);
    $(".float-nav-bottom #right-enable").on("touchend", function () {
        courseBuyPop();
        return false;
    });
});


$(function () {
    $("#getBuy").click(function () {
        var productId = $("#getBuy").attr("item_id");
        if (productId != '') {
            $.ajax(
            {
                url: "/lib/product/ProductDetail.ashx",
                type: "POST",
                async: false,
                data: "type=8&productId=" + productId,
                beforeSend: function () {

                },
                success: function (data) {
                    if (data != "000") {
                        window.location.href = "/UserManage/order.html?ordertype=803";
                    }
                    else {
                        var url = window.location.href;
                        window.location.href = "/login.html?ReturnUrl=" + escape(url) + "";
                    }
                }

            })
        }
    });
});


//function courseBuyPop() {
//  var bg = $(".black-bg");
//  var pop = $(".course-bug-pop");
//
//  bg.css({ "display": "block", "-webkit-animation": "fadeIn 0.5s both" });
//  pop.css({ "display": "block", "-webkit-animation": "fadeInUp 0.4s both" });
//
//  $(".course-bug-pop .sec-mid ul li").on("touchend", function () {
//      $(this).addClass("act").siblings().removeClass("act");
//  });
//
//  $(".black-bg,.course-bug-pop .close-btn").on("touchend", function () {
//      animateFlish();
//  });
//
//  function animateFlish() {
//      //		bg.css({"-webkit-animation":"fadeOut 0.5s both"});
//      //		pop.css({"-webkit-animation":"fadeOutDown 0.4s both"});
//      //		bg[0].addEventListener("webkitAnimationEnd", function(){
//      //			$(this).css({"display":"none"});
//      //		}, false); 
//      //		pop[0].addEventListener("webkitAnimationEnd", function(){
//      //			$(this).css({"display":"none"});
//      //		}, false); 
//      bg.css({ "display": "none" });
//      pop.css({ "display": "none" });
//  }
//}


function courseBuyPop() {
    var bg = $(".black-bg");
    var pop = $(".course-bug-pop");

    bg.css({ "display": "block", "-webkit-animation": "fadeIn 0.5s both" });
    pop.css({ "display": "block", "-webkit-animation": "fadeInUp 0.4s both" });

    $(".course-bug-pop .sec-mid ul li").on("touchend", function () {
        $(this).addClass("act").siblings().removeClass("act");
        $("#getBuy").attr("item_id", $(this).attr("item_id"));
        $(".sec-top").hide();
        var $it_id = "#item_" + $(this).attr("item_id");
        $($it_id).show();
        return false;

    });

    $(".black-bg,.course-bug-pop .close-btn").on("touchend", function () {
        animateFlish();
        return false;
    });

    function animateFlish() {
        //		bg.css({"-webkit-animation":"fadeOut 0.5s both"});
        //		pop.css({"-webkit-animation":"fadeOutDown 0.4s both"});
        //		bg[0].addEventListener("webkitAnimationEnd", function(){
        //			$(this).css({"display":"none"});
        //		}, false); 
        //		pop[0].addEventListener("webkitAnimationEnd", function(){
        //			$(this).css({"display":"none"});
        //		}, false); 
        bg.css({ "display": "none" });
        pop.css({ "display": "none" });
    }
}
