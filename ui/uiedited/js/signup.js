let emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let email_error=document.querySelector("#email_error");

function createUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    console.log(password);
    console.log(confirmPassword);
    //validate that both passwords are same
    if (password == confirmPassword) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            function() {
                //window.location = "index.html";
                alert('new user registered');

            }).catch(function(error) {
            //this function handles errors
            var errorMessage = error.message;
            alert(errorMessage);
        });

    } else {
        //alert when password did not matches
        if(email.match(emailRegex)){
			document.forms['registerform']['email'].style['border']='1px solid #9B51E0'
			email_error.innerHTML=""
        }
        else{
			document.forms['registerform']['email'].style['border']='1px solid #ff8080'
			email_error.innerHTML="Invalid Email Address"
		}

    }

}