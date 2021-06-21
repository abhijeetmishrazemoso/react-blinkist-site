import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React from 'react';
import AppPromotion from '../molecules/AppPromotion';
import TabsWithCards from '../organisms/Drop Down Menu/Tabs/TabsWithCards';
import Footer from '../organisms/Footer';
import ExploreDropDownMenu from '../organisms/header-dropdown/ExploreDropDownMenu';
import Header from '../organisms/header/Header';


const imageSrc = 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg';

function FullPage() {
    
    const [menuOpen, setMenuOpen] = React.useState(false);
    function getStateChangeFromChildren(state){
        setMenuOpen(state);
    }
    return (
        <Container maxWidth="xl" style={{backgroundColor: 'black', margin: 'auto'}}>
            <Grid direction="column" xl={9} lg={10} sm={10} style={{ margin:'auto', backgroundColor: 'white' }}>
            <Container xl={6} maxWidth="md" style={{ backgroundColor: 'white', paddingBottom: 20 }}>
                <Header stateChangeNotify={getStateChangeFromChildren}/>
                <ExploreDropDownMenu menuOpen={menuOpen}/>
                <Box height={75} />
                <Typography variant="h4" style={{textAlign:'left',fontWeight:'bold'}} >My Library</Typography>
                <Box height={50} />
                <AppPromotion />
            </Container>
            <Container maxWidth="lg">
            <Container maxWidth="md"><Divider /></Container>
            <TabsWithCards imageSrc={imageSrc} />
            <Footer />
            </Container>
            </Grid>
      </Container>
    );
}

export default FullPage;
