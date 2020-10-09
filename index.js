import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'fontsource-roboto';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  ,document.getElementById('root')
)