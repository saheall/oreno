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

// ボタンのONOFF
function attention(num, onchange) {
  let cartattentionDisplay = $('.cartattention[data-item_num="' + num + '"]');
  let changeButton = $('.quantity-change-button[data-item_num="' + num + '"]');
  let otherChangeButtons = $('.quantity-change-button:not([data-item_num="' + num + '"])');
  let otherSpinnerSubs = $('.spinner-sub:not([data-item_num="' + num + '"])');
  let otherSpinnerAdds = $('.spinner-add:not([data-item_num="' + num + '"])');
  if (onchange) {
    changeButton.removeClass('is_disabled');
    cartattentionDisplay.show();
    otherChangeButtons.addClass('is_disabled');
    otherSpinnerSubs.addClass('is_disabled');
    otherSpinnerAdds.addClass('is_disabled');
  } else {
    cartattentionDisplay.hide();
    changeButton.addClass('is_disabled');
  }
}
