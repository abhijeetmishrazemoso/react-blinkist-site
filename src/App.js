import React from 'react';
import './App.css';
import { Box, Container, createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import Header from './organisms/header/Header';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import BookCard from './organisms/BookCard';


const font = "'Raleway', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: 'none',
    }
  }
});
const fontBold = {
  fontWeight: 'fontWeightBold',
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" style={{backgroundColor: 'black'}}>
        <Grid direction="column" xl={9} style={{ backgroundColor: 'white' }}>
          <Container xl={6} maxWidth="md" style={{ backgroundColor: 'white', paddingBottom: 20 }}>
            <Header />
            <Box height={100} />
            <Typography variant="h4" style={{textAlign:'left'}} >My Library</Typography>
            <Box height={50} />
            <Grid container direction="row" style={{ backgroundColor: '#e5e5e5'}}>
              <Grid fontWeight="fontWeightBold" md={9} container item direction ="column" style={{textAlign: "left", padding: 20}}>
                <Typography variant="caption" style={{ color: 'red' }}>New</Typography>  
                <Typography variant="body1" style={{fontWeight: 'fontWeightBold', paddingBottom: 20 }}>
                  Find AudioBooks on the Blinkist App</Typography>  
                <Typography variant="body2" style={{ fontBold }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat necessitatibus, animi iusto odit ex repudiandae 
                reprehenderit voluptates eveniet, deleniti beatae ipsum non, iste ea consequuntur.</Typography>
              </Grid> 
              <Grid container item direction="column" md={3}>
                <CardMedia image="https://www.nicepng.com/png/detail/222-2229091_apple-and-play-store-joint-logo-available-on.png"
                 style={{padding:10, width:200,height:150}}/>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="lg">
            <Grid container direction="row" xl={9} justify="center">
              <Grid item style={{margin:10}} lg={3} sm={6} md={4} xs={12}>
                <BookCard imageSrc="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
                title="Nature and Man" subtitle="Does this not go anywhere?" />
              </Grid>
              <Grid item style={{margin:10}} lg={3} sm={6} md={4} xs={12} >
                <BookCard imageSrc="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
                title="Nature and Man" subtitle="Does this not go anywhere?" />
              </Grid>
              <Grid item style={{margin:10}} lg={3} sm={6} md={4} xs={12}>
                <BookCard imageSrc="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
                title="Nature and Man" subtitle="Does this not go anywhere?" />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
