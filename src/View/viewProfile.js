import { profile } from '../Controler/viewProfile.js';
export default () => {
    // profile(nameCreate, ocupationCreate, descriptionCreate);
    const tmpView = document.createElement('div');

    tmpView.innerHTML =
        `

     <section id='perfil'>
        <img id='imagePreview'>
        <label id='nameUser'>{nameCreate}</label>
        <label id='ocupacion'>{ocupationCreate}</label>
        <label id='description'>{descriptionCreate}</label>
        <a href="#/edit"> <button id='showEdit'> Editar Perfil </button></a> 

     </section>
     `
    let imagePreview = tmpView.querySelector("#imagePreview");
    let showEdit = tmpView.querySelector('showEdit');

    //image(selectImage, imagePreview);
    return tmpView;

}