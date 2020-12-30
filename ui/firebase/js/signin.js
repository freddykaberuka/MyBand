function googleLogin(){
    var provider=new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
        function(){
            window.location="userBlogs.html";
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
                if(email==='fred@mail.com'&&password==='password1'){
                    window.location = "admin/index.html";
                    console.log('welcome admin');

                }
                else{
                    window.location = "userBlogs.html";
                }
                
                

            }).catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });

    } 
    
    // auth.onAuthStateChanged((user) => {
    //     if (!user) {
    //       console.log("signed out");
    //       location = "signin.html";
    //     }
    //   });
const logout=document.querySelector('#logOut');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        window.location='../index.html';
    });
});


