function sendMail(contactMe) {
    emailjs.send("gmail", "nims_memory_game", {
        "from_name": contactMe.name.value,
        "from_email": contactMe.email.value,
        "message": contactMe.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
            );
   return false;

}
