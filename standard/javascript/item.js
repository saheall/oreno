$(function() {
//    $('.gallery').slick({
//        infinite: true,
//        fade: true,
//        prevArrow: '<div class="slick-prev"></div>',
//        nextArrow: '<div class="slick-next"></div>'
//    });

//    $('.choice-btn').slick({
//        infinite: true,
//        slidesToShow: 100,
//        focusOnSelect: true,
//        asNavFor: '.gallery'
//    });

//    $('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//        $('.choice-btn .slick-slide').removeClass('slick-current').eq(nextSlide).addClass('slick-current');
//    });
//    
    $('.modal-close, .modal-bg').on('click', function() {
        $('.modal-area').fadeOut();
    });
});

function MakeShop_afterItemOptionChange(data) {
    if (data.isSoldout) {
        $('.instock').removeClass('on').addClass('off');
        $('.outstock').removeClass('off').addClass('on');
    } else {
        $('.instock').removeClass('off').addClass('on');
        $('.outstock').removeClass('on').addClass('off');
    }
}

function MakeShop_afterCartEntry(data) {
    if (data.result) {
        $('.cart-badge').text(data.totalQuantity).show();
        $('.modal-area').fadeIn();
    } else {
        data.method.modal(data.error.message);
    }
    
    return false;
}

$(function(){
  $('.item_click').click(function(){
    $('.item_click_off').addClass('item_click_on');
  });
});

$(function() {
  $('.spinner').each(function() {
    var el  = $(this);
    var add = $('.spinner-add');
    var sub = $('.spinner-sub');

    // substract
    el.parent().on('click', '.spinner-sub', function() {
      if (el.val() > parseInt(el.attr('min'))) {
        el.val(function(i, oldval) {
          return --oldval;
        });
      }
      // disabled
      if (el.val() == parseInt(el.attr('min'))) {
        el.prev(sub).addClass('disabled');
      }
      if (el.val() < parseInt(el.attr('max'))) {
        el.next(add).removeClass('disabled');
      }
    });

    // increment
    el.parent().on('click', '.spinner-add', function() {
      if (el.val() < parseInt(el.attr('max'))) {
        el.val(function(i, oldval) {
          return ++oldval;
        });
      }
      // disabled
      if (el.val() > parseInt(el.attr('min'))) {
        el.prev(sub).removeClass('disabled');
      }
      if (el.val() == parseInt(el.attr('max'))) {
        el.next(add).addClass('disabled');
      }
    });
  });
});


// 数量変更ボタン
$(function() {
    $('.spinner_down').on('click', function() {
        var index = $('.spinner_down').index(this);
        spinner('down', index);
    });
    
    $('.spinner_up').on('click', function() {
        var index = $('.spinner_up').index(this);
        spinner('up', index);
    });
});

function spinner(counter, index){
    var step = 1;
    var min = 1;
    var max = 100;

    var quantity = $('.quantity').eq(index).val();
    quantity = parseInt(quantity);
    if (counter == 'up') { 
        quantity += step; 
    } else if (counter == 'down') {
        quantity -= step;
    };

    if (quantity < min) {
        quantity = min;
    };
    if (max < quantity) {
        quantity = max;
    };

    $('.quantity').eq(index).val(quantity);
}


$('.accordion-titlechg').on('click', function () {
  if ($('.item-accordion-att').text() === '押すと開きます') {
    $('.item-accordion-att').text('押すと閉じます');
  } else {
    $('.item-accordion-att').text('押すと開きます');
  }
});
