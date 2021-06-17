/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import LinksMenu from './LinksMenu';

export default {
    title: 'Molecule/Menu',
    component: LinksMenu,
};

const Template = (args) => <LinksMenu {...args} />;

export const simpleMenu = Template.bind({});

simpleMenu.args = {
    justify: 'center',
};
