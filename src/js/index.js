import Github from './Github';
import * as UI from './UI';

require('../css/style.scss');

const searchBar = document.querySelector('#username-input');

const userGithub = new Github();

searchBar.addEventListener('keyup', async e => {
  // if (e.keyCode !== 13) return;
  // Taking a text from input
  const textInput = e.target.value;

  if (textInput !== '') {
    // Calling method on Github class to get user
    const user = await userGithub.getUserProfile(textInput);

    if (user) {
      UI.cleanUI();
      UI.showProfile(user);
      UI.showRepos(user);
    }
  } else {
    // console.log('Cleaning html');
    UI.cleanUI();
  }
});
