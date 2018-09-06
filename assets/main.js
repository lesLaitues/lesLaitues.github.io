console.log('Generated using Tomato!')
console.log('Visit https://github.com/ribacq/tomato')

// toggle class overlay-media on images in section on click
for (img of document.querySelectorAll('section img')) {
	img.onclick = function(e) {
		if (e.target.classList.contains('overlay-media')) {
			e.target.classList.remove('overlay-media')
		} else {
			e.target.classList.add('overlay-media')
		}
	}
}
