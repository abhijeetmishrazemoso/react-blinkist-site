import { Typography } from '@material-ui/core';
import React from 'react';

function DropDownMenuHeader({children}) {
    return (
        <Typography variant="body1" style={{fontWeight:'bolder',padding:25,margin:10}}>
            {children}
        </Typography>
    );
};

export default DropDownMenuHeader;
