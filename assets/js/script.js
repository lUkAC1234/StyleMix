/* Scripts for Header */

$(document).ready(function () {
    $('.header-search-icon').click(function () {
        $('.header-search-modal').fadeIn();
    });

    $('.header-search-modal').click(function (e) {
        if (!$(e.target).closest('.header-search').length) {
            $(this).fadeOut();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerCheckbox = document.getElementById('burger-checkbox');
    const headerLinksContainer = document.querySelector('.header-links-container');

    burgerCheckbox.addEventListener('change', function () {
        headerLinksContainer.classList.toggle('active', burgerCheckbox.checked);
    });
});
/* Header Scripts Ended */

/* Content Scripts Started */

(function ($) {
    "use strict";
    var mainCarousel = $(".main-carousel-wrapper").owlCarousel({
        items: 1,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa-solid fa-arrow-left carouselLeft"></i>',
            '<i class="fa-solid fa-arrow-right carouselRight"></i>'
        ],
        responsive: {
            0: { items: 1 },
        },
    });

    mainCarousel.on("translate.owl.carousel", function (event) {
        var activeIndex = event.item.index;
        $(".main-carousel-count-column").removeClass("active");
        $(".main-carousel-count-column:eq(" + activeIndex + ")").addClass("active");
    });
    $(".main-carousel-count-column:eq(" + mainCarousel.find(".owl-item.active").index() + ")").addClass("active");
})(jQuery);





/* Content Scripts Ended */