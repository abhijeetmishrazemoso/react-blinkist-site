import React from 'react';
import BookCardMolecule from '../molecules/BookCard/BookCardMolecule';
import { Box, Button, Grid } from '@material-ui/core';
import './BookCard.css';

function BookCard({imageSrc, title, subtitle, readingTabProp, initialReadState}){
    const revealGrid = "block";
    const hideGrid = "none";
    const currReading = "reading";
    const currFinished = "finished";
    const [progress,setProgress] = React.useState(0);
    const [reading,setReading] = React.useState(readingTabProp);
    const finallShowOrNot = readingTabProp === initialReadState? revealGrid:hideGrid;
    const [display,setDisplay] = React.useState(finallShowOrNot);
    const increaseProgress = () => {
        if( progress >= 100 ){
            setProgress(0);
            return;
        }
        setProgress(progress+10);
    };
    const checkAndSetReading = () =>{
        if(reading === currReading){
            setReading(currFinished);
            return;
        }
        setReading(currReading);
        if(readingTabProp === reading){
            setDisplay(revealGrid);
        } else {
            setDisplay(hideGrid);
        }
    };
        return (<Box display={display} style={{padding:15}}>
                    <Grid item lg={3} sm={6} md={4} xs={12} >
                        <Box className="flex-div">
                            <BookCardMolecule imageSrc={imageSrc}
                            name='nice' progress={progress} title={title} subtitle={subtitle} />
                                <Box style={{ padding: 5 }}>
                                <Box style={{textAlign: "center"}} >
                                    <Button variant='contained' color='primary' onClick={increaseProgress}
                                    style={{marginBottom:5}}>Read More!</Button>
                                    <Button variant='contained' color='primary' onClick={checkAndSetReading}>
                                        {reading === currReading?"Finished Reading":"Currently Reading"}</Button></Box>
                                </Box>
                        </Box>
                    </Grid>
                </Box>
        );
}

export default BookCard;