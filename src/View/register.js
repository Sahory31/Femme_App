import { logIn, facebookSignIn, googleSignIn, twitterSignIn, signUp } from "../Controler/register.js";
import userId from './home.js'; 

export default () => {

    const wrapperDiv = document.createElement('div');

    wrapperDiv.innerHTML = `
    <div class="register"> 
        <div class= "container">
        <h2>Bienvenida</h2>
            <form id="form">
                <div id="mensajeError"></div>
                <input type="email" name="email" id="emailField" placeholder="correo"></br>
                <input type="password" name="password" id="passwordField" placeholder="contraseña"></br>
                <button type="submit" id="logIn">ingresa</button></br>
                <button type="submit" id="register">regístrate</button></br>
            </form>
        <p>Ó inicia sesión con</p>
        <div id="socialAuth">
            <img src="./images/facebook.png" alt="facebook" id="facebookAuth" class="socialMedia">
            <img src="./images/google.png" alt="Google" id="googleAuth" class="socialMedia">
            <img src="./images/twitter (1).png" alt="Twitter" id="twitterAuth" class="socialMedia"></img>
        </div>
    </div>`;
    
//Email auth btns
let userEmail = wrapperDiv.querySelector("#emailField");
let userPassword = wrapperDiv.querySelector ("#passwordField");
let errorMsg = wrapperDiv.querySelector("#mensajeError");

wrapperDiv.querySelector("#logIn").addEventListener("click", (e) => {
    e.preventDefault();
    logIn(userEmail.value, userPassword.value, errorMsg, userId);
});

wrapperDiv.querySelector("#register").addEventListener("click", (e) => {
    e.preventDefault();
    signUp(userEmail.value, userPassword.value, errorMsg);
});

//Social media auth btns

wrapperDiv.querySelector("#facebookAuth").addEventListener("click", (e) => {
    e.preventDefault();
    facebookSignIn();
});
wrapperDiv.querySelector("#googleAuth").addEventListener("click", (e) => {
    e.preventDefault();
    googleSignIn();
});
wrapperDiv.querySelector("#twitterAuth").addEventListener("click", (e) => {
    e.preventDefault();
    twitterSignIn();
});

return wrapperDiv;
  
};