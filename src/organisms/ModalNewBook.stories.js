import React from 'react';
import ModalNewBook from './ModalNewBook';

export default {
    title: 'organism/Modal Form',
    component: ModalNewBook,
};

const Template = (args) => <ModalNewBook {...args} />;

export const modal = Template.bind({});

modal.args = {
    modalOpen: true
};
