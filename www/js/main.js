$(function () {
   $('.reviews__list').slick({
       arrows: false,
       dots: true,
       dotsClass: 'reviews__dots'
   });

    $('.js-scroll-to').on('click', function(e) {
        e.preventDefault();
        var block = $(this).attr('href');
        $(block).scrollToBlock();
    });

    $.fn.scrollToBlock = function() {
        if ( this.length ) {
            $('html, body').animate({
                scrollTop: this.offset().top
            }, 1000);
        }
        return this;
    };

    $('.js-coming-soon').click(function (e) {
        e.preventDefault();
        alert('Coming soon...');
    })
});