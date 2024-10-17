// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    var $window = $(window),
        $company = $('.companySummary1>p, .companySummary2>p'),
        $header = $('.companySummary1>header, .companySummary2>header');
    function resize() {
        $company.removeClass('company-md company-sm'),
            $header.removeClass('company-head-md company-head-sm');

        if ($window.width() < 768) {
            return $company.addClass('company-sm'),
                $header.addClass('company-head-sm'),
                $header.attr('style', ''),
                $('.companies-s1>header').attr('style', 'font-size: 3rem;');


        }
        else if ($window.width() > 768) {
            return $company.addClass('company-md'),
                $header.addClass('company-head-md'),
                $header.attr('style', 'color: navy; padding-top: 0.5em; font-size: 3vw; text-align: center; text-shadow: 1px 1px 0px white, 2px 2px 4px navy; font - family: "Oxygen", sans - serif; letter-spacing: 7px; text-transform: uppercase; padding - bottom: 20px; ');

        }
    }
    $window.resize(resize).trigger('resize');

    //Footer CSS
    $('footer').addClass('text-light');
    $('footer').attr('style', 'background-color: #222222');
    $('footer').removeClass('border-top');
    $('footer>div').addClass('row').removeClass('g-0');
    $('footer>div>a').addClass('col-md-3 col-sm-6 col-xs-12');
    $('footer>div>a').attr('style', 'text-decoration: none; color: #5a5a5a;');

    $('*company-1:even').attr('style', 'color:black;');


    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (window.location.hash && isChrome) {

        setTimeout(function () {

            var hash = window.location.hash;

            window.location.hash = "";

            window.location.hash = hash;

        }, 300);
    }

    $('.companyBlocks').attr('style', 'background-color: linear-gradient(lightgray, white, gray; background-clip: content-box;')
    $('.companyBlocks').attr('style', 'background:linear-gradient(to right, lightgray, white, gray); opacity: 1; visibility: visible; width:100%; padding: inherit; background-clip: content-box');
    $('.companyBlocks>a').attr('style', 'text-decoration: none;')
    $('.companyBlocks').hover(function () {
        // over
        $(this).animate({ opacity: 0.1 }, 'slow');
    }, function () {
        // out
        $(this).animate({ opacity: 1 }, 'slow');
    }
    );

    //_Layout.cshtml CSS
    //Navbar CSS
    $(".container").addClass("container-fluid gx-0").removeClass("container");
    $('main').removeClass('pb-3');
    $('nav').removeClass('mb-3 bg-white border-bottom navbar-light me-auto').addClass('navbar-dark');
    var navStyle = "background-color: #222222;";
    $('nav').attr('style', navStyle);
    $('.nav-link').removeClass('text-dark');
    $('.nav-link').attr('style', 'color: white;');
    $('.navbar-toggler').addClass('ms-auto');
    if ($(".companySummary1").length != 0) {
        $('#company-header-section').attr('style', 'height: 30vw;')
    }

    $('#fileUpload').change(function () {

        var anchorString = $(this).val().replace(/\.[^/.]+$/, "", '');

        anchorString = anchorString.replace(/C:\\fakepath\\/, '')

        $('#AnchorLink').val(anchorString);
    });


    $('#fileUpload').change(function () {

        var fileName = $(this).val().replace(/\.[^/.]+$/, "", '');

        fileName = fileName.replace(/C:\\fakepath\\/, '')

        $('#imageFilename').val(fileName);
    });
});
