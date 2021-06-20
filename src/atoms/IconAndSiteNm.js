import { Grid, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';
import PropTypes from 'prop-types';

function IconAndSiteNm({
   text
  }) {
    return (
      <Grid container direction="row" alignItems="flex-start">
        <AddCircleOutlineIcon fontSize="large" />
        <span>&nbsp;</span>
        <Typography variant="h6" style={{ fontWeight: 'bolder' }}>{text}</Typography>
      </Grid>
    );
}
export default IconAndSiteNm;

IconAndSiteNm.propTypes = {
  text: PropTypes.string,
};

IconAndSiteNm.defaultProps = {
  text: PropTypes.string,
};
