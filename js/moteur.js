/*jslint browser: true*/
/*global $, jQuery, TweenMax, TimelineMax, Power4*/
/* jslint expr: true */
$(function () {
    "use strict";
/********* 
SLIDE PAGE 
*********/
    $("#works-button, #burger-works").on('click', function () {
        if ($('#works').offset().top < 0) {
            TweenMax.to('#works', 0.7, {top: 0});
            TweenMax.to('#about', 0.7, {left: '-100%'});
            TweenMax.to('#contact', 0.7, {left: '100%'});
            $('#menu>li').css('color', 'white');
            $('#hamburger-button>span').css('background-color', 'white');
            $('.navbar').css('color', 'white');
            $('.navbar').css('background-color', '#282a29');
            $('.navbar>ul>li').css('border-bottom', '1px solid #fff');
        } else {
            //$('#works').offset().top > 0;
            TweenMax.to('#works', 0.7, {top: '-100%'});
            $('#menu>li').css('color', '#40ffbf');
            $('.navbar').css('color', '#40ffbf');
            $('#hamburger-button>span').css('background-color', '#40ffbf');
            $('.navbar').css('background-color', 'white');
            $('.navbar>ul>li').css('border-bottom', '1px solid #282a29');
        }
    });
    $("#about-button,#burger-about").on('click', function () {
        if ($('#about').offset().left < 0) {
            TweenMax.to('#about', 0.7, {left: 0});
            TweenMax.to('#works', 0.7, {top: '-100%'});
            TweenMax.to('#contact', 0.7, {left: '100%'});
            $('#menu>li').css('color', '#40ffbf');
            $('.navbar').css('color', '#40ffbf');
            $('#hamburger-button>span').css('background-color', '#40ffbf');
            $('.navbar').css('background-color', 'white');
            $('.navbar>ul>li').css('border-bottom', '1px solid #282a29');
        } else {
            //$('#about').offset().left > 0;
            TweenMax.to('#about', 0.7, {left: '-100%'});
            $('#menu>li').css('color', '#40ffbf');
        }
    });
    $("#contact-button,#burger-contact").on('click', function () {
        if ($('#contact').offset().left > 0) {
            TweenMax.to('#contact', 0.7, {left : '0%'});
            TweenMax.to('#works', 0.7, {top: '-100%'});
            TweenMax.to('#about', 0.7, {left: '-100%'});
            $('#menu>li').css('color', '#fff');
        } else {
           // $('#contact').offset().left < 0;
            TweenMax.to('#contact', 0.7, {left: '100%'});
            $('#menu>li').css('color', '#40ffbf');
        }
    });
    function tweenreset() {
        TweenMax.to('#about', 0.7, {left: '-100%'});
        TweenMax.to('#works', 0.7, {top: '-100%'});
        TweenMax.to('#contact', 0.7, {left: '100%'});
    }
    $('#name-button').on('click', function () {
        tweenreset();
        $('#menu>li').css('color', '#40ffbf');
        $('.navbar').css('color', '#40ffbf');
        $('#hamburger-button>span').css('background-color', '#40ffbf');
        $('.navbar').css('background-color', 'white');
        $('.navbar>ul>li').css('border-bottom', '1px solid #282a29');
    });
    
 /*************
 GO BACK BUTTON 
 *************/
    $('#goback').on('click', function () {
        window.open('/index.html#works', '_self');
    });
   /* var hash = $(location).attr('hash');
    if ($hash !=n'')
        {
            $('html, body').animate({top: $(hash).offset().top}, speed);
        }
    var window = $(window),
    header = $('header'),
    windowHeight = $window.height()
    $window.scroll(function ()
    {
        if($window.scrollTop () > $windowHeight)
        {
            $header.addClass('affix');
        }
        else
        {
            $header.removeClass('affix');
        }
    });*/

   
/****** 
BURGER 
*****/
    
    function animateHamburger() {
        $('#hamburger-button').toggleClass('open');
    }
    function slideMenu() {
        $('.navbar').toggleClass('open');
    }
    $('#hamburger-button').click(function () {
        animateHamburger();
        slideMenu();
    });
    
/****** 
KEYDOWN 
*****/
    var show = ['Hey', 'there', '!', '<br>', "I'm", "Cindy", 'Castano,', '<br>', 'print', "graphic", "and", 'front', 'end', '/', "web", "designer", 'based', 'in', 'Paris', '.', 'Powered', 'by', 'creativity', "I'll", 'be', 'glad', 'to', 'help', 'you,', "let's", 'work', 'together', '.'], i = 0, updateHey = function () {
        if (i < show.length) {
            document.getElementById('hey').innerHTML += show[i] + ' ';
            i += 1;
        }
    };
    
    $(document).bind('keydown', function (event) {
        $('.placeholder').css('display', 'none');
        $('#hey').css('display', 'block');
        updateHey();
    });
 
/****** 
GLITCH 
*****/
    
    var tl = new TimelineMax({repeat: -1, repeatDelay: 2});

    tl.to('.glitch', 0.1, {skewX: 70, ease: Power4.easeInOut})
        .to('.glitch', 0.04, {skewX: 0, ease: Power4.easeInOut})
        .to('.glitch', 0.04, {opacity: 0})
        .to('.glitch', 0.04, {opacity: 1})
        .to('.glitch', 0.04, {x: -20})
        .to('.glitch', 0.04, {x: 0})
        .add("split", 0)
        .to('.top', 0.5, {x: -60, ease: Power4.easeInOut}, 'split')
        .to('.bottom', 0.5, {x: 60, ease: Power4.easeInOut}, 'split')
        .to('.glitch', 0.08, { className: '+=redShadow'}, 'split')

        .to('#txt', 0, { scale: 1.1}, 'split')
        .to('#txt', 0, { scale: 1}, "+=0.02")

        .to('.glitch', 0.1, { className: '-=redShadow'}, "+=0.09")
        .to('.glitch', 0.05, { className: '+=greenShadow'}, 'split')
        .to('.glitch', 0.05, { className: '-=greenShadow'}, "+=0.01")

        .to('.top', 0.7, {x: 0, ease: Power4.easeInOut})
        .to('.bottom', 0.7, {x: 0, ease: Power4.easeInOut})

        .to('.glitch', 0.05, {scaleY: 1.1, ease: Power4.easeInOut})
        .to('.glitch', 0.07, {scaleY: 1, ease: Power4.easeInOut});

/*********** 
SLIDER WORKS 
***********/
    $('#infos').on('click', function () {
        if ($('.headerInfos').is(':hidden')) {
            $('.headerInfos').slideDown('slow');
            $(this).find('#plus').text('-');
        } else {
            $('.headerInfos').slideUp('fast');
            $(this).find('#plus').text('+');
        }
    });
    
    var pos = 0,
        totalSlides = $('#slider-content ul li').length,
        sliderWidth = $('#slider-content').width();
    
 /*********** PAGINATION ************/
      
    function pagination() {
        $('#pagination-wrap ul li').removeClass('active');
        $('#pagination-wrap ul li:eq("pos +")').addClass('active');
    }
         
    $.each($('#slider-content ul li'), function () {
        var li = document.createElement('li');
        $('#pagination-wrap ul').append(li);
	});
	pagination();
 
/************ SLIDE RIGHT *************/
	
    function slideRight() {
        pos += 1;
   
        if (pos === totalSlides) { pos = 0; }
        $('#slider-content ul#slider').animate({'left': -(sliderWidth * pos)}, 300);
        pagination();
    }
    
    $('#slider-content ul#slider').width(sliderWidth * totalSlides);
	$('#next').click(function () {
		slideRight();
	});

/*********** SLIDE LEFT ************/
    
    function slideLeft() {
        pos -= 1;
        if (pos === -1) {pos = totalSlides - 1; }
        $('#slider-content ul#slider').animate({'left': -(sliderWidth * pos)}, 300);
        pagination();
    }
    
    $('#prev').click(function () {
		slideLeft();
	});

/*********** 
CONTACT FORM 
***********/
    function openmail() {
        $('#form').css('display', 'block');
        $('#form').animate({opacity : 1});
    }
    $('#mail').click(function () {
        openmail();
    });
    function closemail() {
        $('#form').css('display', 'none');
        $('#form').animate({opacity : 0});
    }
    $('#close').click(function () {
        closemail();
    });
});