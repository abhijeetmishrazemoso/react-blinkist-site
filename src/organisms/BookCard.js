import React from 'react';
import BookCardMolecule from '../molecules/BookCard/BookCardMolecule';
import { Box, Button } from '@material-ui/core';
import './BookCard.css';

function BookCard({imageSrc, title, subtitle}){
    const [progress,setProgress] = React.useState(0);
    const increaseProgress = () => {
        if( progress >= 100 ){
            setProgress(0);
            return;
        }
        setProgress(progress+10);
    };
        return (<Box className="flex-div">
                    <BookCardMolecule imageSrc={imageSrc}
                    name='nice' progress={progress} title={title} subtitle={subtitle} />
                        <Box style={{ padding: 5 }}>
                        <Box style={{textAlign: "center"}} >
                            <Button variant='contained' color='primary' onClick={increaseProgress}>Read More!</Button></Box>
                        </Box>
                </Box>
        );
}

export default BookCard;