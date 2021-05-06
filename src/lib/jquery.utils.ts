// @ts-nocheck

import $ from 'jquery';

type Unsubscriber = () => void;

// GESTION DE LA NAVBAR

// smooth scroll sur les liens de la navbar
function smoothScrollTriger(): boolean | undefined {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate(
                {
                    scrollTop: target.offset().top - 71
                },
                500
            );

            return false;
        }
    }
}

// reduction de la navbar
async function collapseNavBar(): void {
    $('#navbarResponsive').removeClass('show');
}

// shrink de la navbar après un seuil de scroll
function shrinkNavBar(): void {
    if ($('#mainNav').offset().top > 100) {
        $('#mainNav').addClass('navbar-shrink');
    } else {
        $('#mainNav').removeClass('navbar-shrink');
    }
}

export function jqueryInitNavbar(): Unsubscriber {
    // smooth scroll sur les liens de la navbar
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', smoothScrollTriger);

    // gestion du shrink de la navbar
    shrinkNavBar();
    $(window).on('scroll', shrinkNavBar);

    // fermeture du menu de navigation lors de l'appuie sur un lien scrollable
    $('.js-scroll-trigger').on('click', collapseNavBar);

    // fonction de désabonnement de tout ça
    return (): void => {
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').off('click', smoothScrollTriger);
        $('.js-scroll-trigger').off('click', collapseNavBar);
        $(window).off('scroll', shrinkNavBar);
    };
}

// GESTION DU SCROLL TOP BUTTON

// gestion du bouton scroll to top
function scrollToTop(): void {
    const scrollDistance = $(this).scrollTop();
    if (scrollDistance !== undefined) {
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    }
}

export function jqueryInitScrollToTop(): Unsubscriber {
    // gestion du bouton scroll to top
    $(document).on('scroll', scrollToTop);

    // fonction de désabonnement
    return (): void => {
        console.log('on désabonne');

        $(document).off('scroll', scrollToTop);
    };
}
