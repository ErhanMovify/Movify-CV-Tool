import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'

import 'normalize.css'

import registerServiceWorker from './registerServiceWorker'
import App from './App'
import {store, persistor} from './configureStore'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker()

injectGlobal`
  html {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }
`
