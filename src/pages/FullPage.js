import { Box, createMuiTheme, Divider, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React from 'react';
import AppPromotion from '../molecules/AppPromotion';
import Footer from '../organisms/Footer';
import ExploreDropDownMenu from '../organisms/header-dropdown/ExploreDropDownMenu';
import Header from '../organisms/header/Header';
import AddBookModal from '../organisms/ModalNewBook';
import TabbedBooks from '../organisms/Drop Down Menu/Tabs/TabbedBooks';
import BookCard from '../organisms/BookCard';



const imageSrc = 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg';

function getNewBookCard(imageSrc,readingTabProp, title, subtitle, index, key, updateState){
  console.log(`index is ${index} and key is ${key}`);
  return (<BookCard  imageSrc={imageSrc} readingTabProp={readingTabProp} 
      title={title} subtitle={subtitle} index={index} key={key} updateState={updateState}/> );
}
function getCompleteTab(currReadingBookCards,currFinishedBookCards){
  return (<TabbedBooks booksCurrReading={currReadingBookCards} booksFinished={currFinishedBookCards}/>);
}

function getDummyNode(index){
  return (<Box component="span" key={index} index={index}></Box>);
}
const font = "'Raleway', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: 'none',
    }
  }
});

function FullPage() {
  const currReading = [];
  const currFinished = [];
  const reading ="reading";
  const finished = "finished";
  let key = 0;
  
  currReading[key] = (<BookCard  imageSrc={imageSrc} readingTabProp={reading} 
      title="Nature and Man" subtitle="Does this not go anywhere?" index={key} key={String(key++)} updateState={updateTabs}/> );
      
  currReading[key]=(<BookCard  imageSrc={imageSrc} readingTabProp={reading} index={key}
          title="Politics & Science" subtitle="There you have it, the yards..." key={String(key++)} updateState={updateTabs}/>);
          
  currReading[key]=(<BookCard  imageSrc={imageSrc} readingTabProp={reading} index={key}
              title="Society and Pschycology" subtitle="Does this have a fortune?" key={String(key++)} updateState={updateTabs}/>);
              
  function addDummyDataToArray(length, array){
      for (let index = 0; index < length; index++) {
          array[index] = getDummyNode(index);
      }
  }
  addDummyDataToArray(currReading.length, currFinished);
  const [completeTab,setCompleteTab] = React.useState(
  getCompleteTab(currReading,currFinished));
      
  function updateTabs(index, previousReadingState){
  console.log(`updateTabs method called with index-${index} & prevReadState- ${previousReadingState}`);
  if(previousReadingState === reading){
      const tempBookCard = currReading[index];
      if(tempBookCard === undefined) {
          return;
      }
      const propss = tempBookCard.props;
      //get a new card with updated state
      currFinished[index] = getNewBookCard(propss.imageSrc, finished,
          propss.title, propss.subtitle, index, index, updateTabs);
          currReading[index] = getDummyNode(index);
      }else{  
          const tempBookCard = currFinished[index];
          const propss = tempBookCard.props;
          currReading[index] = getNewBookCard(propss.imageSrc, reading,
              propss.title, propss.subtitle, index, index, updateTabs);
              currFinished[index] = getDummyNode(index);
          }
          setCompleteTab(getCompleteTab(currReading,currFinished));
      }
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    function getStateChangeFromChildren(state){
        setMenuOpen(state);
    }
    function openTheModal(state){
        setModalOpen(state);
    }
    function onSubmitModal(title, subtitle){
      console.log(`Lengths are ${currReading.length} & ${currFinished.length}`);
      currReading[currReading.length] = getNewBookCard(imageSrc, reading, title, subtitle, 
      currReading.length,currReading.length,updateTabs);
      currFinished[currFinished.length] = getDummyNode(currFinished.length);
      setCompleteTab(getCompleteTab(currReading,currFinished));
    }
    return (
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl" style={{backgroundColor: 'black', margin: 'auto'}}>
              <Grid direction="column" xl={9} lg={10} sm={10} style={{ margin:'auto', backgroundColor: 'white' }}>
              <Container xl={6} maxWidth="md" style={{ backgroundColor: 'white', paddingBottom: 20 }}>
                  <Header stateChangeNotify={getStateChangeFromChildren} openModal={openTheModal}/>
                  <AddBookModal modalOpen={modalOpen} onCancel={openTheModal} onSubmit={onSubmitModal}/>
                  <ExploreDropDownMenu menuOpen={menuOpen}/>
                  <Box height={75} />
                  <Typography variant="h4" style={{textAlign:'left',fontWeight:'bold'}} >My Library</Typography>
                  <Box height={50} />
                  <AppPromotion />
              </Container>
              <Container maxWidth="lg">
                  <Container maxWidth="md"><Divider /></Container>
                    {completeTab}
                  <Footer />
              </Container>
              </Grid>
          </Container>
      </ThemeProvider>
    );
}

export default FullPage;
