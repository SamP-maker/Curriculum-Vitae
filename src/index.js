import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import Theme from "./theme/Theme";
import App from './App';
import Globalstyle from "./theme/GlobalStyle"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Globalstyle/>
    <App />
</ThemeProvider>


  </React.StrictMode>

);

