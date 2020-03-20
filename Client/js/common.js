// $('#btn_SubmitContact').click(function(e){
//     e.preventDefault();
//     submitContactForm();
// });
    
// function submitContactForm() {
    
//     // var firstName = document.getElementById("firstName").value;
//     var firstName = $('input[name="firstName"]').val();
//     var lastName = $('input[name="lastName"]').val();
//     var emailAddress = $('input[name="emailAddress"]').val();
//     var phoneNumber = $('input[name="phoneNumber"]').val();
//     var userMessage = $('textarea[name="userMessage"]').val();
//     // Returns successful data submission message when the entered information is stored in database.
//     var dataString = 'firstName1=' + firstName + '&lastName1=' + lastName + '&emailAddress1=' + emailAddress + '&phoneNumber1=' + phoneNumber + '&userMessage1=' + userMessage;
//     if (firstName == '' || lastName == '' || emailAddress == '' || phoneNumber == '' || userMessage == '') {
//         alert("Please Fill All Fields");
//     } else {
//     // AJAX code to submit form.
//         $.ajax({
//             type: "POST",
//             url: "/Client/sendEmail.php",
//             data: dataString,
//             cache: false,
//             success: function(html) {
//                     alert(html);
//                 }
//             });
//         }
//             return false;
//         }

jQuery(document).ready(function($) {

    $("#contactForm").submit(function(event) {

        event.preventDefault();

        var $form = $(this);

        var data = {
            firstName: $form.find('input[name="firstName"]').val(),
            lastName: $form.find('input[name="lastName"]').val(),
            mailFrom: $form.find('input[name="emailAddress"]').val(),
            phoneNumber: $form.find('input[name="phoneNumber"]').val(),
            message: $form.find('textarea[name="userMessage"]').val(),
        };

        $.post("../Client/sendEmail.php", data)
            .done(function(response) {
                alert(response);
            });

        var dataString = JSON.stringify(data);

    });
});