import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HeaderExploreDropDown from './HeaderExploreDropDown';

export default {
    title: 'Explore Icon DropDown',
    component: ArrowDropDownIcon,
};

const Template = (args) => <HeaderExploreDropDown {...args} />;

export const ExportDropDown = Template.bind({});
ExportDropDown.args = {
 text: 'Explore',
 fontSize: 'large',
 alignItems: 'center',
 justify: 'flex-start',
}