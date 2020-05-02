import { userTemplate } from './userTemplate.js';
import { dataBase } from '../Model/firebase.js';
import { logOut } from '../Controler/home.js';

export default () => {
    const viewHome = document.createElement('div');
    viewHome.innerHTML= `
    <div id='home'>
        <div id='upperMenu'>
            <p>Inicio</p>
            <a href="#/home"><img class="navBtns" src="./images/back.png"></a>
        </div>
        <div id="dsktpMenu">
            <p>FemmeApp</p>
            <div class="nav">
                <a href="#/home"><img class="navBtns" src="./images/home.png"></a>
                <a href="#/profile"><img class="navBtns" src="./images/avatar.png"></a>
                <a href="#/"><img class="navBtns" id='logOutBtn' src="./images/logout.png"></a>
            </div>
        </div>
        <div id='userTemplate'></div>
        <div id='newPost'>
            <form id='createPost'>
                <input type='text' id='postContent'  placeholder='¿Qué estás pensando?'></br>
                <div id='postMenu'>
                    <div id='addFiles'>
                        <img src='../images/add-img.png' class='postBtns'>
                        <img src='../images/add-file.png' class='postBtns'>
                    </div>
                    <button type='submit' id='postSubmit'>Publicar</button>
                </div>
            </form>
        </div>
        <div id='posts'>
            <ul id='postList'></ul>
        </div>
        <div id='bottomMenu'>
            <a href="#/home"><img class="navBtns" src="./images/home.png"></a>
            <a href="#/profile"><img class="navBtns" src="./images/avatar.png"></a>
            <a href="#/"><img id="logOut" class='navBtns' src="./images/logout.png"></a>
        </div>
    </div>
    `;

    //Adding user info in to the template
    const userView = viewHome.querySelector('#userTemplate');
    userView.appendChild(userTemplate());
    

    //Adding post data to firebase from an input
    const form = viewHome.querySelector('#createPost');
    const postList = viewHome.querySelector('#postList');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        dataBase.collection('posts').add({
            post: form.postContent.value
          });
        form.postContent.value = '';
    });

    //Showing and deleting posts in real time
    dataBase.collection('posts').onSnapshot(querySnapshot => {
        let changes = querySnapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added'){
                renderPosts(change.doc);
            } else if (change.type == 'removed'){
                let li = postList.querySelector('[data-id =' + change.doc.id + ']');
                postList.removeChild(li);
            }
        })
    });
    
    //Rendering posts in to the screen
    function renderPosts(doc){
        let li = document.createElement('li');
        let post = document.createElement('span');
        let cross = document.createElement('div');

        li.setAttribute('data-id', doc.id);
        post.textContent = doc.data().post;
        cross.textContent = 'x';
        
        li.appendChild(cross);
        li.appendChild(post);
        postList.appendChild(li);

        //deleting data
        cross.addEventListener('click', (e) => {
            e.stopPropagation();
            let id = e.target.parentElement.getAttribute('data-id');
            dataBase.collection('posts').doc(id).delete();
        });
    };

    //Log Out
    const logOutBtn = viewHome.querySelector('#logOutBtn');
    logOutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logOut();
    });

    return viewHome;
};
