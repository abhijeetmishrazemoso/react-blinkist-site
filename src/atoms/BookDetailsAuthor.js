import { Typography } from '@material-ui/core';
import React from 'react';

function BookDetailsAuthor({author}) {
    return (
        <Typography variant="body2" style={{fontWeight:'bold',paddingBottom:30,color:'rgba(10,10,10,.6)'}} >
            By&nbsp;{author}
        </Typography>
    );
}

export default BookDetailsAuthor;
