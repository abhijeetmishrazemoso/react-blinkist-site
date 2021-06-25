import { Box, Divider, Grid } from '@material-ui/core';
import React from 'react';
import IconAndTextLinkRow from '../../atoms/IconAndTextLinkRow';
import MenuHeader from './MenuHeader';
import PropTypes from 'prop-types';

function ExploreDropDownMenuFin({menuOpen, filterByCategory, categories}) {
    let display = "none";
    if(menuOpen){
        display="flex";
    }
    return (
        <Box display={display} component="span" style={{margin:'auto'}}>
                <Grid container direction="column" spacing={1}>
                    <MenuHeader />
                    <Divider/>
                    <IconAndTextLinkRow text1={categories[0]} text2={categories[1]} text3={categories[2]}
                    filterByCategory={filterByCategory}/>
                    <IconAndTextLinkRow />
                    <IconAndTextLinkRow />
                </Grid>
        </Box>
    );
}

export default ExploreDropDownMenuFin;
ExploreDropDownMenuFin.args = {
    categories: PropTypes.array,
    filterByCategory: PropTypes.func,
    menuOpen:PropTypes.bool,
};
