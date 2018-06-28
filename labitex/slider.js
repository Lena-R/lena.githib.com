$(function (){
	$("#second").click(function(){
		$(".slidercontainer-2").css({'display':'block'});
		$('.slidercontainer').css({'display':'none'});
		$(".slidercontainer-3").css({'display':'none'});

	});

	$("#first").click(function(){
		$(".slidercontainer-2").css({'display':'none'});
		$(".slidercontainer").css({'display':'block'});
		$(".slidercontainer-3").css({'display':'none'});

	});

		$("#third").click(function(){
		$(".slidercontainer-3").css({'display':'block'});
		$(".slidercontainer").css({'display':'none'});
		$(".slidercontainer-2").css({'display':'none'});

	});
});
