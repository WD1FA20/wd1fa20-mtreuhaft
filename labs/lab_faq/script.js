"use strict";

//toggle paragraphs on and off  NOT WORKING -WHY?
$('#toggle').on('click', function() {
  $(this).next().toggleClass('hide');
});

//add user's question and answer to the list
$('#append').on('click', () => {
  const $addLi = $('<li>');
  const input = document.getElementById('question');
  $addLi.html(input.value);  ///why can't i add a button here?
  $addLi.appendTo($('#FAQs'))
  const $addP = $('<p>');
  const input2 = document.getElementById('answer');
  $addP.html(input2.value);
  $addP.appendTo($('#FAQs'))
});

//extra credit buttons at the tomp
$('#hide-all').on('click', () => {
  $('p').hide();
});

$('#show-all').on('click', () => {
  $('p').show();
});

