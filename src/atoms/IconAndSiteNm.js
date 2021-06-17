import { Grid, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';
import PropTypes from 'prop-types';

function IconAndSiteNm({
   text
  }) {
    return (
      <Grid container direction="row" alignItems="center">
        <AddCircleOutlineIcon fontSize="medium" />
        <span>&nbsp;</span>
        <Typography variant="h6" style={{ fontWeight: 900 }}>{text}</Typography>
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
