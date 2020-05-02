// -------------------------FIREBASE KEY AND CONFIG------------------------- //

const firebaseConfig = {
    apiKey: 'AIzaSyDZBy9n50HCcJmEOL5-zzYyguPmUJGk3yM',
    authDomain: 'red-feminista.firebaseapp.com',
    databaseURL: 'https://red-feminista.firebaseio.com',
    projectId: 'red-feminista',
    storageBucket: 'red-feminista.appspot.com',
    messagingSenderId: '7507219044',
    appId: '1:7507219044:web:bc69a1f4bd8ea5a1218571',
    measurementId: 'G-2L40V7GZPX',
};
// Initialize Firebase //
firebase.initializeApp(firebaseConfig);

// Retrieve Firestore data //
const dataBase = firebase.firestore();

// ------------------------------LOG IN ----------------------------- //

function logInFn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

/*------------------------------SIGN UP -----------------------------*/

function signUpFn(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

/*------------------------------LOG OUT-----------------------------*/

function logOutFn() {
    return firebase.auth().signOut();
};

/*------------------------------FACEBOOK AUTH-----------------------------*/
function facebookAuth() {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

/*------------------------------GOOGLE AUTH-----------------------------*/
function googleAuth() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

/*------------------------------TWITTER AUTH-----------------------------*/
function twitterAuth() {
    var provider = new firebase.auth.TwitterAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

/*------------------------------CREATE USER-----------------------------*/
function createUser(id, name, email, foto) {
    return firebase.firestore().collection('users').doc(id).set({
        ID: id,
        Nombre: name,
        Email: email,
        Foto: foto,
    });
};

export { dataBase, facebookAuth, googleAuth, twitterAuth, logInFn, signUpFn, logOutFn, createUser }