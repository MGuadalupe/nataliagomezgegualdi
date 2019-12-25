document.querySelector('.hamburguer').addEventListener('click', function() {
	document.querySelector('.full-menu').classList.toggle('active')
	document.querySelector('.hamburguer').classList.toggle('close-hamburguer')
	setTimeout(function() {
		document.querySelector('.cine').classList.toggle('iconsHide')
	}, 300)
})

document.getElementById('contactLink').addEventListener('click', function() {
	document.querySelector('.hamburguer').classList.remove('close-hamburguer')
	document.querySelector('.full-menu').classList.remove('active')
})
