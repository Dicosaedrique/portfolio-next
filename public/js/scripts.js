/*!
 * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
(function ($) {
    ('use strict'); // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate(
                    {
                        scrollTop: target.offset().top - 71
                    },
                    1000,
                    'easeInOutExpo'
                );

                return false;
            }
        }
    });

    // récupération des élémentspour le scoll spy
    const scrollSpies = $('.scroll-spy')
        .map(function () {
            const link = $(this);
            const href = link.attr('href');

            let div = null;

            if (typeof href === 'string') {
                if (href[0] === '/' && href[1] === '#') div = $(`#${href.substring(2)}`);
                else if (href[0] === '#') div = $(`#${href.substring(1)}`);

                // si on a pas trouvé de div correspondante
                if (!('length' in div) || div.length === 0) div = null;
            }

            return {
                link,
                div
            };
        })
        .get()
        .filter((elem) => elem.div !== null);

    const offset = 100;

    function scrollSpy() {
        var currentTop = $(window).scrollTop();
        scrollSpies.forEach(({ link, div }) => {
            var elemTop = div.offset().top - offset;
            var elemBottom = elemTop + div.height() + offset + offset;
            if (currentTop >= elemTop && currentTop <= elemBottom) link.addClass('active');
            else link.removeClass('active');
        });
    }

    // scroll spy (source : https://stackoverflow.com/questions/30348314/how-to-use-scrollspy-without-using-bootstrap)
    $(window).on('scroll', scrollSpy);

    // Scroll to top button appear
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($('#mainNav').offset().top > 100) {
            $('#mainNav').addClass('navbar-shrink');
        } else {
            $('#mainNav').removeClass('navbar-shrink');
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
