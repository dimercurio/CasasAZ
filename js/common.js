
    
function submitContactForm() {
    // var firstName = document.getElementById("firstName").value;
    var firstName = $('input[name="firstName"]').val();
    var lastName = $('input[name="lastName"]').val();
    var emailAddress = $('input[name="emailAddress"]').val();
    var phoneNumber = $('input[name="phoneNumber"]').val();
    var userMessage = $('textarea[name="userMessage"]').val();
    // Returns successful data submission message when the entered information is stored in database.
    var dataString = 'firstName1=' + firstName + '&lastName1=' + lastName + '&emailAddress1=' + emailAddress + '&phoneNumber1=' + phoneNumber + '&userMessage1=' + userMessage;
    if (firstName == '' || lastName == '' || emailAddress == '' || phoneNumber == '' || userMessage == '') {
        alert("Please Fill All Fields");
    } else {
    // AJAX code to submit form.
        $.ajax({
            type: "POST",
            url: "/sendEmail.php",
            data: dataString,
            cache: false,
            success: function(html) {
                    alert(html);
                }
            });
        }
            return false;
        }

