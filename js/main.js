$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 60) {
            $(".main-nav").addClass("sticky");
        } else {
            $(".main-nav").removeClass("sticky");
        }
    });

    $("#goTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#goTop").addClass("active");
        } else {
            $("#goTop").removeClass("active");
            return false;
        }
    }).scroll();
});

$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

$(document).ready(function() {
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.topnav').outerHeight();
    
    $(window).scroll(function() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.topnav').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.topnav').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    });

    // Hide navigation on link click
    $('.topnav a').on('click', function() {
        $('.topnav').addClass('nav-up');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Show notification message
        var alertBox = document.getElementById("alert");
        alertBox.classList.add("show");
        alertBox.textContent = "Message Sent!";

        // Hide notification after 3 seconds
        setTimeout(function() {
            alertBox.classList.remove("show");
        }, 3000);

        // Optional: Reset form fields after submission
        this.reset();
    });
});