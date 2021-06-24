import React from 'react';
import IconAndTextLink from '../atoms/IconAndTextLink';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

function AccountDropDownMenu({displayy}) {
    return (
        <Grid style={{width:250}} style={{display: displayy}}>
            <IconAndTextLink icon={AccountCircleIcon} text="Account Name" />
            <IconAndTextLink icon={LockIcon} text="Log Out" />
        </Grid>
    );
}

export default AccountDropDownMenu;
