function googleLogin(){
    var provider=new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
        function(){
            window.location="index.html";
            console.log('successful login');
        }
    ).catch(function(error){
        var errorMessage=error.message;
        alert(errorMessage);
    })
} 
function loginUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(
            function() {
                window.location = "admin/addArticle.html";
                console.log('you are in now');
                

            }).catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });

    } 

const logout=document.querySelector('#logOut');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        window.location='../index.html';
    });
});


