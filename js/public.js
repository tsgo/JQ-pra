

$(function(){

  $('button').click(function(){

    var v = $('.in1').val(); // 元素？字串？

    var $div = $('<div />').addClass('rbox');
    var $p = $('<p />').addClass('se').text(v);
    var $a = $('<a />').text('Detel');


    $('.rboxs')
      .append($div
        .append($p).append($a)
      );

    $p.click(function() {

      var a = prompt("請輸入你想說的");

      $p.text(a);

    });

    $a.click(function() {
      $div.remove();
    });

    $('#in').val('');

  });

});