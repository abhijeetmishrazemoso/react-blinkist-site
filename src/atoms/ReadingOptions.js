import React from 'react';
import { Grid, Button, Container, Tab, Tabs, Typography } from '@material-ui/core';
import { ArrowForwardSharp, ShoppingCartRounded } from '@material-ui/icons';

const buttonStyle= {
    color:"darkblue", 
    backgroundColor: '#69E181',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10,
    fontWeight:'lighter',
    fontSize: 11
};
const buttonStyle1= {
    color:"#5FD694", 
    backgroundColor: '#fff',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10,
    fontWeight:'bold',
    fontSize: 11,
    border: '1px dotted black',
};
const startIcon = <ShoppingCartRounded fontSize="small" style={{color:"black"}}/>;

function ReadingOptions() {
    return (
        <Grid container direction="row" style={{padding:5}}>
            <Grid item style={{paddingRight:15,padding:5, marginRight:20}}>
                <Button style={buttonStyle} size="small">Add to Library</Button> 
            </Grid>
            <Grid item style={{paddingRight:15,padding:5, marginRight:20}}>
                &nbsp;
                <Button startIcon={startIcon} variant="outlined" style={buttonStyle1} size="small">
                    Add to Library
                </Button> 
            </Grid>
            <Grid item style={{paddingRight:15,padding:5, marginRight:20, alignSelf:'center',color:'rgba(50,50,50,.75)'}} >
                <Typography variant="body1">Send to Kindle <ArrowForwardSharp /> </Typography>
            </Grid>
        </Grid>
    );
}

export default ReadingOptions;
