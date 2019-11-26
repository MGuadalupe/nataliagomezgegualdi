var lastScrollTop = 0

window.addEventListener(
	'scroll',
	function() {
		var st = window.pageYOffset || document.documentElement.scrollTop
		if (st > lastScrollTop) {
			document.getElementById('mainNav').classList.add('navBg')
		} else if (st == 0) {
			document.getElementById('mainNav').classList.remove('navBg')
		}
		lastScrollTop = st
	},
	false
)
