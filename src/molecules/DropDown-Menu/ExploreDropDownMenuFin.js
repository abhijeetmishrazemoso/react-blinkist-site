import { Box, Divider, Grid } from '@material-ui/core';
import React from 'react';
import IconAndTextLinkRow from '../../atoms/IconAndTextLinkRow';
import MenuHeader from './MenuHeader';

function ExploreDropDownMenuFin({menuOpen, filterByCategory}) {
    let display = "none";
    if(menuOpen){
        display="flex";
    }
    return (
        <Box display={display} component="span" style={{margin:'auto'}}>
                <Grid container direction="column" spacing={1}>
                    <MenuHeader />
                    <Divider/>
                    <IconAndTextLinkRow text1="Entrepreneurship" text2="Science" text3="Economics" filterByCategory={filterByCategory}/>
                    <IconAndTextLinkRow />
                    <IconAndTextLinkRow />
                </Grid>
        </Box>
    );
}

export default ExploreDropDownMenuFin;
