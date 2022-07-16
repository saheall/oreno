$(".news-list .news-list-unit-s .news-list-title").each(function(i, e) {
  var newstext = $(e).text();
  var array = newstext.split(' | ');
  if (array.length > 1) {
    $(".news-tag-content").eq(i).addClass("news-tag");
    $(".news-tag-content").eq(i).append(array[0]);
    $(".news-list-title").eq(i).empty();
    $(".news-list-title").eq(i).append(array[1]);
  };
});

if ($('.current').eq(0).text() != '4') {
	$('.btn-prev').closest('li').after('<div class="pgtt">¡Ä</div>');
	$('.btn-next').closest('li').before('<div class="pgtt">¡Ä</div>');
}
