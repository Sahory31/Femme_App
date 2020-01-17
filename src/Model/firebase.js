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

function logInFn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("ERROR: " + errorMessage );
      }); 
};

//This is for view changes. We are not using it yet. 
/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.querySelector("#createAccount").style.display = "none";
      document.querySelector("#welcomeUser").style.display = "block";

      var user = firebase.auth().currentUser;
      
      if (user != null) {
        var email_id = user.email;
        document.querySelector("#userID").innerHTML = "User : " + email_id;
      }
    } else {
      // No user is signed in.
      document.querySelector("#createAccount").style.display = "block";
      document.querySelector("#welcomeUser").style.display = "none";
    }
});*/

/*------------------------------SIGN UP -----------------------------*/

function signUpFn (email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Tu contraseña o tu correo no es válido" +" "+ ":(");
    });
};

/*------------------------------LOG OUT-----------------------------*/

function logOutFn(){
    firebase.auth().signOut();/*.then(function() {
        // Sign-out successful.
        document.querySelector("#createAccount").style.display = "block";
        document.querySelector("#welcomeUser").style.display = "none";
      }).catch(function(error) {
        // An error happened.
    });*/
}; 


/*------------------------------FACEBOOK AUTH-----------------------------*/
function facebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
};

/*------------------------------GOOGLE AUTH-----------------------------*/
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

function ponUp() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
};

/*------------------------------TWITTER AUTH-----------------------------*/




export { facebook, ponUp, logInFn, signUpFn, logOutFn }