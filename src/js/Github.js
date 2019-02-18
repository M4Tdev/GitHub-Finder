import axios from 'axios';

export default class Github {
  constructor() {
    this.client_id = 'b270222f629f4dd5a659';
    this.secret = 'ef2fd8c3eee603341f7dcaab684bc8eaf745fba9';
    this.proxy = 'https://cors-proxify.herokuapp.com/';
    // this.query = query;
    console.log('Creating new Github search');
  }

  async getUserProfile(user) {
    try {
      const userProfile = await axios.get(
        `${this.proxy}https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.secret}`
      );

      const userRepos = await axios.get(
        `${this.proxy}https://api.github.com/users/${user}/repos?page=1&per_page=5&sort=updated&client_id=${
          this.client_id
        }&client_secret=${this.secret}`
      );

      this.profile = {
        userProfile: userProfile.data,
        userRepos: userRepos.data,
      };
      return this.profile;
    } catch (err) {
      Error(err);
      return 'Not found';
    }
  }
}
