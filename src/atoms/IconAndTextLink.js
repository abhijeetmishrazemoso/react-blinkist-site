import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';

function IconAndTextLink({ icon, text, href}) {

    const mouseOverUnderline = (e) => {
    };
    return (
        <Link href={href}>
            <Grid container direction="row" style={{ padding: 20 }}>
                <Grid item>
                    {icon}
                </Grid>
                <Grid item>
                    &nbsp;&nbsp;
                </Grid>
                <Grid item>
                    <Typography variant="body1">{text}</Typography>
                </Grid>
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
