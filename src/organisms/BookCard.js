import React from 'react';
import BookCardMolecule from '../molecules/BookCard/BookCardMolecule';
import { Box, Button, Grid } from '@material-ui/core';
import './BookCard.css';

function BookCard({imageSrc, title, subtitle}){
    const [progress,setProgress] = React.useState(0);
    const [reading,setReading] = React.useState("reading");
    const currReading = "reading";
    const currFinished = "finished";
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
    };
        return (
                <Grid item style={{margin:10}} lg={3} sm={6} md={4} xs={12}>
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
        );
}

export default BookCard;