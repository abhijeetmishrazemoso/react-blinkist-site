import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';

function IconAndTextLink({ icon, text, href}) {

    const mouseOverUnderline = (e) => {
    };
    return (
        <Link href={href} style={{color: 'rgba(10,10,10,.9', padding:10,marginBottom:15}}>
                    <Grid container style={{direction:'row'}}> 
                        <Grid item style={{display:"inline-block"}}>
                            {icon}
                        </Grid>
                    &nbsp; &nbsp;<Typography variant="body1">{text}</Typography>
                </Grid>
        </Link>
    );
}

export default IconAndTextLink;

IconAndTextLink.propTypes = {
    icon: PropTypes.element,
    href: PropTypes.string,
    text: PropTypes.string,
};
const homeIcon = <HomeIcon fontSize="large" />;
IconAndTextLink.defaultProps = {
    icon: homeIcon,
    href: '#',
    text: 'History and Cultrure',
};
