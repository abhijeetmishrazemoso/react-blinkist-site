import React from 'react';
import BookCardMolecule from '../molecules/BookCard/BookCardMolecule';
import { Box, Button, Grid, Link } from '@material-ui/core';
import './BookCard.css';

function BookCard({imageSrc, title, subtitle, readingTabProp,index, key, updateState}){
    const currReading = "reading";
    const currFinished = "finished";
    const revealGrid = "block";
    const hideGrid = "none";
    const [progress,setProgress] = React.useState(0);
    const [reading,setReading] = React.useState(readingTabProp);
    const [visibility, setVisibility] = React.useState(revealGrid);
    const increaseProgress = () => {
        if( progress >= 100 ){
            setProgress(0);
            return;
        }
        setProgress(progress+10);
    };
    const checkAndSetReading = () =>{
        console.log(`reading is ${reading}`);
        if(reading === currReading){
            setReading(currFinished);
            console.log(`Key from BookCard ${index}`);
            updateState(index,currReading);
            return;
        }
        setReading(currReading);
        console.log(`Key from BookCard ${index}`);
        updateState(index, currFinished);
        if(reading === readingTabProp) {
            console.log(`setVisibility ${hideGrid}`);
            setVisibility(hideGrid);
        }else{
            console.log(`setVisibility ${revealGrid}`);
            setVisibility(revealGrid);
        }
    };
    return (<Link href="#">
                <Box component="div" style={{padding:15}} display={visibility}>
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
                                                {reading === currReading?"Finished Reading":"Currently Reading"}
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