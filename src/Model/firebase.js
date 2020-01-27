import { components } from "../View/index.js"

/*-------------------------FIREBASE KEY AND CONFIG-------------------------*/

var firebaseConfig = {
    apiKey: "AIzaSyDZBy9n50HCcJmEOL5-zzYyguPmUJGk3yM",
    authDomain: "red-feminista.firebaseapp.com",
    databaseURL: "https://red-feminista.firebaseio.com",
    projectId: "red-feminista",
    storageBucket: "red-feminista.appspot.com",
    messagingSenderId: "7507219044",
    appId: "1:7507219044:web:bc69a1f4bd8ea5a1218571",
    measurementId: "G-2L40V7GZPX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const dataBase = firebase.firestore();

/*------------------------------LOG IN -----------------------------*/

function logInFn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("ERROR: " + errorMessage);
    });
};

//This is for view changes. We are not using it yet. 
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        let user = firebase.auth().currentUser;

        if (user != null) {
            let email_id = user.email;
            document.querySelector("#userID").innerHTML = "User : " + email_id;
        }
    } else {
        // No user is signed in.
        document.querySelector("#createAccount").style.display = "block";
        document.querySelector("#welcomeUser").style.display = "none";
    }
});

/*------------------------------SIGN UP -----------------------------*/

function signUpFn(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Tu contraseña o tu correo no es válido" + " " + ":(");
    });
};

/*------------------------------LOG OUT-----------------------------*/

function logOutFn() {
    firebase.auth().signOut();
    /*.then(function() {
            // Sign-out successful.
            document.querySelector("#createAccount").style.display = "block";
            document.querySelector("#welcomeUser").style.display = "none";
          }).catch(function(error) {
            // An error happened.
        });*/
};


/*------------------------------LOG IN APPS-----------------------------*/
const providerGoogle = new firebase.auth.GoogleAuthProvider();

const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerTwitter = new firebase.auth.TwitterAuthProvider();

const loginApps = (providers) => {
    switch (providers) {
        case 1:
            firebase.auth().signInWithPopup(providerGoogle).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Twitter API.
                let token = result.credential.accessToken;
                // The signed-in user info.
                let user = result.user;
            })
            break;

        case 2:
            firebase.auth().signInWithPopup(providerFacebook).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Twitter API.
                let token = result.credential.accessToken;
                // The signed-in user info.
                let user = result.user;
            });
            break;

        case 3:
            firebase.auth().signInWithPopup(providerTwitter).then(function(result) {
                // This gives you a Twitter Access Token. You can use it to access the Twitter API.
                let token = result.credential.accessToken;
                // The signed-in user info.
                let user = result.user;
            });
            break;
    }
}

export { logInFn, signUpFn, logOutFn, loginApps }