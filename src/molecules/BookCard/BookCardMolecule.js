import React from 'react';
import { Box, Grid, LinearProgress, Typography } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonIcon from '@material-ui/icons/Person';
import Image from "../../atoms/Image";
import './BookCard.css';


function BookCardMolecule({imageSrc, progress, title, subtitle, ...props}){
    const widthText = {
        paddingBottom:15, paddingLeft:10
    };
    return (
            <React.Fragment>
                <Box className="flex-img" style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 25}}>
                    <Image src={imageSrc}/>
                </Box>
                <Typography variant="h6" style={widthText}>Building an inclusive Organisation!</Typography>
                <Typography variant="body1" style={widthText}>Stephen-Frost, Raafi Karim...</Typography>
                <Grid container direction="row">
                    <Grid item direction="row" style={widthText}>
                        <Grid item>
                            <AccessTimeIcon />&nbsp;
                        </Grid>
                        <Grid item style={{alignItems: 'center'}}>
                            <Typography variant="body2">15-minute read</Typography>
                        </Grid>
                    </Grid>
                    <Grid item direction="row" justify="flex-end" style={{textAlign:"left", paddingLeft: 10}} wrap="nowrap">
                        <Grid item>
                            <PersonIcon />&nbsp;
                        </Grid>
                        <Grid item style={{alignItems: 'center'}}>
                            <Typography variant="body2">17.5K reads</Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>
                <LinearProgress variant='determinate' value={progress}/>
            </React.Fragment>);
}


export default BookCardMolecule;