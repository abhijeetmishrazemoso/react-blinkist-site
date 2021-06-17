/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HeaderTextDropDown from './HeaderTextDropDown';

export default {
    title: 'Atom/Explore Icon DropDown',
    component: ArrowDropDownIcon,
};

const Template = (args) => <HeaderTextDropDown {...args} />;

export const ExportDropDown = Template.bind({});
ExportDropDown.args = {
 text: 'Explore',
 fontSize: 'large',
 justify: 'flex-start',
};

export const ExportDropDownUp = Template.bind({});
ExportDropDownUp.args = {
 text: 'Explore',
 fontSize: 'large',
 justify: 'flex-start',
};
