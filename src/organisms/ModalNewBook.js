import { Typography } from '@material-ui/core';
import { Modal, Button, TextField, Paper} from '@material-ui/core';
import React from 'react';

function AddBookModal({modalOpen, onCancel, onSubmit}) {
    let title='';
    let subtitle='';
    const marginStyle = {margin:25};
    
    function onCancelModal(event){
        event.preventDefault();
        onCancel(false);
    }
    function onSubmitForm(){
        onSubmit(title, subtitle);
        onCancel(false);
    }
    return (
        <Modal open={modalOpen} style={{marginTop:75,backgroundColor: 'rgba(220,220,220,.2)'}}>
                    <div style={{ paddingTop:15, padding: 16, margin: 'auto', maxWidth: 400, backgroundColor: 'rgba(150,150,150,0.9)' }}>
                        <Paper style={{padding:15,margin:5}}>
                            <form noValidate>
                                <Typography variant="h5" style={marginStyle}>Add Book</Typography>

                                <TextField style={marginStyle} label="Enter Title" required variant="outlined" 
                                onChange={(e)=>(title = (e.target.value))}/><br/>

                                <TextField style={marginStyle} label="Enter Subtitle" required variant="outlined" 
                                onChange={(e)=>(subtitle = (e.target.value))}/><br/>

                                <Button style={marginStyle} variant="contained" size="large" 
                                onClick={onCancelModal} color="primary">Cancel</Button>
                                
                                <Button style={marginStyle} variant="contained" size="large" 
                                onClick={onSubmitForm} color="secondary">Submit</Button>
                            </form>
                        </Paper>
                    </div>
                </Modal>
    );
}

export default AddBookModal;
