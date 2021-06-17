/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function HeaderExploreDropDown({
    justify, fontSize, text
}) {
    const arrowDown = <KeyboardArrowUpIcon fontSize={fontSize} />;
    const arrowUp = <KeyboardArrowDownIcon fontSize={fontSize} />;
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [icon, setIcon] = React.useState(arrowDown);
    const onClickChange = () => {
      if (menuOpen) {
        setIcon(arrowUp);
      } else {
        setIcon(arrowDown);
      }
      setMenuOpen(!menuOpen);
    };
    
      return (
        <Grid container direction="row" justify={justify}>
          <div onClick={onClickChange} style={{ display: 'flex', direction: 'row' }}>
            <Typography variant="h6">{ text }</Typography>
            {icon}
          </div>
        </Grid>
      );
}
HeaderExploreDropDown.propTypes = {
  justify: PropTypes.string,
  fontSize: PropTypes.string,
  text: PropTypes.string,
};

HeaderExploreDropDown.defaultProps = {
  justify: 'center',
  fontSize: 'default',
  text: 'Explore',
};

export default HeaderExploreDropDown;
