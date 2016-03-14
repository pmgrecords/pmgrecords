# PMG Records

### Installation

0. Install NVM 
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`

0. Install Node 5
`nvm install 5; nvm use 5`

0. Install Gulp
`npm install -g gulp`

0. Clone this repository
 `git clone https://github.com/pmgrecords/pmgrecords.git`

0. Move to the new folder
`cd pmgrecords`

0. Install dependencies
`npm install; bower install`

### Running

0. Run `sudo gulp`

0. The web server is running at http://localhost:80

### Deploying to Github Pages

0. Delete the `dist` folder, if it exists

0. Clone the Github Pages repo into a `dist` folder
`git clone https://github.com/pmgrecords/pmgrecords.github.io.git dist`

0. Build or run the site
`gulp build` or `sudo gulp`

0. If everything looks good, move to the `dist` folder, and commit and push changes 