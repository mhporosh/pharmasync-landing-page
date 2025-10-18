(function () {
			const form = document.getElementById('regForm');
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
					// For demo: show a success message. Replace with real submission logic.
					alert('Registration successful — thank you!');
					form.reset();
				} else {
					// focus first invalid field
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