import React from 'react';
import BookDetails from './BookDetails';

export default {
    title: 'organism/Book Dts',
    component: BookDetails,
};

const Template = (args) => <BookDetails {...args} />;

export const page = Template.bind({});


page.args = {
 imageSrc :'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
 title:" Beyond Entrepreneurship 2.0",
 subtitle: "Turning Your Business into an Enduring Great Company",
 author: "Jim Collins and Bill Lazier",
 desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate expedita dolorum earum officia facere nulla! Neque odit similique officiis eos eligendi, expedita eum excepturi deleniti facere ad quisquam dolore nihil amet eaque quia soluta accusantium, explicabo minus magni sunt, quaerat quo labore minima at? Eaque ipsa incidunt et eos.",
};

page.defaultargs = page.args;
