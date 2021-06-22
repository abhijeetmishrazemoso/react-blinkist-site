import { 
  Grid, makeStyles, Typography, Divider, Container
 } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const styleOne = makeStyles({
  root: {
    padding: 10,
    margin: 20,
    paddingRight:50,
  }
}); 
function LinksHeader({ justify, text1, text2, text3 }) {
    return (
      <Container maxWidth="xl">
        <Grid
          container 
          justify="center"
          xl={12}
          direction="row"
          spacing={15}
          style={{
              textAlign: 'left', 
              paddingBottom: 15, 
              backgroundColor: '#EAF5DB', 
              paddingTop: 10 
          }}
        >
          <Grid item justify={justify} xs={4} className={styleOne.root}>
            <Typography variant="body1" style={{fontWeight:'bold'}}>{text1}</Typography>
          </Grid>
          <Grid item justify={justify} xs={4} className={styleOne.root}>
            <Typography variant="body1" style={{fontWeight:'bold'}}>
              {text2}
            </Typography>
          </Grid>
          <Grid item justify={justify} xs={4} className={styleOne.root}>
            <Typography variant="body1" style={{fontWeight:'bold'}}>
              {text3}
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
      </Container>
    );
}
export default LinksHeader;

LinksHeader.propTypes = {
  justify: PropTypes.string,
};
LinksHeader.defaultProps = {
  justify: 'flex-start',
  text1: "Explore By Category",
  text2: "See recently added titles",
  text3: "See popular titles",
};
