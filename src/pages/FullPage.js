import { Box, createMuiTheme, Divider, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React from 'react';
import AppPromotion from '../molecules/AppPromotion';
import Footer from '../organisms/Footer';
import Header from '../organisms/header/Header';
import AddBookModal from '../organisms/ModalNewBook';
import TabbedBooks from '../organisms/Drop Down Menu/Tabs/TabbedBooks';
import BookCard from '../organisms/BookCard';
import ExploreDropDownMenuFin from '../molecules/DropDown-Menu/ExploreDropDownMenuFin';

const imageSrc = 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg';
const categories = ['EntrepreneurShip', 'Science', 'Economics'];
const font = "'Raleway', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: 'none',
    }
  }
});
const bookCardDefaultDisplay = true;

function getNewBookCard(imageSrc,readingTabProp, title, subtitle, index, key, updateState, display, category){
  return (<BookCard  imageSrc={imageSrc} readingTabProp={readingTabProp} 
      title={title} subtitle={subtitle} index={index} key={key} updateState={updateState} display={display} category={category}/> );
}
function getCompleteTab(currReadingBookCards,currFinishedBookCards){
  return (<TabbedBooks booksCurrReading={currReadingBookCards} booksFinished={currFinishedBookCards}/>);
}

function getDummyNode(index){
  return (<Box component="span" key={index} index={index} dummy={'exists'}></Box>);
}

