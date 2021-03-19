
function sendMail(contactForm) {  //Passing form as a parameter
    emailjs.send("BreakDaBank.buzz", "aircraft_recognition", {    //Arguments: service ID; templateID; emailJS object
        "from_firstname": contactForm.first_name.value,
        "from_lastname": contactForm.last_name.value,
        "from_email": contactForm.email_address.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);   //If sending email is a success then console.log SUCCESS and response object
                $('.toast').toast('show');         //Display toast confirmation
                contactForm.reset();               // Clear form //Code from https://rubysrivastava.github.io/exploregothenburg/contact.html                                         
            },
            function (error) {
                console.log("FAILED", error);  //If error console.log ERROR and error object
                contactForm.reset();
            }
        );
    return false;  //This prevents the page from refreshing when you submit your form.
}