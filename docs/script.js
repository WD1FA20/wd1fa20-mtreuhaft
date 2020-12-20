$('#placeholder').load('navigation.html');
$('#foot').load('footer.html');
// Event Listener to Process Form Submission

$('#send').on('click', function(e) {
  e.preventDefault();
  const $name = $('#item');
  $newP = $(`<p>Thank you ${$name.val()}. I'll be in touch soon.</p>`);
  $('#send').after($newP);
  $("#email").trigger("reset"); //reset form in jQuery.//
  
});