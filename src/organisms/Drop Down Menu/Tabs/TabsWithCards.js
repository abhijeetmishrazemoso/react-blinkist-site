import { Grid } from '@material-ui/core';
import React from 'react';
import BookCard from '../../BookCard';
import TabbedBooks from './TabbedBooks';

export default function TabsWithCards({ imageSrc }) {
    let currReadingBooks = {};
    const currFinishedBooks = {};
    currReadingBooks = (<Grid container direction="row" justify="center"><BookCard  
    imageSrc={imageSrc} title="Nature and Man" subtitle="Does this not go anywhere?" />
    <BookCard  imageSrc={imageSrc} 
    title="Politics & Science" subtitle="There you have it, the yards of socialism" />
    <BookCard  
    imageSrc={imageSrc} title="Society and Pschycology" subtitle="Does this have a fortune?" />
    </Grid>);

    return (
        <TabbedBooks cardsCur={currReadingBooks} cardsFin={currFinishedBooks} />
    );
}
