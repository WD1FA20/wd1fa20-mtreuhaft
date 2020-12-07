"use strict";

//toggle paragraphs on and off
$('#FAQs').on('click', "button", function() {
  $(this).parent().next().toggleClass('hide'); //has to go up to list, then the next thing is a paragraph
});

//add user's question and answer to the list
$('#append').on('click', () => {
  const $addLi = $('<li>');
  const input = document.getElementById('question');
  $addLi.html("<button class='toggle'>+</button>" + input.value);  ///why can't i add a button here?
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

