    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 800);
                    return false;
                }
            }
        });
    });

    function myMap() {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(48.858025, 2.346336),
            zoom: 17,
            styles: [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#193341"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2c5a71"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#29768a"
                }, {
                    "lightness": -37
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#406d80"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#406d80"
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#3e606f"
                }, {
                    "weight": 2
                }, {
                    "gamma": 0.84
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "weight": 0.6
                }, {
                    "color": "#1a3541"
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2c5a71"
                }]
            }]
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(48.858025, 2.346336),
                    map: map,
                    title: 'Snazzy!'
                });

    };

    $('.intro .button').click(function() {
        $(this).addClass("out");
        $(".firstImg").addClass("out1");
        $(".secondImg").addClass("out2");
        $("body").css("overflow-y", "scroll");
        setTimeout(function() {
            $(".firstImg").css('display', 'none');
            $(".secondImg").css('display', 'none');
        }, 1500);
    });

        
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("body").css("overflow-y", "scroll");
        $(".intro").css("display", "none");
    };

function topNav() {
        var hamb = $('.list');
        hamb.toggleClass('responsive');
    };


    $('#section4').click(function(){
$(".fadeout").css("opacity","0.5");
$(".fadeout h2").css("display","none");
$(".fadein").css("opacity","1");
$(".fadein div").css("transform","scale(1)");
    });



    