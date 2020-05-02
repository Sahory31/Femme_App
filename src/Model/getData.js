function getProfile(db, user) {
    if (user) {
        // User is signed in.
        db.collection('users').get().then((snapshot) => {
                console.log(snapshot.docs);
            })
            /* Va a poder editar su perfil */
    } else {
        // No user is signed in.
        alert('No es tu perfil');
        /* No va a poder editar su perfil */
    }


}




export { getProfile };