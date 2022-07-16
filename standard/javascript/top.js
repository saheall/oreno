$(function(){
  $('.slider1').slick({
    autoplay: true,
    arrows: true,
    centerMode: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 4,
    dots: false,
    variableWidth: true,
	responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        arrows: false,
        },
      },
    ],
  });
});
$(function(){
  $('.slider2').slick({
    autoplay: true,
    arrows: true,
    centerMode: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 4,
    dots: false,
    variableWidth: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		}]
  });
});

$(".news-list .news-list-item .news-title").each(function(i, e) {
  var newstext = $(e).text();
  var array = newstext.split(' | ');
  if (array.length > 1) {
    $(".news-tag-content").eq(i).addClass("news-tag");
    $(".news-tag-content").eq(i).append(array[0]);
    $(".news-title").eq(i).empty();
    $(".news-title").eq(i).append(array[1]);
  };
});
