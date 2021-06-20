import React from 'react';
import { Box, Grid, LinearProgress, Typography } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonIcon from '@material-ui/icons/Person';
import Image from "../../atoms/Image";
import './BookCard.css';


function BookCardMolecule({imageSrc, progress, title, subtitle, ...props}){
    const widthText = {
        paddingBottom:10, paddingLeft:10
    };
    
    return (
            <React.Fragment>
                <Box className="flex-img" style={{ paddingLeft: 20, paddingRight: 20}}>
                    <Image src={imageSrc}/>
                </Box>
                <Typography variant="h6" style={widthText}>{title}</Typography>
                <Typography variant="body1" style={widthText}>{subtitle}</Typography>
                <Box display="flex" style={widthText}>
                    <Box display="flex" wrap="nowrap">
                            <AccessTimeIcon />&nbsp;
                            <Typography variant="body2">15-minute read</Typography>
                    </Box>
                    <Box display="flex" justify="flex-end" 
                    style={{textAlign:"left", paddingLeft: 5, paddingRight:5}} wrap="nowrap">
                            <PersonIcon />&nbsp;
                            <Typography variant="body2">17.5K reads</Typography>
                    </Box>
                    
                </Box>
                <LinearProgress variant='determinate' value={progress}/>
            </React.Fragment>);
}


export default BookCardMolecule;