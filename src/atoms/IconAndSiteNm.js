import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

function IconAndSiteNm({
   text
  }) {
    const dimension = 30;
    return (
      <Grid container direction="row">
        <Image styleObject={{width:dimension,height:dimension}}
        src="https://play-lh.googleusercontent.com/I6jGTxeDATLQDkDcVogX18r0ol4--mRHQMu6_6r8ntuCOKJo-aKOXsZdJJy_IdVAphY=s180-rw"/>
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
