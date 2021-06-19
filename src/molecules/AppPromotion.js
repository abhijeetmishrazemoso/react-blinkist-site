import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';


function AppPromotion() {
    const fontBold = {
        fontWeight: 'fontWeightBold',
      };
    return (
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
    );
}

export default AppPromotion;
