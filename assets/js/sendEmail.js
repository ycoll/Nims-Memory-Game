//Learned from course module

function sendMail(contactMe) {
	emailjs.send("gmail", "nims_memory_game", {
			"from_name": contactMe.name.value,
			"from_email": contactMe.email.value,
			"message": contactMe.message.value
		})
		.then(
			resetForm(),
		);
	return false;

}

function resetForm() {
	let form = document.getElementById('myForm');
	form.reset();
}