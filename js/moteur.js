/*jslint browser: true*/
/*global $, jQuery, TweenMax, TimelineMax, Power4, console*/
/* jslint expr: true */
$(function () {
    "use strict";
/* ============================== SLIDE PAGE ========================== */
    
    // sub : H router
    function getH() {return window.location.hash; }
    function setH(h) {window.location.hash = h; }
    
    function tweenreset() {
        TweenMax.to('#about', 0.7, {left: '-100%'});
        TweenMax.to('#works', 0.7, {top: '-100%'});
        TweenMax.to('#contact', 0.7, {left: '100%'});
    }
    // HIGHLY EXPERIMENTAL
//    function toAbout() {
//        tweenreset();
//        TweenMax.to('#about', 0.7, {left: 0});
//    };
    function toWorks() {
        TweenMax.to('#works', 0.7, {top: 0});
        $('#menu>li').css('color', 'white');
        $('#hamburger-button>span').css('background-color', 'white');
        $('.navbar').css('color', 'white');
        $('.navbar').css('background-color', '#282a29');
        $('.navbar>ul>li').css('border-bottom', '1px solid #fff');
    }

    function toView(route) {
        switch (route) {
        case '#works':
            setH(route);
            toWorks();
            break;
        default:
            tweenreset();
            setH('');
        }
    }
    window.addEventListener("hashchange", console.log('test'));
    $("#works-button, #burger-works").on('click', function () {
        if ($('#works').offset().top < 0) {
            tweenreset();
            toView('#works');
//            toWorks();
//            TweenMax.to('#works', 0.7, {top: 0});
//            TweenMax.to('#about', 0.7, {left: '-100%'});
//            TweenMax.to('#contact', 0.7, {left: '100%'});
//            $('#menu>li').css('color', 'white');
//            $('#hamburger-button>span').css('background-color', 'white');
//            $('.navbar').css('color', 'white');
//            $('.navbar').css('background-color', '#282a29');
//            $('.navbar>ul>li').css('border-bottom', '1px solid #fff');
        } else {
            //$('#works').offset().top > 0;
//            TweenMax.to('#works', 0.7, {top: '-100%'});
            toView('home');
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

    function toAbout() {
        tweenreset();
        TweenMax.to('#about', 0.7, {left: 0});
    }
    $('#name-button').on('click', function () {
        tweenreset();
        $('#menu>li').css('color', '#40ffbf');
        $('.navbar').css('color', '#40ffbf');
        $('#hamburger-button>span').css('background-color', '#40ffbf');
        $('.navbar').css('background-color', 'white');
        $('.navbar>ul>li').css('border-bottom', '1px solid #282a29');
    });
    
 /* =========================================== GO BACK BUTTON ========================= */
    $('#goback').on('click', function () {
        window.open('index.html#works', '_self');
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

   
/* ============================= BURGER ================================ */
    
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
    
/* ======================================= KEYDOWN =============================== */
    var show = ['Hello', 'there', '!', '<br>', "I am", '<a href="images/CV-CindyCastano.pdf" target="_blank" style="color:#40ffbf">Cindy</a>', 'Castano,', '<br>', 'a', "graphic", '&', "web", "designer", 'based', 'in', 'Paris.', "I'm", 'passionate', 'about', 'print,', "design,", 'and', 'digital.', 'I', 'like', 'to', "mix", 'both', 'to', 'create', 'solutions', 'that', 'add', 'value.', '<br>', "Let's", 'get', 'in', 'touch', 'for', 'any', 'project', 'inquiries', '<br>', '>> just', 'drop', 'me a', '<a href="mailto:castano.cindy1@gmail.com" style="color:#40ffbf"> line</a>', '.'], i = 0, updateHey = function () {
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
    
/* ================================= PARALAX ===========================

    $(window).scroll(function () {
        $('.project1').css({'right': function (index, value) {return 199 + $(window).scrollTop() * 0.7; }});
        $('.project2').css({'top': function (index, value) {return 50 - $(window).scrollTop() * 0.4; }});
        $('.project3').css({'top': function (index, value) {return 50 - $(window).scrollTop() * 0.5; }});
        $('.project4').css({'top': function (index, value) {return 50 - $(window).scrollTop() * 0.5; }});
    });
    
    
    
    
    ===== */
    
    
    
 
    toView(getH());
    
    
    
});
