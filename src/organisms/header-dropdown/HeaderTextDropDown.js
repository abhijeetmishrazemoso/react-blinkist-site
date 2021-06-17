import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function HeaderTextDropDown({
    justify, fontSize, text
}) {
    const arrowDown = <KeyboardArrowDownIcon fontSize={fontSize} />;
    const arrowUp = <KeyboardArrowUpIcon fontSize={fontSize} />;
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
HeaderTextDropDown.propTypes = {
  justify: PropTypes.string,
  fontSize: PropTypes.string,
  text: PropTypes.string,
};

HeaderTextDropDown.defaultProps = {
  justify: 'center',
  fontSize: 'default',
  text: 'Explore',
};

export default HeaderTextDropDown;
