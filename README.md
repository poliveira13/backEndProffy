# backEndProffy<div align="center">

    <img width="500px" align="center" src="https://user-images.githubusercontent.com/54639269/89223832-dd796380-d5ad-11ea-9a39-fc852538ca13.png"></img>

</div>

<p align="center">
    Online teaching platform made with React Native using Typescript during the NLW (Next Level Week) #02</a>🚀
</p>

#### Requirements

- [Node.js](https://nodejs.org/en)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo](https://expo.io/)

##### Back-End

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
# Entering in back-end directory
$ yarn install
```

> The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in back-end directory
$ chdir server

# Installing depencies
$ yarn add @types/cors -D
$ yarn add @types/express -D
$ yarn add ts-node-dev -D
$ yarn add knex
$ yarn add sqlite3
```

#### Running

To start the Back Server run the command

```ps
# Entering in Server directory
$ chdir server

# Run the Back Server
$ yarn start
```

### Create a new Data Base

```ps
# In terminal
$ yarn knex:migrate
```

### Roll Back Data Base

```ps
# In terminal
$ yarn knex:migrate:rollback
```

### VS Code extension SQLite

<a
href="https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite"
alt="Sqlite extension"
target="blank"

>
