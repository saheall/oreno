$(function() {
    // ヘッダーのサイズ調整
    headerAdjust();
    $(window).on('scroll', function() {
        headerAdjust();
    });

    // カレンダー特定日の設定
    $('.day-list').each(function() {
        var month = $(this).attr('data-month');
        var day = $(this).attr('data-day');
        var color = $(this).attr('data-color');

        $('.makeshop-calendar' + month +' .day' + day).css({
            'background-color': color,
            'color': '#4d4d4d',
            'font-weight': 'bold',
            'height': '16px'
        });
    });

    // 検索フォーム
    $('.search-keyword, .search-price, .original-code').on('keypress', function(e) {
        if (e.keyCode == 13) {
            $('.search-url')[0].click();
        }
    });

    // ハンバーガーメニュー
    $('.openbtn').on('click', function() {
        $('body').toggleClass('scroll-stop');
        $(this).toggleClass('active');
        $('#g-nav').toggleClass('panelactive');
    });

    // サイドメニューを閉じる
    $('#g-nav-close').on('click', function() {
        $('body').removeClass('scroll-stop');
        $('.openbtn').removeClass('active');
        $('#g-nav').removeClass('panelactive');
    });
    $('#g-nav-close2').on('click', function() {
        $('body').removeClass('scroll-stop');
        $('.openbtn').removeClass('active');
        $('#g-nav').removeClass('panelactive');
    });

// サイドメニューのカテゴリー開閉
    $('.accordion').on('click', function() {
        $(this).toggleClass('on').next().slideToggle();
        $('.accordion').not(this).removeClass('on').next('.close').slideUp();
    });
});

function headerAdjust() {
    var adjustPoint = 20;
    var scrollTop = $(window).scrollTop();
    if(scrollTop > adjustPoint) {
        $('.header').addClass('fix');
    } else {
        $('.header').removeClass('fix');
    }
}

function MakeShop_afterListCartEntry(data){
    if (!data.result) {
        alert(data.error.message);
        location.href = '/view/item/' + data.systemCode;
        return false;
    }
}
// 検索ボックス
$(function() {
    $('.search-keyword').on('keypress', function(e) {
        if (e.keyCode == 13) {
            var index = $('.search-keyword').index(this);
            $('.search-url')[index].click();
        }
    });
});

// アイコン出し入れ
let timeOut;

$(window).on('scroll', function(){
    var docHeight = $(document).innerHeight(), //ドキュメントの高さ
        windowHeight = $(window).innerHeight(), //ウィンドウの高さ
        pageBottom = docHeight - windowHeight; //ドキュメントの高さ - ウィンドウの高さ
    $('.back-to-top'). addClass("back-to-top_dis");
    $('.newusr-trk'). addClass("newusr-trk_dis");
	if(pageBottom <= $(window).scrollTop()) {
    $('.newusr-trk'). addClass("newusr-trk_diss");
	}

    clearTimeout(timeOut);

    timeOut = setTimeout(function(){
        $('.back-to-top').removeClass("back-to-top_dis").delay(1000);

        if(pageBottom !== $(window).scrollTop()) {
            $('.newusr-trk').removeClass("newusr-trk_dis").delay(3000);
            $('.newusr-trk').removeClass("newusr-trk_diss").delay(3000);
        }
    }, 1000);
});

// スマホで検索窓を隠す
var startPos = 0, winScrollTop = 0;
// scrollイベントを設定
window.addEventListener('scroll', function () {
    winScrollTop = this.scrollY;
    if (winScrollTop >= startPos) {
        // 下にスクロールされた時
        if (winScrollTop >= 200) {
            // 下に200pxスクロールされたら隠す
            document.getElementById('scrollArea').classList.add('hide');
        }
    } else {
        // 上にスクロールされた時
        document.getElementById('scrollArea').classList.remove('hide');
    }
    startPos = winScrollTop;
});

// select
    $(function(){
        var selectedItem = $("ul.select_libox li.selected").text()
        var selectBox = $("ul.select_libox")
        var selectItems = $("ul.select_libox li")
        var display = $(".display_selectedItem")
        var open = $(".slectlibox")

        display.text(selectedItem)
        selectBox.hide();
        $("li.selected").css("dispay","none");

        open.on("click",function(){
            selectBox.show();
        });

        selectItems.on("click",function(){
            selectItems.removeClass("selected").css("background","#fff");
            $(this).addClass("selected").css("background","#f8f8f8");
            selectedItem = $("li.selected").text()
            selectBox.hide();
            display.text(selectedItem)
        })
    })
		$(".select_libox").mouseleave(function(){
							$(this).hide()
		});