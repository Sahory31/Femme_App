import { userInfo } from '../Controler/home.js'

function userTemplate() {
    const userTmplt = document.createElement('div');
    userTmplt.innerHTML=`
      <div id='userTemplate'>
        <img id='userPic'/>
        <div id='userName'></div>
      </div>
    `;
    
    const userName = userTmplt.querySelector('#userName');
    const userPic = userTmplt.querySelector('#userPic');
    
    userInfo(userName, userPic);

    return userTmplt;
  };

export { userTemplate };