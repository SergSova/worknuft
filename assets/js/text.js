$(document).on('ready', function () {
  $('.wrap-zno h3')
    .on('click', function () {
      $(this).toggleClass('active');
      $(this).siblings('.content-zno').slideToggle(500);
    })
});
