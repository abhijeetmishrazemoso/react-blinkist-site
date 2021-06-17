/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { SearchIcon } from '@material-ui/icons';

export default {
    title: 'Search Icon',
    component: SearchIcon,
  };

const Template = (args) => <SearchIcon {...args} />;

export const SearchIconn = Template.bind({});

SearchIconn.args = {
  fontSize: "medium",
};
