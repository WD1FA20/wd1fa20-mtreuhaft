/* For Testing Purposes 

When the mouse enters a .news-article, make it transparent
   - You MUST use fadeTo()
*/


$('.news-article').hover(function(){
  $(this).fadeTo(1000, 0.0);
});