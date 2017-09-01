// map contacts page
if ($('.map-wrap').length) {
    function initMap() {
        var style = [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "weight": "0.5"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "lightness": "-50"
                    },
                    {
                        "saturation": "-50"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "hue": "#009aff"
                    },
                    {
                        "saturation": "25"
                    },
                    {
                        "lightness": "0"
                    },
                    {
                        "visibility": "simplified"
                    },
                    {
                        "gamma": "1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "100"
                    },
                    {
                        "gamma": "2.31"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "lightness": "20"
                    },
                    {
                        "gamma": "1"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": "-100"
                    },
                    {
                        "lightness": "-100"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": "0"
                    },
                    {
                        "saturation": "45"
                    },
                    {
                        "gamma": "4.24"
                    },
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#00ff90"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": "-100"
                    },
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#666666"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "saturation": "-25"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": "50"
                    },
                    {
                        "gamma": ".75"
                    },
                    {
                        "saturation": "100"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
        var mapCenter = {lat: 50.4383641, lng: 30.5112806};
        var position = {lat: 50.4383778, lng: 30.5096391};
        var map = new google.maps.Map(document.getElementById('map-big'), {
            zoom: 17,
            center: mapCenter,
            styles: style
        });
        var marker = new google.maps.Marker({
            position: position,
            map: map
        });

        var markers = [];
        var smallMaps = $('.map-small');

        var mapCenters = [
            {lat: 50.4383641, lng: 30.5162446},
            {lat: 50.4412604, lng: 30.5129326},
            {lat: 50.4383641, lng: 30.5129326}
        ];
        var metroes = [
            {lat: 50.4393348, lng: 30.5162966},
            {lat: 50.448229, lng: 30.5138344},
            {lat: 50.4442356, lng: 30.505887},
        ]
        for (i = 0; i < smallMaps.length; i++) {
            getDest(smallMaps[i], mapCenters[i], metroes[i])
        }

        function getDest(obj, mapCent, metro) {
            this.mapS = obj,
                this.mapCent = mapCent,
                this.metroes = metro,


                this.map = new google.maps.Map(this.mapS, {
                    zoom: 15,
                    center: this.mapCent,
                    styles: style
                });

            var directionsDisplay = new google.maps.DirectionsRenderer({
                map: this.map
            });
            var request = {
                destination: position,
                origin: this.metroes,
                travelMode: 'WALKING'
            };
            this.directionsService = new google.maps.DirectionsService();
            this.directionsService.route(request, function (response, status) {
                if (status == 'OK') {
                    directionsDisplay.setDirections(response);
                }
            });
        }

        $(document).scroll(function () {
            ofTop = $('.map-small-wrap').offset().top;
            docOfTop = $(document).scrollTop();
            console.log(ofTop + '<' + docOfTop);
            if (ofTop < docOfTop + 500) {
                $('.small-wrap').addClass('goRight')
            }
        })


    }

}
var that = [];
$(document).ready(function () {
    $('.moveto').each(function(){
        k = $(this).html()
        n = $(this).parents($(this).attr('data-parent')).find($(this).attr('data-to'));
        console.log('.' + $(this).attr('data-to'))
        $(k).appendTo(n);
        $(this).remove();
    });
    slidesVideo = $('.video-gallery .slider .inner-video-slide');
    slideVideo = '';
    slidesPhoto = $('.photo-gallery .slider .inner-photo-slide');

    function parseSliders(t) {
        slidesLen = slideVideo = '';
        if (t == 1) {
            k = 4;
            slidesLen = slidesVideo;
        } else if (t == 0) {
            k = 6;
            slidesLen = slidesPhoto;
        }
        for (i = 0; i < slidesLen.length; i += k) {
            slideVideo += '<div class="slide"><div class="chocolate">';
            for (j = 0; j < k; j++) {

                //todo доделать проверки
                if (slidesLen[j + i] != undefined) {

                    slideVideo += '<div>';
                    slideVideo += $(slidesLen[j + i]).html();
                    slideVideo += '</div>';
                }else{
                    slideVideo += '<div style="display:none"></div>';
                }

            }
            slideVideo += '</div></div>'
        }
        return slideVideo;
    }

    $('.video-gallery .slider').html(parseSliders(1));
    $('.photo-gallery .slider').html(parseSliders(0));

    //region reviews before slider begins
    slidesRew = $('.slides-wrap .this-html')
    slideRewLeft = '<div class="wrapper-slide"><div class="slider chocolate-slider simple-silk reviewsSlider-image no-nav">';
    slideRewRight = '<div class="wrapper-slide"><div class="slider chocolate-slider simple-silk reviewsSlider-image no-nav">';
    console.log(slidesRew.length)
    for (i = 0; i < slidesRew.length; i++) {
        if (i % 2) {
            slideRewLeft += $(slidesRew[i]).html();
        } else {
            slideRewRight += $(slidesRew[i]).html();
        }
    }
    slideRewLeft += '</div></div>' + slideRewRight + '</div></div>';
    $('.wrapper-slider-rewievs .slides-wrap').html(slideRewLeft)
    //endregion


    // ************************************************************** reviews slider

    $('.reviewsSlider').each(function () {
        var that = $(this);
        that.find('.inner').each(function (index) {
            if (index % 2 == 0) {
                that.append('<div class="slide"></div>');
            }
            $(this).appendTo(that.find('.slide:last-child'));

        });
    });

    // ************************************************************** basic slider

    function linesBlock() {
        w = window.innerWidth;
        toLeft = (w - 1920) / 2;
        $('.vertical-wrap').css({left: toLeft + 'px'})
    }

    linesBlock();
    window.onresize = function () {
        linesBlock()
    }

    $('.slider').each(function (index) {
        that[index] = $(this);
        slidesShow = 1
        $(this).hasClass('not-fade-slider') == true ? fadeSlide = false : fadeSlide = true
        $(this).hasClass('rewievs-text') == true ? asNavForSlider = '.reviewsSlider-image' : asNavForSlider = null
        $(this).hasClass('no-nav') == true ? navSlide = false : navSlide = true;
        $(this).hasClass('nav-for') == true ? asNavForSlider = $(this).siblings('.nav-from') : asNavForSlider = null
        $(this).attr('data-slides') == undefined ? slidesShow = 1 : slidesShow = +$(this).attr('data-slides');
        $(this).hasClass('centerSlide') == true ? centerSlide = true : centerSlide = false
        $(this).hasClass('centerSlide') == true ? centerPad = '0px' : centerPad = '50px'
        that[index].slick({
            slidesToShow: slidesShow,
            centerMode: centerSlide,
            centerPadding: centerPad,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: fadeSlide,
            arrows: navSlide,
            dots: navSlide,
            asNavFor: asNavForSlider,
            prevArrow: "<i class='icon-arrow-left slider-prev'></i>",
            nextArrow: "<i class='icon-arrow-right slider-next'></i>"
        });

        if (that[index].hasClass('customPagin')) {
            if (that[index].hasClass('with-container')) {
                that[index].append('<div class="container"><div class="slider-nav"></div></div>');
                that[index].find('.slider-nav').prepend(that[index].find('.slider-next'));
                that[index].find('.slider-nav').prepend(that[index].find('.slick-dots'));
                that[index].find('.slider-nav').prepend(that[index].find('.slider-prev'));
            } else if (that[index].hasClass('pagin-custom-place')) {
                that[index].parent().find('.custom-place').append('<div class="slider-nav"></div>');
                that[index].parent().find('.slider-nav').prepend(that[index].find('.slider-next'));
                that[index].parent().find('.slider-nav').prepend(that[index].find('.slick-dots'));
                that[index].parent().find('.slider-nav').prepend(that[index].find('.slider-prev'));
            } else {
                that[index].append('<div class="slider-nav"></div>');
                that[index].find('.slider-nav').prepend(that[index].find('.slider-next'));
                that[index].find('.slider-nav').prepend(that[index].find('.slick-dots'));
                that[index].find('.slider-nav').prepend(that[index].find('.slider-prev'));
            }


            that[index].on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var activeDot = that[index].find('.slider-nav .slick-dots li.slick-active');
                if (nextSlide > currentSlide) {
                    activeDot.addClass('move-right-last');
                    that[index].find('.slick-dots li').eq(nextSlide).addClass('move-right-next');
                    setTimeout(function () {
                        activeDot.removeClass('move-right-last');
                        that[index].find('.slick-dots li').eq(nextSlide).removeClass('move-right-next');
                    }, 700);
                } else if (nextSlide < currentSlide) {
                    activeDot.addClass('move-left-last');
                    that[index].find('.slick-dots li').eq(nextSlide).addClass('move-left-next');
                    setTimeout(function () {
                        activeDot.removeClass('move-left-last');
                        that[index].find('.slick-dots li').eq(nextSlide).removeClass('move-left-next');
                    }, 700);
                }
            });
        }


    });
    if ($('.index').length) {
        that[0].slick('slickPause');
    }


    // ************************************************************** header fixed on scroll

    var scrollPos = $(window).scrollTop();

    // if (scrollPos > 150){
    if (scrollPos > 0) {
        $('header').addClass('fixed');
        $('.js-menu').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
        $('.js-menu').removeClass('fixed');
    }

    var mouseOn = true;

    $(window).on('scroll', function (e) {
        var scrollPos = $(window).scrollTop();

        if (scrollPos > 70) {
            $('header').addClass('fixed');
            $('.js-menu').addClass('fixed');
            removeMouse();
        } else {
            $('header').removeClass('fixed');
            $('.js-menu').removeClass('fixed');
        }
        //do blocks visible
        visibleBlocks(scrollPos);
    });

    // *************************************************************** hide mouse
    function removeMouse() {
        if (mouseOn) {
            $('.mouse-scroll').fadeOut(500);
            $('.section1 .slider .slider-nav').css('bottom', '2%');
        }

    }

    // *************************************************************** do visible blocks
    function visibleBlocks(top) {
        if ($('.index').length && $('.mCSB_container').length) {
            var block = $('.section4 .mCSB_container');
            var blocks = [$('.section4 .mCSB_container'), $('.section7 .mCSB_container')];

            $(blocks).each(function () {
                if (top > $(this).offset().top - $(window).height() / 3 * 2.5) {
                    $(this).addClass('visible');
                }
            })
        }


    }

    // ************************************************************** all scrolls init
    if ($('.scroll').length && !$('.scroll').hasClass('no-bar')) {
        $('.scroll').each(function () {
            $(this).mCustomScrollbar({
                theme: 'rounded-dark',
                scrollInertia: 100,
                mouseWheel: {scrollAmount: 100}
            });
        });
    }


    // ************************************************************** news shaffle elements position for unpopular news

    $('.news-section .news .article').each(function () {
        $(this).append($(this).find('.date'));
        $(this).find('.main-image').append($(this).find('.text'));
        $(this).find('.main-image').append($(this).find('.read-more'));
    });

    // $('.slider-news').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // autoplay: true,
    //     // autoplaySpeed: 5000,
    //     fade: false,
    //     dots: true,
    //     prevArrow: $('.news-prev'),
    //     nextArrow:$('.news-next') 

    // })
});


