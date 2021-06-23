import { Container, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import IconAndSiteNm from '../atoms/IconAndSiteNm';

function Footer() {
    const style = {
        height: 500,
    };
    const imgStyle = {
        height:35,
        width:100,
    };
    const someTopPadding = {
        paddingTop:10
    };
    return (
        <Container maxWidth="md" style={{marginTop:25, paddingBottom:10,margin: 'auto',backgroundColor:'rgba(220,220,240,0.65)'}}>
            <Grid container direction="row" xl={9} lg={10} sm={10} style={{paddingTop:50,marginTop:50, margin:'auto',}}>
                <Grid item container direction="column" md="6">
                    <IconAndSiteNm text="Blinkist"/>
                    <Typography style={{marginTop:10,marginBottom:10}} variant="h6" color="primary">Big ideas in Small Packages
                    start learning now</Typography>
                    <Grid direction="row">
                        <img style={imgStyle} src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"/>
                        <img style={imgStyle} src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0"/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" md="2" >
                    <Typography style={someTopPadding} variant="subtitle1">Editorial</Typography>
                    <Typography style={someTopPadding} variant="caption">What is non Fiction?</Typography>
                    <Typography style={someTopPadding} variant="caption">What to read Next</Typography>
                    <Typography style={someTopPadding} variant="caption">Benefits of Reading</Typography>
                </Grid>
                <Grid item container direction="column" md="2">
                    <Typography style={someTopPadding} variant="subtitle1">Useful Links</Typography>
                    <Typography style={someTopPadding} variant="caption">Pricing</Typography>
                    <Typography style={someTopPadding} variant="caption">What to read Next</Typography>
                    <Typography style={someTopPadding} variant="caption">Benefits of Reading</Typography>
                </Grid>
                <Grid item container direction="column" md="2">
                    <Typography style={someTopPadding} variant="subtitle1">Company</Typography>
                    <Typography style={someTopPadding} variant="caption">About</Typography>
                    <Typography style={someTopPadding} variant="caption">Careers</Typography>
                    <Typography style={someTopPadding} variant="caption">Code of Conduct</Typography>
                </Grid>

            </Grid>
        </Container>
    );
};
export default Footer;