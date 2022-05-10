function register_validation() {

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const phone = document.getElementById("phone").value;

    if (firstname == null || firstname == "") {
        alert("First name can't be blank!");
        return false;
    } else if (lastname == null || lastname == "") {
        alert("Last name can't be blank!");
        return false;
    } else if (email == null || email == "") {
        alert("Email can't be blank!");
        return false;
    } else if (password == null || password == "") {
        alert("Password can't be blank!");
        return false;
    } else if (confirm_password == null || confirm_password == "") {
        alert("Please confirm your password!");
        return false;
    } else if (phone == null || phone == "") {
        alert("Phone can't be blank!");
        return false;
    } else if (firstname < 3 || firstname > 35) {
        alert("First name must be between 3 and 35 characters");
        return false;
    }  else if (lastname < 3 || lastname > 35) {
        alert("Last name must be between 3 and 35 characters");
        return false;
    }  else if (email < 8 || email > 45) {
        alert("Email must be between 8 and 45 characters");
        return false;
    }  else if (password < 8 || password > 35) {
        alert("Password must be between 8 and 35 characters");
        return false;
    }  else if (confirm_password < 8 || confirm_password > 35) {
        alert("Password must be between 8 and 35 characters");
        return false;
    }  else if (phone < 11 || phone > 11) {
        alert("Please enter your real phone number!");
        return false;
    }
// if(firstname>3 &&lastname>3 &&email>8 &&password>8 &&confirm_password>8 &&phone==11){
//     else
//     {alert("Congratulations, Regestred successfully!");
// 		window.location.href = "file:///C:/Users/lenovo/Desktop/project%20folders/car/index.html";
// }
}