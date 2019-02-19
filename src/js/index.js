import Github from './Github';
import * as UI from './UI';

require('../css/style.scss');

const searchForm = document.querySelector('.search-bar');

const userGithub = new Github();

async function searchUserController(e) {
  e.preventDefault();

  const input = Array.from(e.target.children).filter(child => child.id.includes('username-input'));

  // Taking a text from input
  const textInput = input[0].value;

  if (textInput !== '') {
    // Calling method on Github class to get user
    const user = await userGithub.getUserProfile(textInput);

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
}

// searchButton.addEventListener('click', searchUser);
searchForm.addEventListener('submit', searchUserController);
