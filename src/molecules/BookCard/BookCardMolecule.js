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
                <Box className="internal-grid-div">
                    <Grid container direction="row" style={widthText}>
                        <Grid item>
                            <AccessTimeIcon />
                        </Grid>
                        <Grid item style={{alignItems: 'center'}}>
                            <Typography variant="body2">15-minute read</Typography>
                        </Grid>
                        </Grid>
                    <Grid direction="row" style={widthText}><PersonIcon /> <Typography variant="body2">17.1k reads</Typography></Grid>
                </Box>
                <LinearProgress variant='determinate' value={progress}/>
            </React.Fragment>);
}


export default BookCardMolecule;