import { Grid } from '@material-ui/core';
import React from 'react';
import DropDownMenuHeader from '../../atoms/DropDownMenuHeader';

function MenuHeader() {
    return (
        <Grid item container direction="row" lg={12} justify="center">
                        <Grid item lg={4} >
                            <DropDownMenuHeader >Explore By Category</DropDownMenuHeader>
                        </Grid>
                        <Grid item lg={4}>
                            <DropDownMenuHeader >See Recently added titles</DropDownMenuHeader>
                        </Grid>
                        <Grid item lg={4}>
                            <DropDownMenuHeader >See popular Titles</DropDownMenuHeader>
                        </Grid>
                    </Grid> 
    );
}

export default MenuHeader;
