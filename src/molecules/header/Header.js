import {
   Container, createMuiTheme, Grid, makeStyles, ThemeProvider, Typography
   } from '@material-ui/core';
import React from 'react';
import HeaderExploreDropDown from '../../atoms/header/HeaderExploreDropDown';
import IconAndSiteNm from '../../atoms/IconAndSiteNm';
import './Header.css';

const Header = () => {
const useStyles = makeStyles({
  root: {
      padding: 0, 
      backgroundColor: 'paper',  
      height: 500, 
  }
});

const font = "'Raleway', sans-serif";
  const theme = createMuiTheme({
    typography: {
      fontFamily: font,
      button: {
        textTransform: 'none',
      }
    }
    });
const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" className={classes.root}>
          <Container maxWidth="md" style={{ backgroundColor: 'white' }}>
            <Grid container direction="row" spacing={5}>
              <Grid item sm={2}>
                <IconAndSiteNm text="Blinkist" />
              </Grid>
                      
              <Grid justify="center" item sm={2}>
                <HeaderExploreDropDown text="Explore" fontSize="large" /> 
              </Grid>

              <Grid justify="center" item sm={2}>
                <Typography variant="h6">My Library</Typography>
              </Grid>

              <Grid justify="center" item sm={2}>
                <Typography variant="h6">Add Book</Typography>
              </Grid>
              
              <Grid justify="flex-end" item sm={4} style={{ textAlign: 'right' }}>
                <HeaderExploreDropDown justify="flex-end" text="Account" fontSize="large" />  
              </Grid>
            </Grid>
          </Container>
        </Container>
      </ThemeProvider>
    );
};

export default Header;