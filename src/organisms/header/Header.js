import {
   createMuiTheme, Grid, Link, ThemeProvider, Typography
   } from '@material-ui/core';
import React from 'react';
import IconAndSiteNm from '../../atoms/IconAndSiteNm';
import HeaderTextDropDown from '../header-dropdown/HeaderTextDropDown';
import './Header.css';

const Header = ({stateChangeNotify, openModal}) => {
let isModalOpen = false;
const font = "'Raleway', sans-serif";
  const theme = createMuiTheme({
    typography: {
      fontFamily: font,
      button: {
        textTransform: 'none',
      }
    }
    });
    function callDropDown(event){
      event.preventDefault();
      isModalOpen =!isModalOpen;
      openModal(isModalOpen);
    }
    return (
      <>
      <ThemeProvider theme={theme}>
            <Grid container direction="row" spacing={2} style={{height:40,paddingTop: 25}}>
              <Grid item sm={2}>
                <IconAndSiteNm text="Blinkist" />
              </Grid>
                      
              <Grid justify="center" item sm={2} style={{paddingTop:13}}>
                <HeaderTextDropDown text="Explore" fontSize="small" 
                notifyOnStateChange={stateChangeNotify} justify='center'/> 
              </Grid>

              <Grid justify="center" item sm={2} style={{paddingTop:13}}>
                <Typography variant="body1">My Library</Typography>
              </Grid>

              <Grid justify="center" item sm={2} style={{paddingTop:13}}>
                <Link onClick={callDropDown} href="#" color="textPrimary"> 
                  <Typography variant="body1">Add Book</Typography>
                </Link>
              </Grid>
              
              <Grid justify="flex-end" item sm={4} style={{paddingTop:13 }}>
                <HeaderTextDropDown text="Account" fontSize="small" justify='flex-end'/>  
              </Grid>
            </Grid>
      </ThemeProvider>
      </>
    );
};

export default Header;
