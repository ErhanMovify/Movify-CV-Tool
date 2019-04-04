# Movify-CV-Tool
CV creation tool for Movify

### Project structure

The project is split in the front-end and the server part for the cv generation and front end serving.

You can find the server at the **source** and the app under the **app** folder.

> Don't forget to add the **.env** file at root folder and on the server when deploying.

```
  .
  ├──app
  │   └── src
  │       ├── components      # Generic and reusable components
  │       ├── containers      # App components
  │       ├── images
  │       ├── reducers        # App reducers (actions are in the reducer files)
  │       ├── styles          # Check styled-components
  │       ├── utils           # Utilitaries
  │       └── ...
  ├──resources
  │   └── template.docx       # CV template
  ├── ...                     # Server files
  ├── .env                    # Environment file
  └── README.md
```

### Main dependencies

- Component styling : [styled-components](https://www.styled-components.com/)
- Redux : [redux and react-redux](https://github.com/reduxjs/react-redux)
- Data persistance : [redux-persist](https://github.com/rt2zz/redux-persist)
- DOCX generation : [docxtemplater](https://docxtemplater.com/)
- Dropbox SDK : [dropbox](https://github.com/dropbox/dropbox-sdk-js)
  - A Dropbox app has been created on the marketing account.
  - The dropbox folder in which cvs are uploaded is identified by its unique id statically in the code.

### Start project locally without server

```
cd app
npm i
npm start
```

### Start project locally with server

```
cd app
npm i
npm run-script build
cd ..
npm i
npm start
```

### Deploy

Start SSH session on OVH server [vps542839.ovh.net](http://vps542839.ovh.net).

Pull changes on git repository.

Update or add **.env** if necessary.

Start node scripts. 

[forever](https://www.npmjs.com/package/forever) is installed globally so you can use it to start the project.

```
git pull
cd app
npm i
npm run-script build
cd ..
npm i
forever start server.js
```
