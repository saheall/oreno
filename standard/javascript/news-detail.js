$(function(){
  var newstext = $(".news-title").text();
  var array = newstext.split(' | ');
  if (array.length > 1) {
    $(".news-tag-content").addClass("news-tag");
    $(".news-title").empty();
    $(".news-title").append(array[1]);
    $(".news-tag-content").append(array[0]);
    $(".breadcrumb-item-news-title").empty();
    $(".breadcrumb-item-news-title").append(array[1]);
  };
});
