
$(document).ready(function(){
	$('.menu-toggler').on('click', function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
		$(this).toggleClass('openFixed');
		$('.logo-header').toggleClass('openFixed');
	});
	$('.top-nav .nav-link').on('click', function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
		$('.menu-toggler').removeClass('openFixed');
		$('.logo-header').removeClass('openFixed');
	});
	$('nav a[href*="#"]').on('click', function(){
		$('html, body').animate({
			scrollTop:$($(this).attr('href')).offset().top - 50
		},1500);
	});
	$('#link-top-for-about').on('click', function(){
		$('html, body').animate({
			scrollTop:$($(this).attr('href')).offset().top - 50
		},1500);
	});
	$('#up').on('click', function(){
		$('html, body').animate({
			scrollTop:0
		},1500);
	});
	/*
	var i = 0;
	var txt = 'Web developer junior and  Game developer junior';
	var speed = 50;
	typeWriter();
	function typeWriter() {
	  if (i < txt.length) {
	    document.getElementById("demo").innerHTML += txt.charAt(i);
	    i++;
	    setTimeout(typeWriter, speed);
	  }
	}
	*/
	AOS.init({
		easeing:'ease',
		duration:1800 ,
		once:true
	});
});