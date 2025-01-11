if (document.readyState !== 'loading') {
	smoothScrollReady();
} else {
	document.addEventListener('DOMContentLoaded', smoothScrollReady);
}

function smoothScrollReady() {
	if (typeof Lenis != "undefined") {
		const lenis = new Lenis({
			smoothWheel: miga_smooth_scrolling_params.miga_smooth_scrolling_smoothWheel
		});

		lenis.on('scroll', (e) => {
			if (typeof smoothScrollLenisCallback != "undefined") {
				smoothScrollLenisCallback(e);
			}
		})

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		if (miga_smooth_scrolling_params.miga_smooth_scrolling_anchor) {
			document.querySelectorAll("a").forEach(function(item) {
				if (item.hash && item.hash[0] == "#") {
					item.addEventListener("click", (e) => {
						lenis.scrollTo(item.hash, {
							offset: miga_smooth_scrolling_params.miga_smooth_scrolling_anchor_offset
						})
					})
				}
			})
		}
	}
}
