$(document).ready(function() {

    function getIndex (){
        el = $(this);
        if (!el.hasClass('head-menu')) {
            whenHover(el);

        }
    }
    function whenHover(el) {
        if (el.find('ul').length > 0) {
            elHtml = el.find('ul').html();
            elNum = el.find('ul').attr('data-num');
            elText = el.find('span').eq(0).text()


            whenMouseLeave(elNum)

            $('.menu' + elNum)
                .html('<span class="back-menu"><span>← </span>назад</span>' + elHtml)
                .addClass('opened' + elNum);

            $('<li/>').html(elText)
                      .addClass('head-menu')
                      .prependTo('.menu' + elNum);

            $('.back-menu').bind('click', closeMobileMenu)
            $('.all-wrapper').attr('data-left', 1);

            $('.menu' + elNum).find('li').hover(function() {
                el = $(this)
                whenHover(el)
            })
        } else {
            elNum = el.parents('ul').attr('data-num');
            whenMouseLeave(elNum)
        }

    }

    function whenMouseLeave(el) {
        if (el == 4) {
            return
        }
        elNum = el
        var i = 4;
        window.cancelAnimationFrame(removeAnother);

        function removeAnother() {
            if (i < +elNum + 1) {
                window.cancelAnimationFrame(removeAnother);
                return;
            }
            if ($('.menu' + i).hasClass('opened' + i)) {
                $('.menu' + i).addClass('close' + i);
                $('.menu' + i).removeClass('opened' + i);
                $('.all-wrapper').attr('data-left', i - 1);
            }

            setTimeout(function() {
                if ($('.menu' + i).hasClass('close' + i)) {
                    $('.menu' + i).removeClass('close' + i);
                }
                i--;
                window.requestAnimationFrame(removeAnother);
            }, 300)
        }
        removeAnother()
    }

    var $menu = $('.menu');

    $('.menu-toggle').on('click', function() {
        $(this).removeClass('active');
        if (window.matchMedia("(max-width: 1024px)").matches) {
            mediaPlanshet();
        } else if(window.matchMedia("(max-width: 650px)").matches) {
            mediaMobile();
        }else{
            mediaDesktope();
        }
       
        $('.overlay').addClass('active');
        setTimeout(function() {
            $menu.addClass('active');
        }, 500);
    })

    $menu.find('.close-menu').on('click', function() {
        $('.menu-toggle').addClass('active');
         
        if (window.matchMedia("(max-width: 1024px)").matches) {
           $('.menu ul').css({'transform' : 'translate(-100%,0)'})
        } else if(window.matchMedia("(max-width: 650px)").matches) {
            $('.menu ul').css({'transform' : 'translate(-100%,0)'});
        }else{
            $('.all-wrapper').attr('data-left', 1);
        $('.menu ul').css({width : '0wv'})
          
        }

        $('.all-wrapper').attr('data-left', 0);
        $menu.removeClass('active');
        $('.overlay').removeClass('active');
        $menu.find('.opened2').removeClass('opened2');
        $menu.find('.opened3').removeClass('opened3');
        $menu.find('.opened4').removeClass('opened4');

    })

    function mediaDesktope(){
        $('.all-wrapper').attr('data-left', 1);
        $('.menu ul').css({width : '25vw'});
        $('.punkt li').hover(function(){
            el = $(this);
            if (!el.hasClass('head-menu')) {
                whenHover(el);
            }
        });
    }

    function mediaPlanshet(){

        $('.menu ul.start').css({'transform' : 'translate(0%)'});
        $('.punkt li').bind('click', getIndex)
        
    }
    function mediaMobile(){
         $('.menu ul').css({'transform' : 'translate(0px,0px)'});
         $('.punkt li').bind('click', getIndex);
    }

    function closeMobileMenu (){
        k =  $(this).parent('.menu-additional').attr('data-num')
        $(this).parent('.menu-additional').removeClass('opened' + k);
    }
});
