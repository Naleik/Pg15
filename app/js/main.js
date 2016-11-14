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
