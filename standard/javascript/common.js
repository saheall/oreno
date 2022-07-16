$(function() {
    // �إå����Υ�����Ĵ��
    headerAdjust();
    $(window).on('scroll', function() {
        headerAdjust();
    });

    // ��������������������
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

    // �����ե�����
    $('.search-keyword, .search-price, .original-code').on('keypress', function(e) {
        if (e.keyCode == 13) {
            $('.search-url')[0].click();
        }
    });

    // �ϥ�С�������˥塼
    $('.openbtn').on('click', function() {
        $('body').toggleClass('scroll-stop');
        $(this).toggleClass('active');
        $('#g-nav').toggleClass('panelactive');
    });

    // �����ɥ�˥塼���Ĥ���
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

// �����ɥ�˥塼�Υ��ƥ��꡼����
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
// �����ܥå���
$(function() {
    $('.search-keyword').on('keypress', function(e) {
        if (e.keyCode == 13) {
            var index = $('.search-keyword').index(this);
            $('.search-url')[index].click();
        }
    });
});

// ��������Ф�����
let timeOut;

$(window).on('scroll', function(){
    var docHeight = $(document).innerHeight(), //�ɥ�����Ȥι⤵
        windowHeight = $(window).innerHeight(), //������ɥ��ι⤵
        pageBottom = docHeight - windowHeight; //�ɥ�����Ȥι⤵ - ������ɥ��ι⤵
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

// ���ޥۤǸ�����򱣤�
var startPos = 0, winScrollTop = 0;
// scroll���٥�Ȥ�����
window.addEventListener('scroll', function () {
    winScrollTop = this.scrollY;
    if (winScrollTop >= startPos) {
        // ���˥������뤵�줿��
        if (winScrollTop >= 200) {
            // ����200px�������뤵�줿�鱣��
            document.getElementById('scrollArea').classList.add('hide');
        }
    } else {
        // ��˥������뤵�줿��
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