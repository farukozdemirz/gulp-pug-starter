"use strict";

var app = {};
$(function () {
    $(window).on('resize', function () {
        $(".contact-absolute").removeClass("showed")
    });
    if ($(window).width() > 576) {
        $(window).on('scroll', function () {
            $(".contact-absolute").removeClass("showed")
        });
    }

    app.playVideo = function () {
        $(".preview-play-button").on("click", function () {
            $(this).prev().trigger("click")
        })
    }

    app.playVideo();
});
