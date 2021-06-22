import { Typography } from '@material-ui/core';
import { Modal, Button, TextField, Paper} from '@material-ui/core';
import React from 'react';

function ModalNewBook({modalOpen, onCancel, onSubmit}) {
    const title='';
    const subtitle='';
    const minToRead='';
    const marginStyle = {margin:25};
    function onCancelModal(event){
        event.preventDefault();
        onCancel(false);
    }
    return (
        <Modal open={modalOpen} style={{marginTop:75,backgroundColor: 'rgba(220,220,220,.2)'}}>
                    <div style={{ paddingTop:15, padding: 16, margin: 'auto', maxWidth: 400, backgroundColor: 'rgba(150,150,150,0.9)' }}>
                        <Paper style={{padding:15,margin:5}}>
                            <form noValidate>
                                <Typography variant="h5" style={marginStyle}>Add Book</Typography>
                                <TextField style={marginStyle} label="Enter Title" value={title} required variant="outlined"/><br/>
                                <TextField style={marginStyle} label="Enter Subtitle" value={subtitle} required variant="outlined"/><br/>
                                <TextField style={marginStyle} label="Enter Minutes to read" value={minToRead} required variant="outlined"/><br/>
                                <Button style={marginStyle} variant="contained" size="large" onClick={onCancelModal} color="primary">Cancel</Button>
                                <Button style={marginStyle} variant="contained" size="large" onClick={onSubmit} color="secondary">Submit</Button>
                            </form>
                        </Paper>
                    </div>
                </Modal>
    );
}

export default ModalNewBook;
