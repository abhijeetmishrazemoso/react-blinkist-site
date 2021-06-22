import { Button, Container, Tab, Tabs, Typography } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import AccessTime from '@material-ui/icons/AccessTime';
import {ArrowForwardSharp, AudiotrackOutlined, ShoppingCartRounded} from '@material-ui/icons';
import React from 'react';
import '../App.css';

function BookDetails({imageSrc, title, subtitle, author, desc }) {
    const buttonStyle= {
        color:"darkblue", 
        backgroundColor: '#69E181',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        fontWeight:'lighter',
        fontSize: 11
    };
    const buttonStyle1= {
        color:"#5FD694", 
        backgroundColor: '#fff',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        fontWeight:'bold',
        fontSize: 11,
        border: '1px dotted black',
    };
    const [value, setValue] = React.useState(0);
    const handleChg = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    function TabPanel({ children, value, index, ...other }){
        return (
            <div 
            hidden ={!(value === index)}
            {...other}
            > 
                {(value === index && (children))?children:' '}
            </div>
        );
    }
    const startIcon = <ShoppingCartRounded fontSize="small" style={{color:"black"}}/>;
    return (
        <Container maxWidth="md" style={{margin:'auto', padding:50}}>
            <Grid container direction="colum">
                <Grid container direction="column" item md={8} style={{padding: 10,textAlign: 'left'}}>
                        <Typography variant="body1" style={{textAlign:'left',color:'rgba(20,20,50,.8)' ,paddingBottom:20}}>
                            Get the KeyIdeas from
                        </Typography>
                        <Typography variant="h4" style={{fontWeight:'bold', color:'rgba(40,40,50,.9)',paddingBottom:20}} >
                            {title}
                        </Typography>
                        <Typography variant="body1" style={{lineHeight:.8,fontWeight:'light',letterSpacing:1,paddingBottom:20}} >
                            {subtitle}
                        </Typography>
                        <Typography variant="body2" style={{fontWeight:'bold',paddingBottom:30,color:'rgba(10,10,10,.6)'}} >
                            By&nbsp;{author}
                        </Typography>
                        <Grid container direction="row" style={{padding:5, color:'rgba(20,20,50,.7)'}}>
                            <Grid item>
                                <AccessTime fontSize="large"/>
                            </Grid>
                            <Grid item style={{alignSelf:"center",paddingLeft:10}}>
                                <Typography variant="body2">
                                    15-minute read
                                </Typography>
                            </Grid>
                            <Grid item>
                                &nbsp;&nbsp;&nbsp;<AudiotrackOutlined fontSize="large"/>
                            </Grid>
                            <Grid item style={{alignSelf:"center",paddingLeft:10}}>
                                <Typography variant="body2">
                                    Audio Available
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" style={{padding:5}}>
                            <Grid item style={{paddingRight:15,padding:5, marginRight:20}}>
                                <Button style={buttonStyle} size="small">Add to Library</Button> 
                            </Grid>
                            <Grid item style={{paddingRight:15,padding:5, marginRight:20}}>
                                &nbsp;<Button startIcon={startIcon} variant="outlined" style={buttonStyle1} size="small">Add to Library</Button> 
                            </Grid>
                            <Grid item style={{paddingRight:15,padding:5, marginRight:20, alignSelf:'center',color:'rgba(50,50,50,.75)'}} >
                                <Typography variant="body1">Send to Kindle <ArrowForwardSharp /> </Typography>
                            </Grid>
                        </Grid>
                        <Box container style={{paddingTop:20}}>
                            <Tabs value={value} onChange={handleChg} textColor="primary">
                                <Tab label="Synopsis"/>
                                <Tab label="Who is it for?" />
                                <Tab label="About the Author"/>
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <Grid container direction="row" justify="flex-start">
                                    <Typography variant="body2" style={{margin:15}}>
                                    Dummy Text</Typography>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1} >
                                <Grid container direction="row" justify="flex-start">
                                    <Typography variant="body2" style={{margin:15}}>
                                        Dummy Text 2
                                    </Typography>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={2} >
                                <Grid container direction="row" justify="flex-start">
                                    <Typography variant="body2" style={{margin:15}}>
                                        Dummy Text 3
                                    </Typography>
                                </Grid>
                            </TabPanel>
                        </Box>
                </Grid> 
                    <Grid item md={4} justify="center" alignItems="center" style={{textAlign:'center'}}>
                        <Grid item>
                            <img src={imageSrc} alt=" " style={{padding:50,width:200,height:200, backgroundColor:'dodgerblue' }}/>
                        </Grid>
                    </Grid>
            </Grid>

        </Container>
    );
}

export default BookDetails;
