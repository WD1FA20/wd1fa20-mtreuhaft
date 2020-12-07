"use strict";

//toggle paragraphs on and off  NOT WORKING
$('.toggle').on('click', function() {
  $(this).next().toggleClass('hide');
});

$('#append').on('click', () => {
  const $addLi = $('<li>');
  const input = document.getElementById('question');
  $addLi.text(input.value);
  $addLi.appendTo($('#FAQs'))
});


//add new entry   NOT WORKING
//$('#submit').on('click', () => {
  //const $appendli = $('<li>');
  //$appendli.text('#question.value');
  //$appendli.appendTo($('#FAQs'));
  //const $appendp = $('<p>');
  //$appendp.text('#answer.value');
  //$appendp.appendTo($('#FAQs'));
//});

//extra credit buttons at the tomp
$('#hide-all').on('click', () => {
  $('p').hide();
});

$('#show-all').on('click', () => {
  $('p').show();
});

