! function(e, t) {
    function n() {
        var n = l.getBoundingClientRect().width;
        t = t || 540, n > t && (n = t);
        var i = 100 * n / e;
        r.innerHTML = "html{font-size:" + i + "px;}"
    }
    var i, d = document,
        o = window,
        l = d.documentElement,
        r = document.createElement("style");
    if (l.firstElementChild) l.firstElementChild.appendChild(r);
    else {
        var a = d.createElement("div");
        a.appendChild(r), d.write(a.innerHTML), a = null
    }
    n(), o.addEventListener("resize", function() { clearTimeout(i), i = setTimeout(n, 300) }, !1),
        o.addEventListener("pageshow", function(e) { e.persisted && (clearTimeout(i), i = setTimeout(n, 300)) }, !1), "complete" ===
        d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function(e) {
            d.body.style.fontSize = "16px"
        }, !1)
}(750, 750);

$(function() {
    $(".an").addClass("wow fadeInUp");
    $('.an_img').addClass("wow fadeInLeft");
    $('.an_h1').addClass("wow bounceIn");
    $('.an_p').addClass("wow fadeInRight");
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
    //page product---------------
    $(".switch-content .mask").hammer().on('tap', function() {
        $(".switch-popup").removeClass("showSwitch");
        $(".switch-popup .wrap").slideUp();
        setTimeout(function() {
            $(".switch-popup").css("display", "none");
        }, 300)
    });
    $(".switch-content .switch").hammer().on('tap', function() {
        $('.switch-popup').on('touchmove', function(e) { e.preventDefault(); }, false);
        setTimeout(function() {
            $(".switch-popup").css("display", "block");
            $(".switch-popup .wrap").slideDown();
            $(".switch-popup").addClass("showSwitch");
        }, 320)
    });
    $(".fold .trigger").hammer().on('tap', function() {
            $(this).toggleClass('active');
            $(this).siblings('.list-content').slideToggle("fast");
        })
        //page product---------------
    $(".switch-content .switch-popup li").hammer().on('tap', function() {
        $(this).addClass("active").siblings("li").removeClass("active");
    })
    $(".menuMain dt").hammer().on('tap', function() {
        $(this).siblings("dd").slideToggle(300);
        $(this).toggleClass('active');
    })
    $("#line").hammer().on('tap', function() {
        $(this).parents('header').toggleClass("active");
        $(".menuMain").slideToggle();
        $("body,html").toggleClass('hidden');
        if ($(".menuMain").is(':hidden')) {} else {
            $(".menuMain dt").removeClass('active');
        }
        $(".menuMain dd").slideUp(300);
        setTimeout(function() {
            $(".menuMain").toggleClass("showMain");
        }, 300);
    })
    $("#search").hammer().on("tap", function() {
        $('.searchMain').on('touchmove', function(e) { e.preventDefault(); }, false);
        $(".searchMain").slideToggle();
        setTimeout(function() {
            $(".searchMain").toggleClass("showSearch");
        }, 300);
    })

    $("#closeMenu").hammer().on("tap", function() {
        console.log("aaaa");
        $(".searchMain").slideUp().removeClass('showSearch');
    })
    $(".menuMain .language a").hammer().on("tap", function() {
        $(this).addClass("active").siblings("a").removeClass('active');
    })
    var p = 0,
        t = 0;
    $(window).scroll(function() {
        p = $(this).scrollTop();
        if ($(window).scrollTop() > 60) {
            $(".topbar").addClass("active");
            $('#backTop').fadeIn();
            if (t <= p) { $(".topbar").addClass("up").removeClass('down'); } else {
                $(".topbar").addClass("down").removeClass('up');
            }
            setTimeout(function() { t = p; }, 0);
        } else {
            $(".topbar").removeClass("active up down");
            $('#backTop').fadeOut();
        }
    });
    $('#backTop').hammer().on('tap', function() { $('body,html').animate({ scrollTop: 0 }, 500); })

})
$(".header .menu li").mouseenter(function() {
    var index = $(this).index();
    if (index == 1) {
        $(".slideMenu").slideDown();
        $(".ul1 li").fadeIn(500);
        $(".ul2 li").hide();
        $(".ul3 li").hide();
        $(".ul4 li").hide();
    } else if (index == 2) {
        $(".slideMenu").slideDown();
        $(".ul1 li").hide();
        $(".ul3 li").hide();
        $(".ul4 li").hide();
        $(".ul2 li").fadeIn(500);
    } else {
        $(".slideMenu").slideUp(250);
        $(".slideMenu .slideContent ul li").hide();
    }
});
$(".header").mouseleave(function() {
    $(".slideMenu").slideUp(250);
    $(".slideMenu .slideContent ul li").hide();
});

$(".slideContent ul").mouseenter(function() {
    $(".slideMenu").show();
});

$(".header .searchHeader .searchA").click(function() {
    $("body").addClass("hidd");
    $(".header .bgcolorFormSearch").fadeIn(800);
    $(".header .formSearch").fadeIn(800);
    setTimeout(function() {
        $(".searchContent").addClass("animate");
    }, 200)
});
$(".formSearch .closeBig").click(function() {
    $(".searchContent").removeClass("animate");
    setTimeout(function() {
        $(".header .bgcolorFormSearch").fadeOut(300);
        $("body").removeClass("hidd");
        $(".header .formSearch").fadeOut(400);
    }, 200);
});
$(".i-weixin").mouseenter(function() {
    $(".i-weixin .erCode").fadeIn()
});
$(".i-weixin").mouseleave(function() {
    $(".i-weixin .erCode").fadeOut()
});

function bannerWrap() {
    var windowH = $(window).height();
    $('#banner').css({
        'height': windowH - 60,
    })
    $('#contentBanner').css({
        'height': windowH - 60,
    })
    $('.pagePrice .imgHeight').css({
        'height': windowH - 60,
    })


}
bannerWrap();

$(document).ready(function() {
    $(window).resize(function() {
        bannerWrap();
    })
});

// footer--------------------
function swiperCode() {
    var footerSwiper = new Swiper('.codeSwiper', {
        pagination: {
            el: '.codePagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}
$("#weixin,#weixinCode").hammer().on("tap", function() {
    $(".maBox").fadeIn();
    $('.maBox').on('touchmove', function(e) { e.preventDefault(); }, false);
    swiperCode();
});
$(".maBox .code-close").hammer().on("tap", function() {
    $('.maBox').fadeOut();
});

$(".slidefootr").hammer().on('tap', function() {
    $(this).siblings('dd').slideToggle(300);
    $(this).toggleClass("active");
});