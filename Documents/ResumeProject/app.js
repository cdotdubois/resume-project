var main = function(){
	"use strict";
	//$('#middle').hide();
  		$('#first').delay(500).animate({marginRight: "+=140px"},1000,function(){});
		$('#last').delay(500).animate({marginLeft: "+=140px"},1000,function(){
			$('#middle').css("color","black");
			$('#middle').addClass("animated bounceIn");
});
	$('#tagline').mouseenter(function(){
		$('#manhattancollege').css("color", "green");
	});
	
	$('#mainpic').click(function(){
		$(this).addClass("animated hinge", function(){
			$(this).delay(5000), function(){
				$(this).removeClass("hinge");
			};
		});
	});
	
	$('.skills').mouseenter(function(){
		$('.firstfilled, .secondfilled').fadeTo(2000,1.0);
		$('.secondfilled, .secondunfilled').fadeTo(3500,1.0);
		$('.thirdfilled, .thirdunfilled').fadeTo(5000,1.0);
		$('.fourthfilled, .fourthunfilled').fadeTo(6500,1.0);
		$('.fifthfilled, .fifthunfilled').fadeTo(8000,1.0);
		
	});
					 };

$(document).ready(main);