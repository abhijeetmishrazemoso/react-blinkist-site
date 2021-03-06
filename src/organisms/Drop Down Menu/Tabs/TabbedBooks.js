import { Container, Grid, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function TabPanel({ children, value, index, ...other }){
    return (
        <div 
        hidden ={!(value === index)}
        {...other}
        > 
            {(value === index && (children))?children:' '}
        </div>
    );
}
function findIfEmpty(arrayObj){
    for (let index = 0; index < arrayObj.length; index++) {
        const element = arrayObj[index];
        if(!(element === null)){
            return false;
        }
    }
    return true;
}
export default function TabbedBooks( {booksCurrReading, booksFinished}) {
    const [value, setValue] = React.useState(0);

    const handleChg = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    let renderBooksCurrentReading,renderBooksFinished;

    const renderWhenEmpty = <Container maxWidth="sm" style={{height:250}}></Container>;
    
    if(findIfEmpty(booksCurrReading)){
        renderBooksCurrentReading = renderWhenEmpty;
    }else{
        renderBooksCurrentReading = booksCurrReading;
    }
    if( findIfEmpty(booksFinished) ){
        renderBooksFinished = renderWhenEmpty;
    }else{
        renderBooksFinished = booksFinished;
    }
    return (
      <Container >
          <Container style={{paddingBottom:20}} maxWidth="md">
          <Tabs
            value={value}
            onChange={handleChg}
            textColor="primary"
            >
                    <Tab label="Currently Reading" />
                    <Tab label="Finished Reading" />
                </Tabs>
                </Container>
                <TabPanel value={value} index={0}>
                     <Container maxWidth="md"> 
                        <Grid container direction="row" style={{margin:'auto',minHeight:480}} justify="flex-start">
                        {renderBooksCurrentReading}
                        </Grid>
                     </Container>
                </TabPanel>
                <TabPanel value={value} index={1} >
                <Container maxWidth="md"> 
                    <Grid container direction="row" style={{margin:'auto', minHeight:480}} justify="flex-start">
                        {renderBooksFinished}
                    </Grid>
                </Container>
                </TabPanel>
            
      </Container>  
    );
};
TabbedBooks.args = {
    booksCurrReading: PropTypes.array,
    booksFinished: PropTypes.array,
};
