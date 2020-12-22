firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if (user.email !== "fred@mail.com") {
            window.location.href = "../userBlogs.html";
        } else {
            return true;
        }
    } else {
        alert("Unauthorized");
        window.location.href = "signin.html";
        }
     });