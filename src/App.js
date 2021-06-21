import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import FullPage from './pages/FullPage';

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
      <FullPage />
    </ThemeProvider>
  );
}

export default App;
