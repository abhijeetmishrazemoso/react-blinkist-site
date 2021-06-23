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
    const imageStyle = {
        justifyContent: 'flex-start',
        width: 260,
        height: 285,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    
    };
    return (
            <React.Fragment>
                <Box className="flex-img">
                    <Image src={imageSrc} styleObject={imageStyle}/>
                </Box>
                <Typography variant="h6" style={widthText}>{title}</Typography>
                <Typography variant="body1" style={widthText}>{subtitle}</Typography>
                <Box display="flex" style={widthText}>
                    <Box display="flex" wrap="nowrap">
                            <AccessTimeIcon fontSize="small"/>&nbsp;
                            <Typography variant="caption">15-minute read</Typography>
                    </Box>
                    <Box display="flex" justify="flex-end" 
                    style={{marginLeft: 35, paddingRight:5}} wrap="nowrap">
                            <PersonIcon fontSize="small"/>&nbsp;
                            <Typography variant="caption">17.5K reads</Typography>
                    </Box>
                    
                </Box>
                <LinearProgress variant='determinate' value={progress}/>
            </React.Fragment>);
}


export default BookCardMolecule;