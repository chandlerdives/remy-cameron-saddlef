// ------ Accordion
var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt').click(function() {
		allPanels.slideUp();

    $(this).filter('.open').removeClass('open').addClass('closing')
    $('.accordion > dt ').removeClass('open');
    $(this).not(".closing").addClass('open').next().slideDown();
    $('.accordion > dt').removeClass('closing');
    
    return false;
	});


  // ------ Hamburger Button
$('.hamburger-button').click(function(){
  $('.mobile-menu').slideToggle(100);
  $(this).toggleClass('active');
});

function myFunction(x) {
  x.classList.toggle("change");
}