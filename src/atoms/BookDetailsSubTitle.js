import { Typography } from '@material-ui/core';
import React from 'react';

function BookDetailsSubTitle({subtitle}) {
    return (
        <Typography variant="body1" style={{lineHeight:.8,fontWeight:'light',letterSpacing:1,paddingBottom:20}} >
            {subtitle}
        </Typography>
    );
}

export default BookDetailsSubTitle;
