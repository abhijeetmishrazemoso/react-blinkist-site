import React from 'react';
import LinksHeader from './LinksHeader';

export default {
    title: 'Molecule/Row',
    component: LinksHeader,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <LinksHeader {...args} />;

export const SimpleRow = Template.bind({});

SimpleRow.args = {
    justify: 'flex-start',
};

export const RightAlignedRow = Template.bind({});

RightAlignedRow.args = {
    justify: 'flex-end',
};
