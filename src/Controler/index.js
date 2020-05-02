import { components } from '../View/index.js';

const router = (route) => {
  const container = document.querySelector('#app');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/': {
      container.appendChild(components.welcome());
      return;
    }
    case '#/register': {
      container.appendChild(components.register());
      return;
    }
    case '#/home': {
      container.appendChild(components.home());
      return;
    }
    case '#/profile': {
      container.appendChild(components.profile());
      return;
    }
    case '#/edit': {
      container.appendChild(components.edit());
      break;
    }
    default: {
      break;
    }
  }
};

export { router };
