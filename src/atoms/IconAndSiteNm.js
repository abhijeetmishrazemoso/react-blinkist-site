import { Grid, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';

function IconAndSiteNm({
   text, ...props 
  }) {
    return (
      <Grid container direction="row" alignItems="center">
        <AddCircleOutlineIcon fontSize="medium" />
        <Typography variant="h5" style={{ fontWeight: 600 }}>{text}</Typography>
      </Grid>
    );
}
export default IconAndSiteNm;
