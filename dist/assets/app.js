"use strict";var app={},app=($(function(){$(window).on("resize",function(){$(".contact-absolute").removeClass("showed")}),700<$(window).width()&&$(window).on("scroll",function(){$(".contact-absolute").removeClass("showed")}),app.playVideo=function(){$(".preview-play-button").on("click",function(){$(this).prev().trigger("click")})},app.playVideo()}),{});$(function(){app.studentsSlider=function(){new Swiper("#student_slider",{initialSlide:1,centeredSlides:!0,breakpoints:{768:{slidesPerView:3.5,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1.1,spaceBetween:10}},pagination:{el:".swiper-pagination-students",clickable:!0},navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"}})},app.detailGallery=function(){new Swiper("#gallery_swiper",{speed:500,initialSlide:1,centeredSlides:!0,breakpoints:{992:{slidesPerView:3,spaceBetween:-40},768:{slidesPerView:2,spaceBetween:-30},640:{slidesPerView:2,spaceBetween:-20},320:{slidesPerView:1,spaceBetween:10}},navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"}})},app.bannerSlider=function(){new Swiper("#banner-slider",{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"}})},app.getInformation=function(){$(".get-information").on("click",function(e){$(".contact-absolute").css({display:"block!important"}),setTimeout(()=>{$(".contact-absolute").addClass("showed")},1)}),$("#getInformation").on("click",function(e){$(".contact-absolute").css("display","block"),setTimeout(()=>{$(".contact-absolute").addClass("showed")},1)}),$(".close-contact-form").on("click",function(){$(".contact-absolute").removeClass("showed"),setTimeout(()=>{$(".contact-absolute").css("display","none")},1)})},app.getInformation(),app.bannerSlider(),app.detailGallery(),app.studentsSlider()});