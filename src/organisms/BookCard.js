import React from 'react';
import BookCardMolecule from '../molecules/BookCard/BookCardMolecule';
import { Box, Button, Grid, Link } from '@material-ui/core';
import './BookCard.css';
import PropTypes from 'prop-types';

function BookCard({imageSrc, title, subtitle, readingTabProp,index, key, updateState, display, category}){
    const reading = "reading";
    const finished = "finished";
    const revealGrid = "block";
    const hideGrid = "none";
    const [progress,setProgress] = React.useState(0);
    const [readingState,setReading] = React.useState(readingTabProp);
    const [visibility, setVisibility] = React.useState(revealGrid);
    const increaseProgress = () => {
        if( progress >= 100 ){
            setProgress(0);
            return;
        }
        setProgress(progress+10);
    };
    const checkAndSetReading = () =>{
        console.log(`reading is ${readingState}`);
        if(readingState === reading){
            setReading(finished);
            console.log(`Key from BookCard ${index}`);
            updateState(index,reading);
            return;
        }
        setReading(reading);
        console.log(`Key from BookCard ${index}`);
        updateState(index, finished);
        if(readingState === readingTabProp) {
            console.log(`setVisibility ${hideGrid}`);
            setVisibility(hideGrid);
        }else{
            console.log(`setVisibility ${revealGrid}`);
            if(display){
                setVisibility(revealGrid);
            }
        }
    };
    
    console.log(`display is ${display} in title-${title}`);
    return (<Link href="#">
                <Box component="div" style={{padding:15}} display={display?visibility:'none'}>
                    <Grid item lg={3} sm={6} md={4} xs={12} >
                        <Box className="flex-div">
                            <BookCardMolecule imageSrc={imageSrc}
                            name='nice' progress={progress} title={title} subtitle={subtitle} />
                                <Box style={{ padding: 2 }}>
                                    <Box style={{textAlign: "center"}} display="flex" flexDirection="row">
                                        <Box p={1}>
                                            <Button variant='contained' color='primary' onClick={increaseProgress}
                                            style={{marginBottom:5}} size="small">Read More!
                                            </Button>
                                        </Box>
                                        <Box p={1}>
                                            <Button style={{marginBottom:5}} variant='contained' color='primary' onClick={checkAndSetReading} 
                                            size="small">
                                                {readingState === reading?"Finished Reading":"Currently Reading"}
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                        </Box>
                    </Grid>
                </Box>
            </Link>
    );
}

export default BookCard;
BookCard.args ={
    display: PropTypes.bool,
    imageSrc:PropTypes.string, 
    title:PropTypes.string, 
    subtitle:PropTypes.string, 
    readingTabProp:PropTypes.string,
    index:PropTypes.number, 
    key: PropTypes.number, 
    updateState:PropTypes.func, 
    category: PropTypes.string,
};