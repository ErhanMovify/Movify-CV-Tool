import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// We use normalize.css to reset and normalize all browser styles
import 'normalize.css';

import store, { persistor } from './store';

// Import our theme with all the variables that we defined
import theme from './styles/Theme';
// Import our global styles
import './styles/Global';

import MainContainer from './containers/MainContainer';

const Index = () => (
  <Provider store={store}>
    {/* Provide react-redux with our store */}
    <PersistGate loading={null} persistor={persistor}>
      {/* The ThemeProvider wraps our app so that the theme variables are available to all our
     styled components */}
      <ThemeProvider theme={theme}>
        <MainContainer />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('index'));
