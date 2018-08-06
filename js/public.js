
$(function () {

  $('.c_m').each(function() {

    var L = $(this).find ('>.a1').length;
    var c = 'na' + L;

    $(this).addClass(c);

    $(this).prev().click(function() {
      $('.c_m').removeClass ('open');
      $('.c_m').eq ($(this).index ()).addClass ('open');
    });
  });


});
