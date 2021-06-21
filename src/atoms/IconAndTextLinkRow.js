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

function IconAndTextLinkRow({ icon1,text1,icon2,text2,icon3,text3 }) {
 
    return (
        <Grid container direction="row">
            <IconAndTextLink icon={icon1} text={text1} sm={2}/>
            <IconAndTextLink icon={icon2} text={text2} sm={2}/>
            <IconAndTextLink icon={icon3} text={text3} sm={2}/>
        </Grid>
    );
}

export default IconAndTextLinkRow;

IconAndTextLinkRow.propTypes = {
    icon1: PropTypes.object,
    icon2: PropTypes.object,
    icon3: PropTypes.object,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
};
const text1= "Computer Education";
const text2= "Child Education";
const text4= "Heritage & Culture";
IconAndTextLinkRow.defaultProps = {
    icon1: notiNoneIcon,
    icon2: monOnOutLinedIcon,
    icon3: computer,
    text1: text1,
    text2: text2,
    text3: text4,
};
