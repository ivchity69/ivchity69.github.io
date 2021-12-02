window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$("section").hide();
$("#about").show();

$('.discover-button').click(() => {
    $("section").hide();
    $("#discover").show();
});

$('.navbar-brand').click(() => {
    $("section").hide();
    $("#about").show();
});

$('#beast-image').click(() => {
    $("section").hide();
    $("#beast-section").show();
});

$('#beauty-image').click(() => {
    $("section").hide();
    $("#beauty-section").show();
});