![](https://github.com/kalamarcin/github-user-search/blob/master/src/assets/preview.jpg?raw=true)



## Overview

- On first load, show the profile information for Octocat.
- Display an error message if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added. T
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added 
- Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

### Links

- Live Site URL: [Devfinder](https://devfinder-mk.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Axios
- useLocalStorage Hook
- Flexbox
- CSS Grid
- Mobile-first workflow
- Moment JS
- [React](https://reactjs.org/) - JS library


## Setup

To run this project, clone it and install it locally using npm:

```
$ git clone git@github.com:kalamarcin/github-user-search.git
$ cd github-user-search
$ npm install

$ npm start

```

### Useful resources

- [Dark Theme Toggle by Code Commerce](https://youtu.be/y0LwoUi_Kcw) - This is an amazing tutorial which helped me finally understand toggle the theme on my web.


## Author

- Website - [Marcin Kala](https://portfolio-mk-react.netlify.app/)


