
function sendMail(contactForm) {  //We are passing in the form as a parameter
    emailjs.send("BreakDaBank.buzz-test", "aircraft_recognition", {    //1st argument - service ID; 2nd argument: templateID; 3rd argument is an object
        //containing the parameters which are all equal to what is set in emailJS
        "from_firstname": contactForm.first_name.value,
        "from_lastname": contactForm.last_name.value,
        "from_email": contactForm.email_address.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response)   //If sending email is a success then we're going to console.log SUCCESS and 
                //the response object
                $('.toast').toast('show');
                $(".toast").show();
                contactForm.reset();                // Clear form //Code from https://rubysrivastava.github.io/exploregothenburg/contact.html                                         
            },
            function (error) {
                console.log("FAILED", error);  //If error we console.log ERROR and error object
                //$('.toast').toast('show');
                //$("#show-toast").click(function () {
                    $('.toast').toast('show');
                   // $(".toast").show();
                    console.log($(".toast").show());
                //});
                contactForm.reset();
            }
        )
    return false;  //This prevents the page from refreshing when you submit your form.
}