import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './organisms/header/Header';


const font = "'Raleway', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: 'none',
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