function FullPage() {
  const currReading = [];
  const currFinished = [];
  const reading ="reading";
  const finished = "finished";
  let categoryFilterText ='';
  let searchFilterText = '';
  let key = 0;
  
  currReading[key] = (getNewBookCard(imageSrc, reading, "Nature and Man", "Ryan Holiday, Stephen Hansel", key, key, 
  updateTabs, bookCardDefaultDisplay, categories[0]));
  key++;
  currReading[key]=(getNewBookCard(imageSrc, reading, "Politics & Science", "There you have it, the yards...", key, key, 
  updateTabs, bookCardDefaultDisplay, categories[1]));
  key++;
  currReading[key]=(getNewBookCard(imageSrc, reading, "Society and Pschycology", "Does this have a fortune?", key, key, 
  updateTabs, bookCardDefaultDisplay, categories[2]));
  key++;
  currReading[key]=(getNewBookCard(imageSrc, reading, "Bring your Human to Work", "Beyond Entrepreneurship", key, key, 
  updateTabs, bookCardDefaultDisplay, categories[1]));
  key++;
  currReading[key]=(getNewBookCard(imageSrc, reading, "The Fate of Food", "Amanda Little", key, key, 
  updateTabs, bookCardDefaultDisplay, categories[2]));
  key++;

  function addDummyDataToArray(length, array){
      for (let index = 0; index < length; index++) {
          array[index] = getDummyNode(index);
      }
  }
  addDummyDataToArray(currReading.length, currFinished);
  const [completeTab,setCompleteTab] = React.useState(
  getCompleteTab(currReading,currFinished));
      
  function updateTabs(index, previousReadingState){
  if(previousReadingState === reading){
      const tempBookCard = currReading[index];
      const propss = tempBookCard.props;
      //get a new card with updated state
      currFinished[index] = getNewBookCard(propss.imageSrc, finished,
          propss.title, propss.subtitle, index, index, updateTabs,true,propss.category);
          currReading[index] = getDummyNode(index);
      }else{  
          const tempBookCard = currFinished[index];
          const propss = tempBookCard.props;
          currReading[index] = getNewBookCard(propss.imageSrc, reading,
              propss.title, propss.subtitle, index, index, updateTabs, true,propss.category);
              currFinished[index] = getDummyNode(index);
      }
      // if(categoryFilterText !==''){
      //   filterByCategory(searchFilterText,currReading,currFinished);
      //   //since setComplete tab is present in above
      //   return;
      // }
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
      currReading[currReading.length] = getNewBookCard(imageSrc, reading, title, subtitle, 
      currReading.length,currReading.length,updateTabs);
      currFinished[currFinished.length] = getDummyNode(currFinished.length);
      setCompleteTab(getCompleteTab(currReading,currFinished));
    }
    function makeAllVisible(array){
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const props = element.props;
        if(props.dummy !== undefined) {
          console.log(`MakeAll VisibleFunc - props.dummy ${props.dummy}`);
          continue;
        }
        array[index] = getNewBookCard(imageSrc, props.readingTabProp, props.title, props.subtitle,
          props.index, props.index, updateTabs,true, props.category);
      }
      return array;

    }
    function filterBookCardsByTitle(searchText){
      searchFilterText = searchText;
      const currReading = completeTab.props.booksCurrReading;
      const currFinished = completeTab.props.booksFinished;
      for (let index = 0; index < currReading.length; index++) {
        const element = currReading[index];
        const props = element.props;
        
        console.log(props.display);
        const elementFin = currFinished[index];
        const propsFin = elementFin.props;
        if(props.dummy !== undefined){
          if(propsFin.title.toLowerCase().includes(searchText.toLowerCase())){
            currFinished[index] = getNewBookCard(imageSrc,finished,propsFin.title,propsFin.subtitle,
              propsFin.index,propsFin.index,updateTabs,true,propsFin.category);
          }
          else{
            currFinished[index] = getNewBookCard(imageSrc,finished,propsFin.title,propsFin.subtitle,
              propsFin.index,propsFin.index,updateTabs,false,propsFin.category);
          }
        } else{
              if(props.title.toLowerCase().includes(searchText.toLowerCase())){
                currReading[index] = getNewBookCard(imageSrc,reading,props.title,props.subtitle,
                  props.index,props.index,updateTabs,true,props.category);
              }
              else{
                currReading[index] = getNewBookCard(imageSrc,reading,props.title,props.subtitle,
                  props.index,props.index,updateTabs,false,props.category);
              }
          }
      }
      setCompleteTab(getCompleteTab(currReading,currFinished));
    }
    function filterByCategory(category, currReadingUnderProcess, currFinishedUnderProcess){
      categoryFilterText = category;
      console.log(category);
      let currReading, currFinished;
      if(currReadingUnderProcess !== undefined && currFinishedUnderProcess !== undefined){
        currReading = currReadingUnderProcess;
        currFinished = currFinishedUnderProcess;
      }else{
        currReading = makeAllVisible(completeTab.props.booksCurrReading);
        currFinished = makeAllVisible(completeTab.props.booksFinished);
      }
      for (let index = 0; index < currReading.length; index++) {
        const element = currReading[index];
        const props = element.props;
        
        if(props.dummy === undefined && element.props.category !== category){
          currReading[index] = getNewBookCard(imageSrc,reading,props.title,props.subtitle,
            props.index,props.index,updateTabs,false,props.category);
        }
        const elementFin = currFinished[index];
        const propsFin = elementFin.props;
        if(propsFin.dummy === undefined && propsFin.category !== category){
          currFinished[index] = getNewBookCard(imageSrc,finished,propsFin.title,propsFin.subtitle,
            propsFin.index,propsFin.index,updateTabs,false,propsFin.category);
        }
      }
      setCompleteTab(getCompleteTab(currReading,currFinished));
      console.log(`Before ${menuOpen}`);
      setMenuOpen(!menuOpen);
      console.log(`After ${menuOpen}`);
      // console.log(menuOpen);
    }
    return (
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl" style={{backgroundColor: 'black', margin: 'auto'}}>
              <Grid direction="column" xl={9} lg={10} sm={10} style={{ margin:'auto', backgroundColor: 'white' }}>
              <Container maxWidth="md" style={{ backgroundColor: 'white', paddingBottom: 20 }}>
                  <Header stateChangeNotify={getStateChangeFromChildren} openModal={openTheModal} 
                  dropDownState={menuOpen} updateSearchValue={filterBookCardsByTitle}/>
                  <AddBookModal modalOpen={modalOpen} onCancel={openTheModal} onSubmit={onSubmitModal}/>
                  <Container component="div" style={{width:900,top:60,position:'absolute',margin:'auto',backgroundColor:'#F1F6F4'}}>
                    <ExploreDropDownMenuFin menuOpen={menuOpen} filterByCategory={filterByCategory}
                    categories={categories}
                    />
                  </Container>
                  <Box height={75} />
                  <Typography variant="h4" style={{textAlign:'left',fontWeight:'bold'}} >My Library</Typography>
                  <Box height={50} />
                  <AppPromotion />
              </Container>
              <Container maxWidth="lg">
                  <Container maxWidth="md"><Divider /></Container>
                    {completeTab}
                  </Container>
                <Footer />
              </Grid>
          </Container>
      </ThemeProvider>
    );
}

export default FullPage;
