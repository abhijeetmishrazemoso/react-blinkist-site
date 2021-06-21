import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function HeaderTextDropDown({
    text, fontSize, notifyOnStateChange
}) {
  const hoverStyle = makeStyles({
    root: {
      "&:hover":{
      borderBottom: 4,
      borderBottomColor: 'green',
      }
    }
  });
    const arrowDown = <KeyboardArrowDownIcon fontSize={fontSize} />;
    const arrowUp = <KeyboardArrowUpIcon fontSize={fontSize} />;
    const [ menuOpen, setMenuOpen ] = React.useState(true);
    const [ icon, setIcon ] = React.useState(arrowDown);
    // const [ underlineStyle , setUnderlineStyle ] = React.useState(null);
    const onClickChange = () => {
      if (menuOpen) {
        setIcon(arrowUp);
      } else {
        setIcon(arrowDown);
      }
      setMenuOpen(!menuOpen);
      notifyOnStateChange(menuOpen);
    };
    const divRef = React.createRef();
    
    const mouseOverUnderline = (event) => {
      event.preventDefault();
      divRef.current.style.borderBottom = '0';
      // setUnderlineStyle(hoverStyle.root);
      // divRef.className = underlineStyle;
    };
    const removeUnderline = (event) => {
      event.preventDefault();
      divRef.current.style.borderBottom = "2px";
      divRef.current.style.borderBottomColor = "green";
      // setUnderlineStyle(null);
      // divRef.className = underlineStyle;
    };
      return (
        <Grid container direction="row">
          <div ref={divRef} onMouseOver={mouseOverUnderline} 
          className={hoverStyle.root} onMouseOut={removeUnderline} onClick={onClickChange} 
          style={{ display: 'flex', direction: 'row' }}>
            <Typography variant="body1">{ text }</Typography>
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
