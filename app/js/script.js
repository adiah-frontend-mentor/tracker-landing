const navBtn = document.getElementById('navBtn');
const btnImage = document.getElementById('btnImage');

const body = document.querySelector('body');
const header = document.querySelector('.header');

const fadeElems = document.querySelectorAll('.has-fade');

navBtn.addEventListener('click', () => {
	if(header.classList.contains('open')){ // Close the hb menu
		body.classList.remove('noscroll');
		header.classList.remove('open');
		btnImage.src = 'images/icon-hamburger.svg';
		fadeElems.forEach(element => {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		})
	} else {
		body.classList.add('noscroll');
		header.classList.add('open');
		btnImage.src = 'images/icon-close.svg';
		fadeElems.forEach(element => {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});