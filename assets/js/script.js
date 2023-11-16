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
    
    $(".testominals-replies-container").owlCarousel({
        items: 1,
        center: true,
        nav: true,
        navText: [
            '<i class="fa-solid fa-arrow-left testominalUp"></i>',
            '<i class="fa-solid fa-arrow-right testominalDown"></i>'
        ],
        responsive: {
            0: { items: 1 },
        },
    });
})(jQuery);

/* Photo Gallery Code Started */
document.addEventListener('DOMContentLoaded', function () {
    const textColumns = document.querySelectorAll('.photo-gallery-text-column');
    const galleryColumn = document.querySelector('.photo-gallery-column');
    const firstImage = textColumns[0].dataset.image;

    // Set default background image
    galleryColumn.style.backgroundImage = `url(${firstImage})`;

    textColumns.forEach((textColumn) => {
        textColumn.addEventListener('mouseover', function () {
            const backgroundImage = textColumn.dataset.image;
            galleryColumn.style.backgroundImage = `url(${backgroundImage})`;
        });
    });
});
/* Photo Gallery Code Ended */




/* Content Scripts Ended */