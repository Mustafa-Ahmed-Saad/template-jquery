/*global $, alert, console*/

$(function () {
   'use strict';

   // Trigger Nice Scroll Plugin
   $('body').niceScroll({
      cursorcolor: '#f7600e',
      cursorwidth: 10,
      cursorborderradius: 0,
      cursorborder: '1px solid #f7600e',
      scrollspeed: 85,
   });

   // Change Header Height
   // hight of header when resize and in normal
   $('.header').height($(window).height());
   $(window).resize(function () {
      $('.header').height($(window).height());
   });

   // Scroll To Features
   $('.header .arrow i').click(function () {
      $('html, body').animate(
         {
            scrollTop: $('.features').offset().top,
         },
         1000
      );
   });

   $('.hire').click(function () {
      $('html, body').animate(
         {
            scrollTop: $('.our-team').offset().top,
         },
         1000
      );
   });

   $('.o-work').click(function () {
      $('html, body').animate(
         {
            scrollTop: $('.our-work').offset().top,
         },
         1000
      );
   });

   // Show Hidden Items From Work
   $('.show-more').click(function () {
      $(this).css('display', 'none');
      console.log(this);
      $('.our-work .hidden').fadeIn(1000);
   });

   // Check Testimonials
   var leftArrow = $('.testim .fa-chevron-left'),
      rightArrow = $('.testim .fa-chevron-right');

   function checkClients() {
      if ($('.client:first').hasClass('active')) {
         leftArrow.css('display', 'none');
      } else {
         leftArrow.css('display', 'block');
      }

      if ($('.client:last').hasClass('active')) {
         rightArrow.css('display', 'none');
      } else {
         rightArrow.css('display', 'block');
      }
   }

   checkClients();

   $('.testim i').click(function () {
      if ($(this).hasClass('fa-chevron-right')) {
         $('.testim .active').fadeOut(100, function () {
            $(this).removeClass('active').next('.client').addClass('active').fadeIn();

            checkClients();
         });
      } else {
         $('.testim .active').fadeOut(100, function () {
            $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

            checkClients();
         });
      }
   });
});
