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
    var set = {
        button: '#to-top',
        min: 300,
        fadeIn: 400,
        fadeOut: 400,
        scrollSpeed: 800,
    }
    $(window).scroll(function() {
        var position = $(window).scrollTop();
        if (position > set.min)
            $(set.button).fadeIn(set.fadeIn);
        else
            $(set.button).fadeOut(set.fadeOut);
    });
    $(set.button).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, set.scrollSpeed);
        return false;
    });
skrollr.init({
    easing: {
        //This easing will sure drive you crazy
        wtf: Math.random,
        inverted: function(p) {
            return 1 - p;
        }
    }
});
function myMap() {
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: new google.maps.LatLng(51.5, -0.2),
            zoom: 10,
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
    }