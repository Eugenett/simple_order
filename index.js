var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var slides = document.querySelectorAll('.mySlides');

	if(n > slides.length) {
		slideIndex = 1;
	}else if(n <= 0) {
		slideIndex = slides.length - 1;
	}
	for(var i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slides[slideIndex-1].style.display = 'block';
}