function login_validation() {

	const name = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const EData = "RawanKhalid";
	const PData = "RawanKhalid";
	// 11 length

	if ( name== null || name == "") {
		alert("UserName can't be blank!");
		return false;
	} else if (name < 11 || name > 45) {
		alert("UserName must be between 11 and 45 characters");
		return false;
	} else if (password == null || password == "") {
		alert("Password can't be blank!");
		return false;
	} else if (password < 11 || password > 35) {
		alert("Password must be between 11 and 35 characters");
		return false;
	} else {
		if (name == EData && password == PData) {
		alert("Hey Rawana, login successfully!");
		window.location.href = "file:///C:/Users/lenovo/Desktop/project%20folders/car/index.html";
				return true;
		} else {
		alert("Invalid username or password!");
		return false;
		}
	}

}