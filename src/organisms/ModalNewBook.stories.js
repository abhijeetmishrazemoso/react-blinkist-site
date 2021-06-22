import React from 'react';
import AddBookModal from './ModalNewBook';

export default {
    title: 'organism/Modal Form',
    component: AddBookModal,
};

const Template = (args) => <AddBookModal {...args} />;

export const modal = Template.bind({});

modal.args = {
    modalOpen: true
};
