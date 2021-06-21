import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';


function AppPromotion() {
    const fontBold = {
        fontWeight: 'bolder',
      };
      const imgStyle = {
        height:35,
        width:100,
        alignSelf:"center",
    };
    return (
        <Grid container direction="row" style={{ backgroundColor: '#e5e5e5'}}>
              <Grid md={9} container item direction ="column" style={{textAlign: "left", padding: 20}}>
                <Typography variant="caption" style={{fontWeight:'bold', color: 'red' }}>New</Typography>  
                <Typography variant="body1" style={{fontWeight: 'Bold', paddingBottom: 20 }}>
                  Find AudioBooks on the Blinkist App</Typography>  
                <Typography variant="body2" style={{ fontBold }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat necessitatibus, animi iusto odit ex repudiandae 
                reprehenderit voluptates eveniet, deleniti beatae ipsum non, iste ea consequuntur.</Typography>
              </Grid> 
              <Grid container item direction="column" md={3}>
                    <img style={imgStyle} src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"/>
                    <img style={imgStyle} src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0"/>
              </Grid>
        </Grid>
    );
}

export default AppPromotion;
