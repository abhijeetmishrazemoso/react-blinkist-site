import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import FullPage from './pages/FullPage';
import { BrowserRouter as Router } from 'react-router-dom';

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
    <Router>
      <ThemeProvider theme={theme}>
        <FullPage />
      </ThemeProvider>
    </Router>
  );
}

export default App;
