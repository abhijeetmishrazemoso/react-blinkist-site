import { Container, Tab, Tabs } from '@material-ui/core';
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
export default function TabbedBooks( {cardsCur, cardsFin}) {
    const [value, setValue] = React.useState(0);

    const handleChg = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    return (
      <Container >
          <Container style={{paddingBottom:20}}>
          <Tabs
            value={value}
            onChange={handleChg}
            textColor="primary"
            centered
            >
                    <Tab label="Currently Reading" />
                    <Tab label="Finished Reading" />
                </Tabs>
                </Container>
                <TabPanel value={value} index={0}>
                    {( cardsCur !== null && cardsCur !== undefined)?cardsCur:" "}
                </TabPanel>
                <TabPanel value={value} index={1} >
                    {(cardsFin !== null && cardsFin!==undefined)?cardsFin:" "}
                </TabPanel>
            
      </Container>  
    );
};
TabbedBooks.args = {
cardsCur: PropTypes.object,
cardsFin: PropTypes.object,
};
