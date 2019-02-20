import Github from './Github';
import * as UI from './UI';

require('../css/style.scss');

const searchForm = document.querySelector('.search-bar');

// creating new Github instance
const userGithub = new Github();

// async function to
async function searchUserController(e) {
  // removing default form action
  e.preventDefault();

  // getting username from input
  const input = Array.from(e.target.children).find(child => child.id.includes('username-input'));

  // Taking a text from input
  const textInput = input.value;

  // checking if search bar is not empty
  if (textInput !== '') {
    // Calling method on Github class to get user
    const user = await userGithub.getUserProfile(textInput);

    // checking user exsits
    if (user !== 'User Not Found') {
      // cleaning the UI
      UI.cleanUI();
      // displaying users info
      UI.showProfile(user);
      // displaying users repos
      UI.showRepos(user);
    } else {
      // cleaning the UI
      UI.cleanUI();
      // displaying not found message
      UI.showNotFound();
    }
  } else {
    // console.log('Cleaning html');
    UI.cleanUI();
  }
}

// event listener for searchbar submit
searchForm.addEventListener('submit', searchUserController);
