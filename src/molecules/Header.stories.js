import React from 'react';
import Header from './Header';

export default {
    title: 'Blinkist Header',
    component: Header,
};

const Template = (args) => <Header {...args}/>;

export const HeaderBlinkist = Template.bind({});

HeaderBlinkist.args = {
    
};
