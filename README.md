# React Portfolio

<span align="left">

<a href="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"><img alt="M.I.T. License use" src="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"/></a>

Refactored Responsive Portfolio to work with React.

## Description

A personal portfolio highlighting work in web-development, studio art, and theater. This portfolio uses React and is a refactored version of the **Responsive Portfolio**. See original portfolio [here](https://github.com/dsmooke/responsive-portfolio). 

View the deployed React application [here](https://dsmooke.github.io/react-portfolio/)

![demo](./public/imgs/react-portfolio-demo.png)

## Technologies Used

- React
- Node.js
- w3schools template
- HTML
- JavaScript
- CSS

## Requirements

- Updated portfolio featuring 6 total projects
- Use React
- A Header component that appears on multiple pages
- A single Project component that will be used multiple times on a single page
- Navigation with React Router, dynamic rendering, or another third part router
- A Footer component that appears on multiple pages
- Update GitHub profile with pinned repositories featuring those same projects

## Installation

Steps required to create responsive portfolio using react:

1. Create a new repository.
   - Open GitHub and create new repository.
   - do NOT add a README.md file upon creation.
2. Create a new directory to house new repo on your local computer.
   - Open Terminal (if MacOS), create a new directory using `mkdir project-name`
   - Make sure you are in the _root file_ of your local repository before you create any files.
3. Clone your GitHub repository to your local computer (make sure you are in the root folder of your new directory)
   ```
   git clone ssh-key-from-repository
   ```
4. Create a .gitignore file:

   - type `node_modules` in first line
   - type `.DS_Store` in second line

5. Create a new **package.json** file:

   - Initialize `npm`: `npm init`. This will be used to set up a new or existing npm package. You can customize the fields, or you can continue to press the enter key until you see `0 vulnerabilities`.
   - This will create a `package.json` file and a `package-lock.json` file.

6. Create the base for your react app:

   - Install React using: `npm create-react-app name-of-your-app` see [create-react-app docs](https://create-react-app.dev/docs/getting-started/) for detailed instructions.
   - This will create a base directory called `name-of-your-app` inside the current folder. Inside that directory it will generate the initial project structure and install the transitive dependencies.
   - Once installation is done, you can open your project folder using: `cd name-of-your-app`

7. See the app:
   - Once inside `name-of-your-app` folder run `npm start` in the terminal.
   - If working, you should open http://localhost:3000 in your browser to see your app.

### Quick Installation

1. Clone repo and install packages. Edit scripts within package.json file. npm start to run in integrated terminal, run in browser with localhost:3000.

## Contributing

[Dana Smooke]("https://github.com/dsmooke")

## License

[MIT]("https://opensource.org/licenses/MIT")

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
