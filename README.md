# Personal Website - Tom Brown

This is a Single Page Application to test building a personal website for myself using Node, Express, Vue, and SCSS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

```
A Linux OS
NodeJS
NPM
```

### Installing

Clone GIT repository and download

```
git clone https://github.com/tomrembrown/personalwebsite
```

Build NPM script

```
npm install
```

Create environment file (copy either .env_prod or .env_dev)

```
cp .env_development .env
```

Increase the number of watches allowed for nodemon to work properly

```
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

For development mode, start the server

```
npm run dev
```

In development mode, run webpack-dev server in browser at localhost:8080

For production mode, first build the bundles

```
npm run build
```

In production mode, run the node-express server at localhost:3000

## Built With

* [Node.JS](https://nodejs.org/) - JavaScript runtime that allows server-side JavaScript
* [Express](https://expressjs.com/) - Backend framework
* [Vue.js](https://vuejs.org/) - Frontend framework
* [Bootstrap + Vue](https://bootstrap-vue.js.org/) - Bootstrap based responsive web framework

## Contributing

This is a personal project. Please ask Tom Brown (tom@tomrembrown.com) if you would like to contribute.

## Authors

* **Tom Brown** - *Initial work*

See also the list of [contributors](https://github.com/tomrembrown/QTCommunity/contributors) who participated in this project.

## License

This project is licensed under the MIT license

