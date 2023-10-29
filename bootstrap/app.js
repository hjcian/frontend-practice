/// <reference path="./../typings/globals/jquery/index.d.ts" />

console.log('haha');

let switchState = true;

$(document).ready(function () {
  console.log('doc ready');

  $('#switch').click(function (e) {
    e.preventDefault();
    let contentDIV = document.getElementById('d1');
    if (switchState) {
      contentDIV.innerText = 'turn off';
      // contentDIV.textContent = 'turn off';
    } else {
      contentDIV.innerText = 'turn on';
      // contentDIV.textContent = 'turn on';
    }
    switchState = !switchState;
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
