$(function(){
	
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if(top > $('.shop').offset().top + 50) {
			$('.up').fadeIn('slow');
		} else {
			$('.up').hide();
		}
	});
	
	$('.up').click(function(){
		$('body, html').stop().animate({scrollTop: $('.shop').offset().top}, 500);
		return false;
	});
	
	$('.shop > li').each(function(){
		var badges = $('<div class="badges"></div>');
		if($(this).data('bestseller')) {
			badges.append('<span class="badge-bestseller"></span>');
		}
		if($(this).data('new')) {
			badges.append('<span class="badge-new"></span>');
		}
		if($(this).data('polarized')) {
			badges.append('<span class="badge-polarized"></span>');
		}
		$(this).append(badges);
	});

});


























