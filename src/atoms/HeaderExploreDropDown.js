import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function HeaderExploreDropDown({
 justify, alignItems, fontSize, ...props 
}) {
    return (
      <Grid container direction="row" alignItems={alignItems} justify={justify}>
        <Typography variant="h6">{props.text}</Typography>
        <ArrowDropDownIcon fontSize={fontSize} />
      </Grid>
    );
}

export default HeaderExploreDropDown;
