import React from 'react'
import ReactDOM from 'react-dom'
import {injectGlobal} from 'styled-components'

import 'normalize.css'

import registerServiceWorker from './registerServiceWorker'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()

injectGlobal`
  html {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }
`
