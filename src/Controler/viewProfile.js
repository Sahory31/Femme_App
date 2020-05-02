import EditProfile from "../View/editProfile.js";
//import { image } from "../Model/viewProfile.js";
import Profile from "../View/viewProfile.js";
import { getProfile } from "../Model/getData.js";
//import { upProfileUser, db } from "../Model/upData.js";
//image(selectImage, imagePreview);
//window.addEventListener('load', getProfile(db, user));
function profile(nameCreate, ocupationCreate, descriptionCreate) {

};

let user = firebase.auth().currentUser;

export { user, profile };