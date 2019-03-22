# Movify-CV-Tool
CV creation tool for Movify

### Project structure

The project is split in the front-end and the server part for the cv generation and front end serving.

You can find the server at the **source** and the app under the **app** folder.

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
  └── README.md
```

### Main dependencies

- Component styling : [styled-components](https://www.styled-components.com/)
- Redux : [redux and react-redux](https://github.com/reduxjs/react-redux)
- Data persistance : [redux-persist](https://github.com/rt2zz/redux-persist)
- DOCX generation : [docxtemplater](https://docxtemplater.com/)

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

Start node scripts.
