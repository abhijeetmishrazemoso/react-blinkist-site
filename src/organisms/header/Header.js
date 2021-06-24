import {
  Box,
   createMuiTheme, Grid, Icon, Link, ThemeProvider, Typography, TextField
   } from '@material-ui/core';
import React from 'react';
import IconAndSiteNm from '../../atoms/IconAndSiteNm';
import HeaderTextDropDown from '../header-dropdown/HeaderTextDropDown';
import './Header.css';
import Image from '../../atoms/Image';
import { Container } from '@material-ui/core';

const Header = ({stateChangeNotify, openModal, updateSearchValue}) => {
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
    const [accountMenuOpen,setAccountMenuOpen] = React.useState("none");
    function toggleVisible(){
      if(accountMenuOpen ==="none"){
        setAccountMenuOpen("flex");
      }else{
        setAccountMenuOpen("none");
      }
    }
    function onChg(ev){
      if(updateSearchValue){
        console.log(ev.target.value);
      updateSearchValue(ev.target.value);
      }
    }
    const [displaySearchBar, setDisplaySearchBar] = React.useState("none");
    function toggleSearch(){
      if(displaySearchBar==="none"){
        setDisplaySearchBar("block");
      }else{
        setDisplaySearchBar("none");
      }
    }
    const textFieldContainerStyle = {
      width:200,
      position:'absolute', 
      top:25,
      right: 680, 
      zIndex:10,
      backgroundColor: 'white'};
    return (
      <ThemeProvider theme={theme}>
            <Grid container direction="row" spacing={2} style={{height:40,paddingTop: 25}}>
              <Grid item sm={2}>
                <IconAndSiteNm text="Blinkist" />
              </Grid>
                      
              <Grid justify="center" item sm={2} style={{paddingTop:13}}>
                <HeaderTextDropDown text="Explore" fontSize="small" 
                notifyOnStateChange={stateChangeNotify} justify='center'/> 
              </Grid>
              <Grid container direction="row" justify="center" item sm={2} style={{paddingTop:13}}>
                <Box component="span" onClick={toggleSearch}>
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
                  styleObject={{height:25,width: 25}} />
                </Box>
                  <Container maxWidth="xs" component="div" style={textFieldContainerStyle}>
                      <Box display={displaySearchBar}>
                        <TextField placeholder="Search Titles" onChange={onChg} style={{width:150}}/>
                      </Box>
                </Container>
              </Grid>
              <Grid justify="center" item sm={2} style={{paddingTop:13}}>
                <Typography variant="body1">My Library</Typography>
              </Grid>

              <Grid justify="center" item sm={2} style={{paddingTop:13}}>
                <Link onClick={callDropDown} href="#" color="textPrimary"> 
                  <Typography variant="body1">Add Book</Typography>
                </Link>
              </Grid>
              
              <Grid justify="flex-end" item sm={2} style={{paddingTop:13 }}>
                <Link onClick={toggleVisible }>
                  <HeaderTextDropDown text="Account" fontSize="small" justify='flex-end'/>
                </Link> 
                {/* <AccountDropDownMenu display={accountMenuOpen}/> */}
              </Grid>
            </Grid>
      </ThemeProvider>
    );
};

export default Header;
