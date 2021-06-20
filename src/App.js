import React from 'react';
import './App.css';
import { Box, Container, createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import Header from './organisms/header/Header';
import { Typography } from '@material-ui/core';
// import BookCard from './organisms/BookCard';
import Divider from '@material-ui/core/Divider';
import AppPromotion from './molecules/AppPromotion';
import TabsWithCards from './organisms/Drop Down Menu/Tabs/TabsWithCards';
import Footer from './organisms/Footer';



const font = "'Raleway', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: 'none',
    }
  }
});
const imageSrc = 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" style={{backgroundColor: 'black', margin: 'auto'}}>
        <Grid direction="column" xl={9} lg={10} sm={10} style={{ margin:'auto', backgroundColor: 'white' }}>
          <Container xl={6} maxWidth="md" style={{ backgroundColor: 'white', paddingBottom: 20 }}>
            <Header />
            <Box height={100} />
            <Typography variant="h4" style={{textAlign:'left'}} >My Library</Typography>
            <Box height={50} />
            <AppPromotion />
          </Container>
          <Container maxWidth="lg">
          <Container maxWidth="md"><Divider /></Container>
          <TabsWithCards imageSrc={imageSrc} />
          <Footer />
          {/* <Grid container direction="row" justify="center">
              <BookCard  imageSrc={imageSrc} title="Nature and Man" subtitle="Does this not go anywhere?" />
              <BookCard  imageSrc={imageSrc} title="Nature and Man" subtitle="Does this not go anywhere?" />
              <BookCard  imageSrc={imageSrc} title="Nature and Man" subtitle="Does this not go anywhere?" />
          </Grid> */}
          </Container>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
