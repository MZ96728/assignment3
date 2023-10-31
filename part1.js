// Your code
document.getElementById('register-user').addEventListener('click', function() {
    

    let count=0;

    let errorMessage =document.querySelectorAll(".error-msg");
    //Phone
    let phoneNumberInput = document.getElementById('user-phone');

    
    let phoneNumber = phoneNumberInput.value.trim();

    
    let phoneNumberPattern = /^(059|056)\d{7}$/;

    if (!phoneNumberPattern.test(phoneNumber)) {
        errorMessage[0].textContent = "Invalid phone number";
    } else {
        errorMessage[0].textContent = ""; 
        count++;
    }


    //Password
    let passwordInput = document.getElementById('user-pass');
    
    let password = passwordInput.value;
    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*_).{8,16}$/;
    if (!passwordPattern.test(password)) {
        errorMessage[1].textContent = "Password must contain capital letters, small letters, numbers, and underscore (_) and be between 8 and 16 characters long.";
    } else {
        errorMessage[1].textContent = ""; // Clear any previous error message
        count++;
    }


    //Date of birth

    let dobInput = document.getElementById('user-dob');
    let userDob = new Date(dobInput.value);
    let currentDate = new Date();

    let age = currentDate.getFullYear() - userDob.getFullYear();

    if (age < 18) {
        errorMessage[2].textContent = "You must be 18 years old or older to sign up.";
    } else {
        errorMessage[2].textContent = ""; // Clear any previous error message
        count++;
    }







    //Successful msg
    if(count ==3)
    {
        alert("Successful")
    }






});

document.getElementById('gen-pass').addEventListener('click', function() {

    let passwordInput = document.getElementById('user-pass');
    let characters="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    var password1 = "_";
    for (var i = 0; i < 13; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password1 += characters.charAt(randomIndex);
    }
    passwordInput.value=password1;
    
    
});