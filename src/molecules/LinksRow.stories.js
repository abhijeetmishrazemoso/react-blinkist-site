import React from 'react';
import LinksRow from './LinksRow';

export default {
    title: 'Molecule/Row',
    component: LinksRow,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <LinksRow {...args} />;

export const SimpleRow = Template.bind({});

SimpleRow.args = {
    justify: 'flex-start',
};

export const RightAlignedRow = Template.bind({});

RightAlignedRow.args = {
    justify: 'flex-end',
};
