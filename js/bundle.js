/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!****************************************!*\
  !*** ./source/js/checking-checkbox.js ***!
  \****************************************/


$(document).ready(function () {
  $('#form__checkbox-id').on('click', function () {
    if ( $(this).is(':checked') ) {
      $('.form__button-submit').attr('disabled', false);
    } else {
      $('.form__button-submit').attr('disabled', true);
    }
  })

  $('#popup__checkbox-id').on('click', function () {
    if ( $(this).is(':checked') ) {
      $('.popup__button-submit').attr('disabled', false);
    } else {
      $('.popup__button-submit').attr('disabled', true);
    }
  })
});

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!**********************************!*\
  !*** ./source/js/footer-menu.js ***!
  \**********************************/


$(document).ready(function () {

  $('.main-nav').click(function (e) {
    const target = e.target;

    if ($(target).is(':not(p, li, a)')
    ) {

      if ($('.main-nav__button').hasClass('main-nav__button--open')) {
        $('.main-nav__button').removeClass('main-nav__button--open').addClass('main-nav__button--close');
        $('.main-nav__first-list').removeClass('main-nav__first-list--open').addClass('main-nav__first-list--close');
        $('.main-nav__second-list').removeClass('main-nav__second-list--open').addClass('main-nav__second-list--close');

      } else if ($('.main-nav__button').hasClass('main-nav__button--close')) {
        $('.main-nav__button').removeClass('main-nav__button--close').addClass('main-nav__button--open');
        $('.main-nav__first-list').removeClass('main-nav__first-list--close').addClass('main-nav__first-list--open');
        $('.main-nav__second-list').removeClass('main-nav__second-list--close').addClass('main-nav__second-list--open');
      }
  }

  });

  $('.contacts').click(function (e) {
    const target = e.target;

    if ($(target).is(':not(p, ul, li, a, .contacts__adress)')
    ) {
      if ($('.contacts__button').hasClass('contacts__button--open')) {
        $('.contacts__button').removeClass('contacts__button--open').addClass('contacts__button--close');
        $('.contacts__body').removeClass('contacts__body--open').addClass('contacts__body--close');
      } else if ($('.contacts__button').hasClass('contacts__button--close')) {
        $('.contacts__button').removeClass('contacts__button--close').addClass('contacts__button--open');
        $('.contacts__body').removeClass('contacts__body--close').addClass('contacts__body--open');
      }
    }
  });
});

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!*********************************!*\
  !*** ./source/js/input-mask.js ***!
  \*********************************/


$(document).ready(function () {
  $('#form-id-tel').mask('+7 (999) 999 99 99');
  $('#popup-id-tel').mask('+7 (999) 999 99 99');
});

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!***************************************!*\
  !*** ./source/js/popup-open-close.js ***!
  \***************************************/


$(document).ready(function () {
  $('.header__callback').click(function () {
    if ($('.popup').hasClass('popup')) {
      $('.popup').removeClass('popup--close').addClass('popup--open');
      $('.body').addClass('body--restricted-travel');
      // setTimeout(()=>$('#popup-id-name').focus(), 100);

      setTimeout(function () {
        $('#popup-id-name').focus();
      }, 100);

      $('.popup__button').click(function () {
        $('.popup').removeClass('popup--open').addClass('popup--close');
        $('.body').removeClass('body--restricted-travel');
      });

      closingClickOverlay();

      $(document).keydown(function (e) {
        if (e.key === 'Escape') {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      });
    }
  });

  var closingClickOverlay = function () {
    $(document).mousedown(function (e) {
      if ($('.popup').hasClass('popup--open')) {
        var popup = $('.popup__wrapper');
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
          $('.popup').removeClass('popup--open').addClass('popup--close');
          $('.body').removeClass('body--restricted-travel');
        }
      }
    });
  };

//  TODO позже подумать как разбить код на отдельные функции и экспортировать, их можно будет использовать отдельно для других проектов.
});

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!*********************************!*\
  !*** ./source/js/save-input.js ***!
  \*********************************/


var inputNamePopup = '';
var inputTelPopup = '';
var inputMessagePopup = '';

$('#popup-id-name').keyup(function () {
  inputNamePopup = $('#popup-id-name').val();
  localStorage.setItem('inputNamePopup', inputNamePopup);
});

$('#popup-id-tel').keyup(function () {
  inputTelPopup = $('#popup-id-tel').val();
  localStorage.setItem('inputTelPopup', inputTelPopup);
});

$('#popup-id-message').keyup(function () {
  inputMessagePopup = $('#popup-id-message').val();
  localStorage.setItem('inputMessagePopup', inputMessagePopup);
});
// todo рассмотреть возможность применения замыкания и выполнения функции по ссылке. На будущее.

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!***************************************!*\
  !*** ./source/js/smooth-scrolling.js ***!
  \***************************************/


$(document).ready(function () {
  $('.promo').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

}();
/******/ })()
;