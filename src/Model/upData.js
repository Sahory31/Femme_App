/*const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

function upProfileUser(username, country, descriptionUser, occupation) {
    db.collection('userProfile').add({
        name: usename,
        country: country,
        description: descriptionUser,
        occupation: occupation,
    }).then(ref => {
        console.log('Added document with ID: ', ref.id);
    });
}

export { upProfileUser, db };*/