/// <reference path="./../typings/globals/jquery/index.d.ts" />

console.log('haha');
$(document).ready(function () {
  console.log('doc ready');
  $('div').mouseenter(function () {
    console.log('mouse enter');
  });
  $('div').mouseleave(function () {
    console.log('mouse leave');
  });

  //   $('#t').click(function (e) {
  //     e.preventDefault();
  //     console.log('clicked');
  //     $('h1').hide();
  //   });

  //   $('#k').click(function (e) {
  //     e.preventDefault();
  //     $('img').animate({
  //       left: '250px',
  //       height: '300px',
  //       width: '300pc',
  //     });
  //   });
});
