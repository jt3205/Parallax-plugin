$.fn.parallax = function(speed) {
    var parallexEl = $(this);
    $(document).on('scroll', function () {
        var currScrollPos = $(document).scrollTop();
        parallexEl.css('background-position', '0 ' + -currScrollPos/4 + 'px');
    })
};