(function () {
			const form = document.getElementById('regForm');
			// If there's no registration form on this page, skip registration handlers
			if (!form) return;
			const fields = {
				fullName: {el: document.getElementById('fullName'), err: document.getElementById('err-fullName')},
				phone: {el: document.getElementById('phone'), err: document.getElementById('err-phone')},
				pharmacyName: {el: document.getElementById('pharmacyName'), err: document.getElementById('err-pharmacyName')},
				pharmacyAddress: {el: document.getElementById('pharmacyAddress'), err: document.getElementById('err-pharmacyAddress')}
			};

			function resetErrors() {
				Object.values(fields).forEach(f => f.err.textContent = '');
			}

			function validate() {
				let valid = true;
				resetErrors();

				if (!fields.fullName.el.value.trim()) {
					fields.fullName.err.textContent = 'Full name is required.';
					valid = false;
				}

				const phoneVal = fields.phone.el.value.trim();
				if (!phoneVal) {
					fields.phone.err.textContent = 'Phone number is required.';
					valid = false;
				} else {
					// basic phone validation: digits, spaces, +, -, parentheses
					const phonePattern = /^[0-9+()\-\s]{6,20}$/;
					if (!phonePattern.test(phoneVal)) {
						fields.phone.err.textContent = 'Enter a valid phone number (digits and + - ()).';
						valid = false;
					}
				}

				if (!fields.pharmacyName.el.value.trim()) {
					fields.pharmacyName.err.textContent = 'Pharmacy name is required.';
					valid = false;
				}

				if (!fields.pharmacyAddress.el.value.trim()) {
					fields.pharmacyAddress.err.textContent = 'Pharmacy address is required.';
					valid = false;
				}

				return valid;
			}

			form.addEventListener('submit', function (e) {
				e.preventDefault();
				if (validate()) {
					
					alert('Registration successful — thank you!');
					form.reset();
				} else {
					
					const firstErr = document.querySelector('.error:not(:empty)');
					if (firstErr) {
						const input = firstErr.previousElementSibling;
						if (input && typeof input.focus === 'function') input.focus();
					}
				}
			});

			document.getElementById('cancelBtn').addEventListener('click', function () {
				// navigate back to home
				window.location.href = 'index.html';
			});
		})();

		// Mobile nav toggle
		(function () {
			const navToggle = document.getElementById('navToggle');
			if (!navToggle) return;

			function openNav() {
				document.body.classList.add('nav-open');
				navToggle.setAttribute('aria-expanded', 'true');
			}

			function closeNav() {
				document.body.classList.remove('nav-open');
				navToggle.setAttribute('aria-expanded', 'false');
			}

			navToggle.addEventListener('click', function (e) {
				e.stopPropagation();
				if (document.body.classList.contains('nav-open')) closeNav(); else openNav();
			});

			// Close when clicking outside the nav panel
			document.addEventListener('click', function (e) {
				const links = document.querySelector('.links');
				if (!links) return;
				if (!links.contains(e.target) && !navToggle.contains(e.target)) closeNav();
			});

			document.addEventListener('keydown', function (e) {
				if (e.key === 'Escape') closeNav();
			});
		})();


	(function () {
		const btn = document.getElementById('profileBtn');
		const menu = document.getElementById('profileMenu');

		if (!btn || !menu) return;

		function openMenu() {
			menu.classList.add('show');
			btn.setAttribute('aria-expanded', 'true');
			menu.setAttribute('aria-hidden', 'false');
			document.body.classList.add('menu-open');
		}

		function closeMenu() {
			menu.classList.remove('show');
			btn.setAttribute('aria-expanded', 'false');
			menu.setAttribute('aria-hidden', 'true');
			document.body.classList.remove('menu-open');
		}

		btn.addEventListener('click', function (e) {
			e.stopPropagation();
			if (menu.classList.contains('show')) closeMenu(); else openMenu();
		});

	
		document.addEventListener('click', function (e) {
			if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
		});

	
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') closeMenu();
		});
	})();

	(function () {
		const expandBtn = document.getElementById('expand-button');
		const content = document.querySelector('.features-content');
		if (!expandBtn || !content) return;

		function open() {
			expandBtn.setAttribute('aria-expanded', 'true');
			content.classList.add('open');
			
			content.style.maxHeight = content.scrollHeight + 'px';
		}

		function close() {
			expandBtn.setAttribute('aria-expanded', 'false');
	
			content.style.maxHeight = content.scrollHeight + 'px';
			requestAnimationFrame(() => {
				content.style.maxHeight = '0px';
			});
			content.classList.remove('open');
		}

		expandBtn.addEventListener('click', function () {
			const expanded = expandBtn.getAttribute('aria-expanded') === 'true';
			if (expanded) close(); else open();
		});
	})();