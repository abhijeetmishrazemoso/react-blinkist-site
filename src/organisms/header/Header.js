import {
   createMuiTheme, Grid, ThemeProvider, Typography
   } from '@material-ui/core';
import React from 'react';
import IconAndSiteNm from '../../atoms/IconAndSiteNm';
import HeaderTextDropDown from '../header-dropdown/HeaderTextDropDown';
import './Header.css';

const Header = () => {

const font = "'Raleway', sans-serif";
  const theme = createMuiTheme({
    typography: {
      fontFamily: font,
      button: {
        textTransform: 'none',
      }
    }
    });
// const classes = useStyles();
    return (
      <>
      <ThemeProvider theme={theme}>
            <Grid container direction="row" spacing={5} style={{paddingTop: 25}}>
              <Grid item sm={2}>
                <IconAndSiteNm text="Blinkist" />
              </Grid>
                      
              <Grid justify="center" item sm={2}>
                <HeaderTextDropDown text="Explore" fontSize="small" /> 
              </Grid>

              <Grid justify="center" item sm={2}>
                <Typography variant="body1">My Library</Typography>
              </Grid>

              <Grid justify="center" item sm={2}>
                <Typography variant="body1">Add Book</Typography>
              </Grid>
              
              <Grid justify="flex-end" item sm={4} style={{ textAlign: 'right' }}>
                <HeaderTextDropDown justify="flex-end" text="Account" fontSize="small" />  
              </Grid>
            </Grid>
      </ThemeProvider>
      </>
    );
};

export default Header;
