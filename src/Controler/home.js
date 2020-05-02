import { dataBase, logOutFn } from '../Model/firebase.js'

//Showing user info
function userInfo (userName, userPic){
    const auth = firebase.auth();
    return auth.onAuthStateChanged((user) => {
        if (user) {
            const id = firebase.auth().currentUser.uid;
            dataBase.collection('users').where("ID", "==", id).get()
            .then((querySnapshot) => {
              querySnapshot.forEach((document) => {
                userName.textContent = document.data().Nombre;
                userPic.src = document.data().Foto;
              });
            }).catch((error) => {
              console.log("Error al obtener el documento", error);
            });
        }
    })
};

//Log out
function logOut(){
  logOutFn()
  .then(() => {
    window.location.hash = '#/';
  })
  .catch(()=> {
    window.alert('Ocurrió un error y no se pudo cerrar sesión');
  })
};

export { userInfo, logOut };