$(window).on('load', function () {

    // ************************************************************** mainpage video


    if ($('.index').length && !$('.index').hasClass('no-index')) {

        that[0].slick('slickPlay');
    }
    // ************************************************************** events show/hide

    $('.events .block .top').click(function () {
        $(this).closest('.block').toggleClass('active');
        $(this).siblings('.text').toggle(300);
    });

    $('.sub-list').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('.list-zno-ul-none').hide(200);
        } else {
            var deleted = $('.sub-list').parent().find('.active');
            deleted.find('.list-zno-ul-none').hide(200);
            deleted.removeClass('active');

            $(this).addClass('active');
            $(this).find('.list-zno-ul-none').show(200);
        }
    });

    // ************************************************************** events scroll show/hide

    $('.events .scroll').hover(function () {
        $(this).find('.mCSB_dragger').css('opacity', '1');
        $(this).closest('.events').siblings('.announcements').find('.mCSB_dragger').css('opacity', '0');
    }, function () {
        $(this).find('.mCSB_dragger').css('opacity', '0');
        $(this).closest('.events').siblings('.announcements').find('.mCSB_dragger').css('opacity', '1');
    });

    // ************************************************************** news scroll show/hide

    $('.news-section .news .scroll').hover(function () {
        $(this).find('.mCSB_dragger').css('opacity', '1');
        $(this).closest('.news').siblings('.important-news').find('.mCSB_dragger').css('opacity', '0');
    }, function () {
        $(this).find('.mCSB_dragger').css('opacity', '0');
        $(this).closest('.news').siblings('.important-news').find('.mCSB_dragger').css('opacity', '1');
    });

    // ************************************************************** wave slider

    function waveSlider() {
        var that = $('.wave-slider .slider');
        var clouds = that.siblings('.clouds');
        var textSlider = that.siblings('.text-slider');
        var numberSlider = that.closest('section').find('.numbers-slider');
        that.slick('setOption', {speed: 1700, asNavFor: '.sync-wave-slider'});
        that.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            clouds.find('.cloud.active').removeClass('active').siblings('.cloud').addClass('active');
        });

        that.find('img').css('width', that.width());

        textSlider.slick({
            speed: 1700,
            asNavFor: '.sync-wave-slider',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false
        });

        numberSlider.slick({
            speed: 1700,
            asNavFor: '.sync-wave-slider',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            swipe: false
        });
    }

    waveSlider();

    // ************************************************************** mainpage caterpillar

    function caterpillar() {

        ifMobile = window.matchMedia("(max-width: 1024px)").matches
        var maxHeight = 0;

        var caterpillar = $('.caterpillar');
        var catBlock = $('.caterpillar').find('.block');
        // 
        // var headOffTop = $('.section2 h2').offset().top;
        // var caterTop = caterpillar.offset().top;
        // var diff = caterTop - headOffTop;
        // 

        catBlock.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });

        catBlock.hover(function () {
            if (ifMobile) {
                return
            }
            $(this).css({
                height: (maxHeight + 80) + 'px' //,
                // transform: 'translateY(-80px)'
            })
        }, function () {
            $(this).css({
                height: maxHeight + 'px' //,
                // transform: 'translateY(0)'
            })
        })

        catBlock.css('height', maxHeight);
        catBlock.hover(function () {
            if (ifMobile) {
                return
            }
            caterpillar.addClass('moving');
        }, function () {
            caterpillar.removeClass('moving');
        });
    }

    caterpillar();

    // ************************************************************** chocolate slider

    function chocolateSlider() {
        $('.chocolate-slider').each(function () {

            var that = $(this);

            if (that.hasClass('simple-silk') == false) {

                that.slick('setOption', {speed: 1300});
                that.find('.slick-slide').each(function () {
                    $(this).find('.chocolate > div').each(function () {
                        $(this).find('.inner').prepend('<div class="silk1"></div><div class="silk2"></div>');
                    });
                });
            } else {

                that.slick('setOption', {speed: 1000});
                that.find('.slick-slide').each(function () {
                    $(this).prepend('<div class="silk1"></div><div class="silk2"></div>');
                });
            }

            that.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

                if (nextSlide > currentSlide) {
                    that.find('.slick-slide').eq(currentSlide).addClass('goFromRight').siblings('.slick-slide').removeClass('goFromRight goFromLeft');
                    that.find('.slick-slide').eq(nextSlide).addClass('goRight').siblings('.slick-slide').removeClass('goRight goLeft');
                } else if (nextSlide < currentSlide) {
                    that.find('.slick-slide').eq(currentSlide).addClass('goFromLeft').siblings('.slick-slide').removeClass('goFromRight goFromLeft');
                    that.find('.slick-slide').eq(nextSlide).addClass('goLeft').siblings('.slick-slide').removeClass('goRight goLeft');
                }

            });
            if (that.siblings('.chocolate-popup').length > 0) {

                var popupBlock = that.siblings('.chocolate-popup');
                var popupSlider = popupBlock.find('.chocolate-popup-slider');

                that.find('.slide .inner > img').click(function () {
                    $(this).siblings('.images').find('img').each(function () {
                        popupSlider.append('<div class="slide"><div class="vertical-middle"></div></div>');
                        $(this).clone().attr('src', $(this).data('src')).appendTo(popupSlider.find('.slide:last-child .vertical-middle'));
                    });
                    that.find('.slick-active').removeClass('allShow').addClass('allHide');
                    that.find('.slider-nav').fadeOut(600);
                    setTimeout(function () {
                        popupBlock.fadeIn(400, function () {
                            popupSlider.on('init', function () {
                                popupBlock.addClass('allShow');
                                popupSlider.find('.slide').css('height', popupSlider.height());
                            });
                            popupSlider.on('setPosition', function () {
                                popupSlider.find('.slide').css('height', popupSlider.height());
                            });
                            popupSlider.slick({
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                                fade: true,
                                prevArrow: "<i class='icon-arrow-left slider-prev'></i>",
                                nextArrow: "<i class='icon-arrow-right slider-next'></i>"
                            });
                        });
                    }, 600);

                });

                popupBlock.find('.close').click(function () {
                    popupBlock.removeClass('allShow').addClass('allHide');
                    setTimeout(function () {
                        $('.chocolate-popup').fadeOut('400', function () {
                            popupSlider.slick('unslick');
                            popupSlider.html('');
                            that.find('.slick-active').removeClass('allHide').addClass('allShow');
                        });
                        setTimeout(function () {
                            popupBlock.removeClass('allHide');
                            that.find('.slider-nav').fadeIn(400);
                        }, 1000);
                    }, 400);
                });

                that.find('.slick-active .chocolate > div').eq(4).hover(function () {
                    that.find('.slick-dots').css('opacity', '0');
                }, function () {
                    that.find('.slick-dots').css('opacity', '1');
                });
            }
        });
    }

    chocolateSlider();

    // ************************************************************** mouse move parallax

    // $('.parallax-parent').mousemove(function(e) {
    //     /* Work out mouse position */
    //     var coef = 1;
    //     var offset = $(this).offset();
    //     var xPos = e.pageX - offset.left;
    //     var yPos = e.pageY - offset.top;

    //     /* Get percentage positions */
    //     var mouseXPercent = Math.round(xPos / $(this).width() * 100);
    //     var mouseYPercent = Math.round(yPos / $(this).height() * 100);

    //     var myX = -(mouseXPercent - 50)*coef;
    //        var myY = -(mouseYPercent - 50)*coef;
    //        $(this).find('.mouse-parallax').css('transform', 'translate('+myX+'px, '+myY+'px)');
    // });

    // ************************************************************** lines subtitle show

    var scrollPos = $(window).scrollTop();
    $('.lines-subtitle').each(function () {

        if (scrollPos > $(this).closest('section').offset().top + 100) {
            $(this).find('.cutter').addClass('active');
        }
        // else {
        //  $(this).find('.cutter').removeClass('active');
        // }

    });

    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop();
        $('.lines-subtitle').each(function () {
            if (scrollPos > $(this).offset().top - $(window).height() + 200) {
                $(this).find('.cutter').addClass('active');
            }
            // else {
            //  $(this).find('.cutter').removeClass('active');
            // }
        });
    });

    // ************************************************************** fall-down show/hide

    $('.fall-down span').click(function () {
        if (!$(this).hasClass('active')) {
            $('.overlay').fadeIn(400);
            $(this).addClass('active');
            $(this).siblings('ul').addClass('active').fadeIn('400');
        } else {
            $('.overlay').fadeOut(400);
            $(this).removeClass('active');
            $(this).siblings('ul').removeClass('active').fadeOut('400');
        }
    });

    $('.fall-down li a').click(function (event) {
        event.preventDefault(event);
        $('.overlay').fadeOut(400);
        $('.fall-down span').removeClass('active');
        $('.fall-down ul').removeClass('active').fadeOut('400');
    });

    $('.overlay').click(function () {
        $('.overlay').fadeOut(400);
        $('.fall-down span').removeClass('active');
        $('.fall-down ul').removeClass('active').fadeOut('400');
    });

    // ************************************************************** news icon show on scroll

    // $('.important-news .scroll').mCustomScrollbar('destroy');
    // var minusTop = $('.important-news').offset().top;
    // var importantNews = $('.important-news');
    // var newsIconContainer = $('.news-icon div');
    // $('.important-news .scroll').mCustomScrollbar({
    //     theme: 'rounded-dark',
    //     callbacks: {
    //         whileScrolling: function() {
    //             importantNews.find('.article').each(function() {
    //                 // console.log(minusTop - $(this).offset().top);
    //                 if (minusTop - $(this).offset().top > -150) {
    //                     var that = $(this);
    //                     newsIconContainer.each(function() {
    //                         $(this).find('span').html('<img src="' + that.data('icon') + '">');
    //                     });
    //                     $('.news-icon').addClass('show');
    //                 }
    //                 // } else {
    //                 //  newsIconContainer.each(function() {
    //                 //      $(this).find('span').html('');
    //                 //  });
    //                 //  $('.news-icon').removeClass('show');
    //                 // }
    //             });
    //         }
    //     }
    // });

    // ************************************************************** video gallery

    $('.video-gallery').each(function () {
        var that = $(this);
        that.find('.chocolate > div .controls .play').click(function () {
            $(this).parents('.inner').find('.video span').fadeOut('400', function () {
                $(this).siblings('video')[0].play();
            });
        });
    });
    $('.toggle').focusin(function () {
        $(this).addClass('active');
        $('.search').addClass('move');
    });

    $('.toggle').focusout(function () {
        $(this).removeClass('active').val("");
        $('.search').removeClass('move');
    });
});
