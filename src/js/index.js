import Github from './Github';
import * as UI from './UI';

require('../css/style.scss');

const searchBar = document.querySelector('#username-input');

const userGithub = new Github();

searchBar.addEventListener('keydown', async e => {
  if (e.keyCode !== 13) return;
  // Taking a text from input
  const textInput = e.target.value;

  if (textInput !== '') {
    // Calling method on Github class to get user
    const user = await userGithub.getUserProfile(textInput);

    console.log(user);

    if (user !== 'User Not Found') {
      UI.cleanUI();
      UI.showProfile(user);
      UI.showRepos(user);
    } else {
      UI.cleanUI();
      UI.showNotFound();
    }
  } else {
    // console.log('Cleaning html');
    UI.cleanUI();
  }
});
