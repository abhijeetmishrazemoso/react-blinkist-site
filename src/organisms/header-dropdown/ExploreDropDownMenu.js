import { Box, Grid } from '@material-ui/core';
import React from 'react';
import IconAndTextLinkRow from '../../atoms/IconAndTextLinkRow';
import LinksHeader from '../../molecules/LinksHeader';

function ExploreDropDownMenu({ menuOpen }) {
    const visible = {
        position: "absolute",
        top:75,
        display:"block",
        backgroundColor: "#EAF5DB",
    };
    const invisible = {
        position: "absolute",
        top:20,
        display:"none",
    };
    let finalStyle;
    if(menuOpen === true){
        finalStyle = visible;
    }else{
        finalStyle = invisible;
    }
    return (
        <Grid xl={12} style={finalStyle}>
            <LinksHeader />
            <IconAndTextLinkRow />
            <IconAndTextLinkRow />
            <IconAndTextLinkRow />
        </Grid>
    );
}

export default ExploreDropDownMenu;
