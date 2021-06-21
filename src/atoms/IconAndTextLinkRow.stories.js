import React from 'react';
import IconAndTextLinkRow from './IconAndTextLinkRow';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';

export default {
    title: 'atom/Link Row',
    component: IconAndTextLinkRow,
};

const Template = (args) => <IconAndTextLinkRow {...args} />;
 const  icon1=  <ComputerOutlinedIcon />;
 const  text1= "Computer Education";
const   icon2=  <SchoolOutlinedIcon />;
const   text2= "Child Education";
 const  icon3=  <HomeWorkOutlinedIcon />;
 const  text4= "Heritage & Culture";

export const IconsTexts = Template.bind({});
IconsTexts.args = {
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    text1: text1,
    text2: text2,
    text3: text4,
};



