import { 
  Grid, makeStyles, Typography, Divider, Container
 } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const styleOne = makeStyles({
  root: {
    padding: 10,
    margin: 20,
  }
}); 
function LinksRow({ justify }) {
    return (
      <Container maxWidth="md">
        <Grid
          container 
          justify="center"
          lg={12}
          direction="row"
          spacing={2}
          style={{
 textAlign: 'left', paddingBottom: 25, backgroundColor: '#EAF5DB', paddingTop: 10 
}}
        >
          <Grid item justify={justify} xs={4} className={styleOne.root}>
            <Typography variant="body1" fontWeight="fontWeightBold">Explore By Category</Typography>
          </Grid>
          <Grid item justify={justify} xs={4} className={styleOne.root}>
            <Typography variant="body1" fontWeight="fontWeightBold">
              See recently added Titles
            </Typography>
          </Grid>
          <Grid item justify={justify} xs={4} className={styleOne.root}>
            <Typography variant="body1" fontWeight="fontWeightBold">
              See Popular Titles
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
      </Container>
    );
}

export default LinksRow;

LinksRow.propTypes = {
  justify: PropTypes.string,
};
LinksRow.defaultProps = {
  justify: 'flex-start',
};
