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
const iconLink11 = {
    icon:  <ComputerOutlinedIcon />,
    text: "Computer Education",
};
const iconLink22 = {
    icon:  <SchoolOutlinedIcon />,
    text: "Child Education",
};
const iconLink33 = {
    icon:  <HomeWorkOutlinedIcon />,
    text: "Heritage & Culture",
};

export const IconsTexts = Template.bind({});
IconsTexts.args = {
    iconLink1: iconLink11,
    iconLink2: iconLink22,
    iconLink3: iconLink33,
};



