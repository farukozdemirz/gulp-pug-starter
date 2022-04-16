"use strict";

var app = {};
$(function () {
    app.studentsSlider = function () {
        const swiper = new Swiper('#student_slider', {
            initialSlide: 1,
            centeredSlides: true,
            breakpoints: {
                768: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10
                },
            },
            pagination: {
                el: '.swiper-pagination-students',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            },
        });
    }

    app.detailGallery = function () {
        var swiper = new Swiper("#gallery_swiper", {
            speed: 500,
            initialSlide: 1,
            centeredSlides: true,
            breakpoints: {
                992: {
                    slidesPerView: 3,
                    spaceBetween: -40,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: -30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: -20
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
            },
            navigation: {
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            },
        });
    }

    app.bannerSlider = function () {
        const swiper = new Swiper('#banner-slider', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            },
        });
    }

    app.getInformation = function () {
        $(".get-information").on("click", function (params) {
            $(".contact-absolute").css({
                display: "block!important"
            });
            setTimeout(() => {
                $(".contact-absolute").addClass("showed");
            }, 1);
        })
        $("#getInformation").on("click", function (params) {
            $(".contact-absolute").css("display", "block");
            setTimeout(() => {
                $(".contact-absolute").addClass("showed");
            }, 1);
        })

        $(".close-contact-form").on("click", function () {
            $(".contact-absolute").removeClass("showed");
            setTimeout(() => {
                $(".contact-absolute").css("display", "none");
            }, 1);
        })
    }

    app.getInformation();
    app.bannerSlider();
    app.detailGallery();
    app.studentsSlider();

});
