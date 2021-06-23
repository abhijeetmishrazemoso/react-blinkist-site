import React from 'react';
import AccessTime from '@material-ui/icons/AccessTime';
import {AudiotrackOutlined} from '@material-ui/icons';
import { Grid, Typography } from '@material-ui/core';

function BookReadingAudioDetails() {
    return (
        <Grid container direction="row" style={{padding:5, color:'rgba(20,20,50,.7)'}}>
                <Grid item>
                    <AccessTime fontSize="large"/>
                </Grid>
                <Grid item style={{alignSelf:"center",paddingLeft:10}}>
                    <Typography variant="body2">
                        15-minute read
                    </Typography>
                </Grid>
                <Grid item>
                    &nbsp;&nbsp;&nbsp;<AudiotrackOutlined fontSize="large"/>
                </Grid>
                <Grid item style={{alignSelf:"center",paddingLeft:10}}>
                    <Typography variant="body2">
                        Audio Available
                    </Typography>
                </Grid>
        </Grid>
    );
}

export default BookReadingAudioDetails;
