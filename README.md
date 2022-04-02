# Creating a random message printer

## First class - Creating a NPM package

- Repository init (git & NPM)
- Creating our source file: *src/index.js*

## Second class - Creating random messages

- Creating our module of random messages
- Creating our *bin* folder for the functionality of our module
- Creating our global file: *bin/global.js*
- Getting our module inside our global file: *global.js*
- Configuring our: *package.json*, adding: `bin` and `preferGlobal`

## Third class - Linking, using and publishing our module

- We linked our project from the main folder: *random_messages*, with the next command: `sudo npm link`, by doing this we could use the command: `random-msg`
- We ran our command: `random-msg`, from the project: *random_messages*
- We made an update from our module: *random-messages* adding new elements to our array of messages
- We update our module: *random_messages* and reinstalled it on our system: `sudo npm install -g <module_route>`
- We made an user on npm web
- We logged in onto our npm account
- We fixed name troubleshooting with our module, new name added: *random_definition*
- We publish our module with the next command: `npm publish`
