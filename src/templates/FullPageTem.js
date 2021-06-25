import { Box, Container, Divider, Grid } from '@material-ui/core';
import React from 'react';
import Footer from '../organisms/Footer';

function FullPageTem({headerAndModal,exploreDropDownMenu, mainHeading, appPromo,completeTab}) {
    return (
        <Container maxWidth="xl" style={{backgroundColor: 'black', margin: 'auto'}}>
            <Grid direction="column" xl={9} lg={10} sm={10} style={{ margin:'auto', backgroundColor: 'white' }}>
                <Container maxWidth="md" style={{ backgroundColor: 'white', paddingBottom: 20 }}>
                    {headerAndModal}
                    <Container component="div" style={{width:900,top:60,position:'absolute',margin:'auto',backgroundColor:'#F1F6F4'}}>
                        {exploreDropDownMenu}
                    </Container>
                    <Box height={75} />
                    {mainHeading}
                    <Box height={50} />
                    {appPromo}
                </Container>
                <Container maxWidth="lg">
                    <Container maxWidth="md">
                        <Divider />
                    </Container>
                    {completeTab}
                </Container>
                <Footer />
            </Grid>
        </Container>
    );
}

export default FullPageTem;
