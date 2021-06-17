import React from 'react';
import IconAndTextLink from './IconAndTextLink';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const someIcon = <NotificationsNoneIcon fontSize="medium"/>;
export default {
    title: 'Atom/Drop Down Icon and link',
    component: IconAndTextLink,
};

const Template = (args) => <IconAndTextLink {...args}/>;

export const IconAndLink = Template.bind({});

IconAndLink.args = {
    icon: someIcon,
    href: '#',
    text: "Heritage",
};
