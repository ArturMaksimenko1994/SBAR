
$(document).ready(function () {


  // $("#btn").click(
  //   function () {
  //     sendAjaxForm('result_form', 'ajax_form', 'mail.php');
  //     return false;
  //   }
  // );



  //owl-carousel
  if ($(".owl-carousel").length) {
    $(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      navText: [""],
      autoHeight: true,
      items: 1
    });
  }

  //owl-carousel
  if ($(".process__items").length) {
  if ($(window).width() <= 540) {
    $('.process__items_mini').remove()
    $('.process__items').addClass('owl-carousel');
    $('.process__items').addClass('owl-theme');
    $(".process__items").owlCarousel({
      loop: true,
      autoHeight: true,
      nav: true,
      dots: true,
      navText: [""],
      items: 1
    });
  }
  }


  //dashboards schow
  if ($(".examples__item_hiden").length) {
    let c = $(".examples__item_hiden").length;
    x = 0;
    $('.examples__item_hiden:lt(' + x + ')').fadeIn();
    $('.btn-more').click(function (e) {
      e.preventDefault();
      x = (x + 3 <= c) ? x + 3 : c;
      $('.examples__item_hiden:lt(' + x + ')').slideDown(500);
      $('.examples__item_hiden:lt(' + x + ')').show();
    });
  }




  if ($(".join__popup-text").length) {
    $.mask.definitions['h'] = "[A-Fa-f0-9]";
    $(".join__popup-text").mask("#hhhhhh");
  }


  //masked input join
  if ($("#join__popup-telephone").length) {
    $(function () {
      $("#join__popup-telephone").click(function(){
        $(this).setCursorPosition(3);
      }).mask("+7(999) 999-9999");
    });
  }

  //masked input callback
  if ($("#callback__number").length) {
    $(function () {
      $("#callback__number").click(function(){
        $(this).setCursorPosition(3);
      }).mask("+7(999) 999-9999");
    });
  }


  // input join
  $("#join__name-file").change(function () {
    let f_name = [];
    for (let i = 0; i < $(this).get(0).files.length; ++i) {
      f_name.push(' ' + $(this).get(0).files[i].name);
    }
    let f_name_count = f_name.length;
    if (f_name_count == 1) {
      $("#join__file-count").val(f_name);
    } else {
      $("#join__file-count").val('Выбранно ' + f_name_count + ' файла(ов)');
    }
  });

// input join очистка
  $('.join__exit').click(function () {
    $('.join__input_word').val('');
    return false;
  });

  //открытые popup
  $('.popup-open').click(function () {
    $('.join__popup-fade').fadeIn();
    $('.page').addClass('page_hiden');
    return false;
  });

  //зыкрытие popup
  $('.join__quit').click(function () {
    $(this).parents('.join__popup-fade').fadeOut();
    $('.page').removeClass('page_hiden');
    return false;
  });

  //зыкрытие popup клавишей
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.join__popup-fade').fadeOut();
      $('.page').removeClass('page_hiden');
    }
  });

  //зыкрытие popup вне окна
  $('.join__popup-fade').click(function (e) {
    if ($(e.target).closest('.join__popup').length == 0) {
      $('.page').removeClass('page_hiden');
      $(this).fadeOut();
    }
  });

  //меню burger
  $('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
    $('.page').toggleClass('page_hiden');
  });
  for (let a = 1; a <= $(".mobile ul li").length; a++) {
    $(".mobile ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
  }


  //открытые text slider
  $('.decision__show').click(function () {
    // $('.decision__show').fadeIn();
    $('.decision__earlier_mobile_activ').toggleClass('decision__earlier_mobile_none');
    $('.decision__done_mobile_none').toggleClass('decision__done_mobile_activ');
    return false;
  });




  // function sendAjaxForm(result_form, ajax_form, url) {
  //   jQuery.ajax({
  //     url: url, //url страницы (action_ajax_form.php)
  //     type: "POST", //метод отправки
  //     dataType: "html", //формат данных
  //     data: jQuery("#" + ajax_form).serialize(),  // Сеарилизуем объект
  //     success: function (response) { //Данные отправлены успешно
  //       result = jQuery.parseJSON(response);
  //       document.getElementById(result_form).innerHTML = "Имя: " + result.name + "<br>Телефон: " + result.phonenumber;
  //     },
  //     error: function (response) { // Данные не отправлены
  //       document.getElementById(result_form).innerHTML = "Ошибка. Данные не отправленны.";
  //     }
  //   });
  // }

  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

});








