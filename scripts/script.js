"use strict";

(function() {

	//event handlers
	$('#test_form').submit(function(e) {
		//prevent default behaviour
		e.preventDefault();

		//remove invalid
		$('input').removeClass('is-invalid');

		let validity = validateForm();

		//log result to console
		if (!(validity == false)) {
			console.log(validity);
		}

	});

})();

function validateForm() {
	let obj = {};

	//assign properties to obj
	obj.name = $('#name').val();
	obj.nameVal = $('#name').is(":valid");
	obj.email = $('#email').val();
	obj.emailVal = $('#email').is(":valid");
	obj.passWord = $('#password').val();
	obj.passConf = $('#password_confirm').val();
	obj.passVal = $('#password').is(":valid");

	//check for form errors
	if (obj.nameVal == false) {
		$('#name').addClass('is-invalid');
		return false;
	} else if (obj.emailVal == false) {
		$('#email').addClass('is-invalid');
		return false;
	} else if (obj.passVal == false) {
		$('#password').addClass('is-invalid');
		return false;
	} else if (obj.passWord !== obj.passConf) {
		//check passwords match
		$("#password_confirm").addClass("is-invalid");
		return false;	
	} else {
		$('#test_form').addClass('was-validated');
		return obj;
	}
}