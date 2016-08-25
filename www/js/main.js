$(function () {
   $('.reviews__list').slick({
       arrows: false,
       dots: true,
       dotsClass: 'reviews__dots'
   });

    $('.js-scroll-to').on('click', function(e) {
        e.preventDefault();
        $(location.hash).scrollToBlock();
    });

    $.fn.scrollToBlock = function() {
        var target = $(this),
            headerHeight = $('.pseudo_header').height();
        if ( target.length ) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
        return this;
    };
});