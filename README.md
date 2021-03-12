# Project Name : DSI Assignment


## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```


## :bookmark: Table of Contents
- [Built with](#hammer-built-with)
- [Tools and Technologies](#gear-tools-and-technologies)
- [Feature List](#bookmark-feature-list)
- [Installation](#installation)
- [Run and Test](#run)
- [Database Seeding](#floppy_disk-database-seeding)

## :hammer: Built with

- [Express](https://expressjs.com/)
- [MySql](https://www.mysql.com/)
- [Nodejs](https://nodejs./)
- [Bootstrap](http://www.getbootstrap.com/)


# :bookmark: Feature List
* User  
  * Registration
  * Login

  ##  Installation

  ### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn
## Install Process

    $ git clone https://github.com/MohammadAtikurRahman/nodejs-auth-with-mysql.git
    $ cd nodejs-auth-with-mysql
    $ npm install

## install packges
$ npm i mysql

$ npm i nodemon

$ npm i dotenv

$ npm i email-validator

$ npm i express

$ npm i hbs

$ npm i bcryptjs

$ npm i cookie-parser

## Database
1. Extract Database zipped file
2. Import database to the myphpadmin
3. Start Xampp Server 
 ### .env 
DATABASE = nodejs-login

DATABASE_HOST = localhost

DATABASE_USER = root

DATABASE_PASSWORD = 

JWT_SECRET = mysupersecretpassword

JWT_EXPIRES_IN = 90d

JWT_COOKIE_EXPIRES = 90


## Running the project

    $ npm start

## Simple build for production


## Run

[localhost:5000](http://localhost:5000)


### Author

- [Md. Atikur Rahman](https://github.com/MohammadAtikurRahman)