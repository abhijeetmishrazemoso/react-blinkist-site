import { Grid } from '@material-ui/core';
import React from 'react';
import IconAndTextLink from './IconAndTextLink';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import PropTypes from 'prop-types';

const notiNoneIcon = <NotificationsNoneIcon fontSize="medium"/>;
const monOnOutLinedIcon = <MonetizationOnOutlinedIcon fontSize="medium"/>;
const computer = <ComputerOutlinedIcon fontSize="medium"/>;

function IconAndTextLinkRow({ iconLink1, iconLink2, iconLink3 }) {
 
    return (
        <Grid container direction="row">
            <IconAndTextLink icon={iconLink1.icon} text={iconLink1.text} sm={2}/>
            <IconAndTextLink icon={iconLink2.icon} text={iconLink2.text} sm={2}/>
            <IconAndTextLink icon={iconLink3.icon} text={iconLink3.text} sm={2}/>
        </Grid>
    );
}

export default IconAndTextLinkRow;

IconAndTextLinkRow.propTypes = {
    iconLink1: PropTypes.object,
    iconLink2: PropTypes.object,
    iconLink3: PropTypes.object,
};
IconAndTextLinkRow.defaultProps = {
    iconLink1: notiNoneIcon,
    iconLink2: monOnOutLinedIcon,
    iconLink3: computer,
};
