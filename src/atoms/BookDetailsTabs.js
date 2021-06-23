import React from 'react';
import { Box, Grid, Typography, Tabs, Tab} from '@material-ui/core';

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

function BookDetailsTabs({desc}) {
    const [value, setValue] = React.useState(0);
    const handleChg = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box container style={{paddingTop:20}}>
            <Tabs value={value} onChange={handleChg} textColor="primary">
                <Tab label="Synopsis" />
                <Tab label="Who is it for?" />
                <Tab label="About the Author"/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <Grid container direction="row" justify="flex-start">
                    <Typography variant="body2" style={{margin:15}}>
                    {desc}</Typography>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} >
                <Grid container direction="row" justify="flex-start">
                    <Typography variant="body2" style={{margin:15}}>
                        Dummy Text 2
                    </Typography>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2} >
                <Grid container direction="row" justify="flex-start">
                    <Typography variant="body2" style={{margin:15}}>
                        Dummy Text 3
                    </Typography>
                </Grid>
            </TabPanel>
        </Box>
    );
}

export default BookDetailsTabs;
