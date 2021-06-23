import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import '../App.css';
import BookDetailsTitle from '../atoms/BookDetailsTitle';
import BookDetailsSubTitle from '../atoms/BookDetailsSubTitle';
import BookDetailsAuthor from '../atoms/BookDetailsAuthor';
import BookReadingAudioDetails from '../atoms/BookReadingAudioDetails';
import ReadingOptions from '../atoms/ReadingOptions';
import BookDetailsTabs from '../atoms/BookDetailsTabs';

function CompleteBookDetails({imageSrc, title, subtitle, author, desc }) {
    return (
        <Container maxWidth="md" style={{margin:'auto', padding:50}}>
            <Grid container direction="colum">
                <Grid container direction="column" item md={8} style={{padding: 10,textAlign: 'left'}}>
                        <Typography variant="body1" 
                        style={{textAlign:'left',color:'rgba(20,20,50,.8)' ,paddingBottom:20}}>
                            Get the KeyIdeas from
                        </Typography>
                        <BookDetailsTitle title={title}/>
                        <BookDetailsSubTitle subtitle={subtitle}/>
                        <BookDetailsAuthor author={author}/>
                        <BookReadingAudioDetails />
                        <ReadingOptions />
                        <BookDetailsTabs desc={desc}/>
                </Grid> 
                    <Grid container item md={4} justify="center" alignItems="flex-start" style={{padding:50}}>
                        <Grid item>
                            <img src={imageSrc} alt=" " style={{width:300,height:300}}/>
                        </Grid>
                    </Grid>
            </Grid>
        </Container>
    );
}

export default CompleteBookDetails;
