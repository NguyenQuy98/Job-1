//引入该flexible.min.js
!function(e,t){function n(){var n=l.getBoundingClientRect().width;t=t||540,n>t&&(n=t);var i=100*n/e;r.innerHTML="html{font-size:"+i+"px;}"}var i,d=document,o=window,l=d.documentElement,r=document.createElement("style");if(l.firstElementChild)l.firstElementChild.appendChild(r);else{var a=d.createElement("div");a.appendChild(r),d.write(a.innerHTML),a=null}n(),o.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),o.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===d.readyState?d.body.style.fontSize="16px":d.addEventListener("DOMContentLoaded",function(e){d.body.style.fontSize="16px"},!1)}(750,750);
//1:第一个参数是设计稿的宽度，一般设计稿有640，或者是750，你可以根据实际调整
//2:第二个参数则是设置制作稿的最大宽度，超过750，则以750为最大限制。

$(function(){
	//wow.js初始化
	$(".an").addClass("wow fadeInUp");
	$('.an_img').addClass("wow fadeInLeft");
	$('.an_h1').addClass("wow bounceIn");
	$('.an_p').addClass("wow fadeInRight");
	var wow = new WOW({
		boxClass: 'wow',//需要执行动画的元素的 class
		animateClass: 'animated',//animation.css 动画的 class
		offset: 0,//距离可视区域多少开始执行动画
		mobile: true,//是否在移动设备上执行动画
		live: true//异步加载的内容是否有效
	});
	wow.init();
	/*切换产品弹窗*/
	$(".switch-content .mask").hammer().on('tap',function(){
	   	$(".switch-popup").removeClass("showSwitch");
	  	$(".switch-popup .wrap").slideUp();
	  	setTimeout(function(){
	  		$(".switch-popup").css("display","none");
	  	},300)
	})
	$(".switch-content .switch").hammer().on('tap',function(){
		$('.switch-popup').on('touchmove', function (e) { e.preventDefault(); }, false);//弹出层的背景层阻止默认滑动事件
		setTimeout(function () {
            $(".switch-popup").css("display","block");
            $(".switch-popup .wrap").slideDown();
           /* setTimeout(function() {*/
                $(".switch-popup").addClass("showSwitch");
          /*  },300);*/
        },320)
		//加320秒为了一些浏览器有事件点透的现象
	})
	$(".switch-content .switch-popup li").hammer().on('tap',function(){
		$(this).addClass("active").siblings("li").removeClass("active");
	})
	/*tab切换*/
	$(".submenu").eq(0).show();
	$(".submenu-niu").show();
	$(".submenu-anju").hide();
	$('.menu .line').width($(".menu li").eq(0).width());
	$(".menu li").hammer().on('tap',function(){
		var widthLi = $(this).width();
		var liWidth = $(this).offset().left;
		var margin =$("#container").offset().left;
		$(".submenu").hide().eq($(this).index()).show();
		$(this).addClass("on");
		$('.menu .line').width(widthLi);
		$('.menu .line').stop(false, true).animate({
			'left':liWidth - margin + 'px'
		}, 300);
	})
	/*常见问题tab切换*/
	$(".tab_content").eq(0).show();
	$('.tablist ul .line').width($(".tablist ul li").eq(0).width());
	$(".tablist ul li").hammer().on('tap',function(){
		var widthLi = $(this).width();
		var liWidth = $(this).offset().left;
		var margin =$("#container").offset().left;
		$('.tablist ul .line').width(widthLi);
		$(".tab_content").hide().eq($(this).index()).show();
		$('.tablist ul .line').stop(false, true).animate({
			'left':liWidth - margin + 'px'
		}, 300);
	})
	/*插线板选购贴士tab切换*/
	$(".submenus").eq(0).show();
	$('.menus .line').width($(".menus li").eq(0).width());
	$(".menus li").hammer().on('tap',function(){
		$(this).addClass("active").siblings('li').removeClass("active");
		var widthLi = $(this).width();
		var liWidth = $(this).offset().left;
		var margin =$("#container").offset().left;
		$(".submenus").hide().eq($(this).index()).show();
		$('.menus .line').width(widthLi);
		$('.menus .line').stop(false, true).animate({
			'left':liWidth - margin + 'px'
		}, 300);
	})
	/*系列浏览slideToggle*/
	$(".fold .trigger").hammer().on('tap',function(){
		$(this).toggleClass('active');
		$(this).siblings('.list-content').slideToggle("fast");
	})
	/*导航头部start*/
	$(".menuMain dt").hammer().on('tap',function(){
		$(this).siblings("dd").slideToggle(300);
		$(this).toggleClass('active');
	})
	$("#line").hammer().on('tap',function(){
		$(this).parents('header').toggleClass("active");
		$(".menuMain").slideToggle();
		$("body,html").toggleClass('hidden');
		if($(".menuMain").is(':hidden')){}else {
	        $(".menuMain dt").removeClass('active');
		}
		$(".menuMain dd").slideUp(300);
		setTimeout(function() {
			$(".menuMain").toggleClass("showMain");
		},300);
	})
	$("#search").hammer().on("tap",function(){
		$('.searchMain').on('touchmove', function (e) { e.preventDefault(); }, false);//弹出层的背景层阻止默认滑动事件
		$(".searchMain").slideToggle();
		setTimeout(function() {
			$(".searchMain").toggleClass("showSearch");
		},300);
	})
	$("#close").hammer().on("tap",function(){
		$(".searchMain").slideUp().removeClass('showSearch');
	})
	$(".menuMain .language a").hammer().on("tap",function(){
		$(this).addClass("active").siblings("a").removeClass('active');
	})
	/*导航头部end*/
	/*footer底部start*/
	$(".slidefootr").hammer().on('tap',function(){
		$(this).siblings('dd').slideToggle(300);
		$(this).toggleClass("active");
	})
	/*footer底部end*/
	/*hero页面nav导航出现消失效果*/
	var p = 0, t = 0; 
    $(window).scroll(function() {
        p = $(this).scrollTop();
        if ($(window).scrollTop() > 60) {
            $(".topbar").addClass("active");
            $('#backTop').fadeIn();
            if(t<=p){ 
            	 $(".topbar").addClass("up").removeClass('down');
            }else{
                 $(".topbar").addClass("down").removeClass('up');
            }  
            setTimeout(function(){t = p;},0);  
        }else{
            $(".topbar").removeClass("active up down");
            $('#backTop').fadeOut();
        }
    });
    $('#backTop').hammer().on('tap',function(){
    	$('body,html').animate({scrollTop:0},500);
    })
    /*二维码轮播*/
    function swiperCode(){
	    var mySwiper = new Swiper('#codeSwiper',{
	    	/*loop:true,*/
	    	pagination: {
	    		el: '#codePagination'
	    	},
	    	navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		    }
	    });
    }
    /*微信弹窗*/
    $("#weixin,#weixinCode").hammer().on("tap",function(){
    	$(".maBox").fadeIn();
    	$('.maBox').on('touchmove', function (e) { e.preventDefault(); }, false);//弹出层的背景层阻止默认滑动事件
    	swiperCode();
    })
    $(".maBox .code-close").hammer().on("tap",function(){
    	$('.maBox').fadeOut();
    })
})
