if ($('.current').eq(0).text() != '4') {
	$('.btn-prev').closest('li').after('<div class="pgtt">��</div>');
	$('.btn-next').closest('li').before('<div class="pgtt">��</div>');
}
