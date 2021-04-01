import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';
import App from './App';

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { orange } from '@material-ui/core/colors';
import "@fontsource/roboto"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1890FF",
    },
    secondary: {
      main: orange[400],
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();