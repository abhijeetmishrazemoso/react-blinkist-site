import React from 'react';
import IconAndSiteNm from './IconAndSiteNm';

export default {
    title: 'Atom/Icon H1 Molecule',
    component: IconAndSiteNm,
};

const Template = (args) => <IconAndSiteNm {...args} />;

export const IconH1Mol = Template.bind({});

IconH1Mol.args = {
    text: 'Blinkist',
    variant: 'h5',
    iconSize: 'large',
};
