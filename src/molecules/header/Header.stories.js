/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from './Header';

export default {
    title: 'Molecule/Blinkist Header',
    component: Header,
};
const Template = (args) => <Header {...args} />;

export const HeaderBlinkist = Template.bind({});

HeaderBlinkist.args = {
    
};
