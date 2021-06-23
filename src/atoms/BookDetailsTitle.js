import { Typography } from '@material-ui/core';
import React from 'react';

function BookDetailsTitle({title}) {
    return (
        <Typography variant="h4" style={{fontWeight:'bold', color:'rgba(40,40,50,.9)',paddingBottom:20}} >
                            {title}
        </Typography>
    );
}

export default BookDetailsTitle;
