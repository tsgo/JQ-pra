/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 

 // console.log('文字信息');

$(function () {

  $('button').click(function() {

    var a = $('.a1').val();
    var b = $('.a2').val();

    if(isNaN(a) || isNaN(b)) {
      $('.a3').text('請輸入數字');
    } else if(a > b) {
      $('.a3').text(a +'大於'+ b);
    } else if (a < b) {
      $('.a3').text(a +'小於'+ b);
    } else if (a == b) {
      $('.a3').text(a +'等於'+ b);
    }

  });

});