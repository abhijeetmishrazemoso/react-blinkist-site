import React from 'react';
import LinksRow from './LinksRow';

function LinksMenu() {
    return (
      <>
        <LinksRow justify="flex-start" />
        <LinksRow justify="flex-end" />
        <LinksRow justify="flex-end" />
        <LinksRow justify="flex-end" />
      </>
    );
}

export default LinksMenu;
