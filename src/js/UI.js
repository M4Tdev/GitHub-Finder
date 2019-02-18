export const cleanUI = () => {
  // Selecting div with class of user-container
  const userContainer = document.querySelector('.user-container');
  // Setting user-container div to empty string to clean it
  userContainer.innerHTML = '';
};

export const showProfile = user => {
  const { userProfile } = user;

  if (userProfile === undefined) {
    Error('Not found');
    return;
  }
  console.log(userProfile);

  const userContainer = document.querySelector('.user-container');

  const markup = `
		<div class="user-info-section">
			<img
				src="${userProfile.avatar_url}"
				alt="${userProfile.login}"
				class="profile-pic"
			/>
			<ul class="profile-basic-info">
				<li class="repositories">Repos: ${userProfile.public_repos}</li>
				<li class="gists">Gists: ${userProfile.public_gists}</li>
				<li class="following">Following: ${userProfile.following}</li>
				<li class="followers">Followers: ${userProfile.followers}</li>
			</ul>
			<div class="profile-info">
				<div class="table-view">
					<span class="profile-info-property">
						Name:
					</span>
					${userProfile.name}
				</div>
				<div class="table-view">
					<span class="profile-info-property">
						Website:
					</span>
					${userProfile.blog}
				</div>
				<div class="table-view">
					<span class="profile-info-property">
						Location:
					</span>
					${userProfile.location}
				</div>
				<div class="table-view">
					<span class="profile-info-property">
						Member Since:
					</span>
					${userProfile.created_at}
				</div>
			</div>
			<a href="${userProfile.html_url}" class="show-profile">Show profile</a>
		</div>
  `;

  userContainer.insertAdjacentHTML('afterbegin', markup);
};

export const showRepos = user => {
  const { userRepos } = user;

  if (userRepos === undefined) {
    Error('Not found');
    return;
  }

  const userContainer = document.querySelector('.user-container');

  const reposSectionMarkup = `
		<div class="user-repos-section">
			<h1>Latest repos:</h1>
			<div class="repos">

			</div>
			<!-- end of repos -->
		</div>
	`;

  userContainer.insertAdjacentHTML('beforeend', reposSectionMarkup);

  const repos = document.querySelector('.repos');

  for (const { full_name: fullName, description, html_url: url } of userRepos) {
    const markup = `
			<div class="repo">
				<div class="repo-info">
					<span class="repo-name">
						${fullName}
					</span>
					<span class="repo-desc">
						${description}
					</span>
				</div>
				<a href="${url}" class="show-repo">Show repository</a>
			</div>
		`;

    repos.insertAdjacentHTML('beforeend', markup);
  }
};

export const showNotFound = () => {
  const notFound = document.querySelector('.not-found');

  notFound.classList.add('fadeInDown');
  notFound.classList.add('active');

  setTimeout(() => {
    notFound.classList.add('fadeOutUp');
    notFound.classList.remove('fadeInDown');
    setTimeout(() => {
      notFound.classList.remove('active');
      notFound.classList.remove('fadeOutUp');
    }, 500);
  }, 1000);
};
